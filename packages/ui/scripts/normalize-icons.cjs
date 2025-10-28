#!/usr/bin/env node

/**
 * Icon Normalization Script
 *
 * Purpose: Normalize icon filenames to be URL-safe and consistent
 * - Remove commas, spaces, and special characters
 * - Generate kebab-case names
 * - Update both src/tokens/icons and public/icons directories
 * - Regenerate icons.ts token file
 * - Regenerate named React icon components
 *
 * Best Practices:
 * 1. Filenames should be kebab-case (lowercase with hyphens)
 * 2. No spaces, commas, or special characters except hyphens
 * 3. Descriptive names with semantic meaning
 * 4. Maintain category organization
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ICONS_SRC_DIR = path.join(__dirname, '../src/tokens/icons');
const ICONS_PUBLIC_DIR = path.join(__dirname, '../public/icons');
const TOKENS_FILE = path.join(__dirname, '../src/tokens/icons.ts');

/**
 * Normalize a filename to kebab-case
 * Examples:
 *   "avatar, profile.svg" -> "avatar-profile.svg"
 *   "plus-circle, +, add.svg" -> "plus-circle-add.svg"
 *   "sound-on, read-out-loud, speaker.svg" -> "sound-on-read-out-loud-speaker.svg"
 */
function normalizeFilename(filename) {
  const ext = path.extname(filename);
  const name = path.basename(filename, ext);

  const normalized = name
    // Replace commas and multiple spaces with single space
    .replace(/,/g, ' ')
    .replace(/\s+/g, ' ')
    // Remove special characters except spaces and hyphens
    .replace(/[^a-zA-Z0-9\s-]/g, '')
    // Trim and convert spaces to hyphens
    .trim()
    .replace(/\s+/g, '-')
    // Convert to lowercase
    .toLowerCase()
    // Remove multiple consecutive hyphens
    .replace(/-+/g, '-')
    // Remove leading/trailing hyphens
    .replace(/^-+|-+$/g, '');

  return normalized + ext;
}

/**
 * Get all SVG files recursively in a directory
 */
function getAllSvgFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllSvgFiles(filePath, fileList);
    } else if (path.extname(file) === '.svg') {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Rename files in a directory
 */
function normalizeDirectory(baseDir) {
  console.log(`\n📁 Normalizing directory: ${baseDir}`);

  const svgFiles = getAllSvgFiles(baseDir);
  const renames = [];

  svgFiles.forEach(filePath => {
    const dir = path.dirname(filePath);
    const oldName = path.basename(filePath);
    const newName = normalizeFilename(oldName);

    if (oldName !== newName) {
      renames.push({
        oldPath: filePath,
        newPath: path.join(dir, newName),
        oldName,
        newName,
        category: path.relative(baseDir, dir)
      });
    }
  });

  console.log(`Found ${renames.length} files to rename`);

  // Perform renames
  renames.forEach(({ oldPath, newPath, oldName, newName, category }) => {
    try {
      fs.renameSync(oldPath, newPath);
      console.log(`  ✓ ${category}/${oldName} → ${newName}`);
    } catch (error) {
      console.error(`  ✗ Failed to rename ${oldPath}: ${error.message}`);
    }
  });

  return renames;
}

/**
 * Generate icons.ts token file from actual files
 */
function generateIconTokens() {
  console.log('\n📝 Generating icons.ts token file...');

  const categories = fs.readdirSync(ICONS_SRC_DIR)
    .filter(item => {
      const itemPath = path.join(ICONS_SRC_DIR, item);
      return fs.statSync(itemPath).isDirectory();
    });

  const iconsByCategory = {};
  const flatIconEntries = [];

  categories.forEach(category => {
    const categoryPath = path.join(ICONS_SRC_DIR, category);
    const svgFiles = getAllSvgFiles(categoryPath);

    const icons = svgFiles
      .map(filePath => {
        const filename = path.basename(filePath, '.svg');
        const relativePath = path.relative(categoryPath, filePath);
        const relativeDir = path.dirname(relativePath);

        // If in subdirectory, include it in the path
        return relativeDir && relativeDir !== '.'
          ? path.join(relativeDir, filename)
          : filename;
      })
      .sort();

    iconsByCategory[category] = icons;
    icons.forEach(icon => {
      flatIconEntries.push({ category, icon });
    });
  });

  // Generate TypeScript content
  let content = `/**
 * Icon tokens for AI Native Kit
 * Auto-generated from SVG files in src/tokens/icons/
 *
 * DO NOT EDIT MANUALLY - Run 'pnpm sync-icons' to regenerate
 *
 * @example
 * \`\`\`typescript
 * import { Icon } from '@ainativekit/ui';
 * import { PlusCircleAdd } from '@ainativekit/ui/icons';
 *
 * <Icon name="plus-circle-add" size="md" />
 * <PlusCircleAdd size="md" />
 * \`\`\`
 */

export const iconCategories = ${JSON.stringify(categories, null, 2)} as const;

export type IconCategory = (typeof iconCategories)[number];

`;

  // Generate type definitions for each category
  categories.forEach(category => {
    const typeName = category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('') + 'IconName';

    const icons = iconsByCategory[category];

    content += `// ${category.charAt(0).toUpperCase() + category.slice(1)} Icon Names (${icons.length} icons)\n`;
    content += `export type ${typeName} =\n`;
    content += icons.map(icon => `  | '${icon}'`).join('\n');
    content += ';\n\n';
  });

  // Generate union type, list, and metadata map
  content += `// Union type for all icon names\n`;
  content += `export type IconName =\n`;
  categories.forEach((category, index) => {
    const typeName = category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('') + 'IconName';
    const isLast = index === categories.length - 1;
    content += `  | ${typeName}${isLast ? '' : '\n'}`;
  });
  content += ';\n\n';

  content += `export const iconNames = [\n`;
  flatIconEntries.forEach(({ icon }, index) => {
    const isLast = index === flatIconEntries.length - 1;
    content += `  '${icon}'${isLast ? '' : ',\n'}`;
  });
  content += `] as const;\n\n`;

  content += `export const iconMetadata = {\n`;
  flatIconEntries.forEach(({ category, icon }, index) => {
    const isLast = index === flatIconEntries.length - 1;
    content += `  '${icon}': { category: '${category}', fileName: '${icon}' }${isLast ? '' : ',\n'}`;
  });
  content += `} as const satisfies Record<IconName, { category: IconCategory; fileName: string }>;\n\n`;

  // Generate icons object
  content += `/**\n * Icon registry - maps category names to arrays of available icon names\n * Category -> Icon Name[]\n */\n`;
  content += `export const icons = {\n`;

  categories.forEach((category, catIndex) => {
    const icons = iconsByCategory[category];
    content += `  '${category}': [\n`;

    icons.forEach((icon, iconIndex) => {
      const isLast = iconIndex === icons.length - 1;
      content += `    '${icon}'${isLast ? '' : ','}\n`;
    });

    const isLastCat = catIndex === categories.length - 1;
    content += `  ]${isLastCat ? '' : ','}\n`;
  });

  content += `} as const;\n`;

  // Write file
  fs.writeFileSync(TOKENS_FILE, content, 'utf-8');

  const totalIcons = Object.values(iconsByCategory).reduce((sum, icons) => sum + icons.length, 0);
  console.log(`✓ Generated tokens for ${totalIcons} icons across ${categories.length} categories`);

  return iconsByCategory;
}

/**
 * Sync icons from src to public directory
 */
function syncToPublic(iconsByCategory) {
  console.log('\n📋 Syncing icons to public directory...');

  // Clear public icons directory
  if (fs.existsSync(ICONS_PUBLIC_DIR)) {
    fs.rmSync(ICONS_PUBLIC_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(ICONS_PUBLIC_DIR, { recursive: true });

  let copiedCount = 0;

  Object.keys(iconsByCategory).forEach(category => {
    const srcCategoryDir = path.join(ICONS_SRC_DIR, category);
    const destCategoryDir = path.join(ICONS_PUBLIC_DIR, category);

    // Copy entire category directory
    fs.cpSync(srcCategoryDir, destCategoryDir, { recursive: true });

    const icons = iconsByCategory[category];
    copiedCount += icons.length;
    console.log(`  ✓ ${category}: ${icons.length} icons`);
  });

  console.log(`✓ Synced ${copiedCount} icons to public directory`);
}

/**
 * Main execution
 */
function main() {
  console.log('🎨 Icon Normalization & Sync Tool\n');
  console.log('This will:');
  console.log('1. Normalize all icon filenames to kebab-case');
  console.log('2. Regenerate icons.ts token file');
  console.log('3. Sync icons to public directory');
  console.log('4. Regenerate named icon React components');
  console.log('='.repeat(60));

  try {
    // Step 1: Normalize src/tokens/icons
    normalizeDirectory(ICONS_SRC_DIR);

    // Step 2: Generate token file
    const iconsByCategory = generateIconTokens();

    // Step 3: Sync to public
    syncToPublic(iconsByCategory);

    // Step 4: Regenerate named icon components
    console.log('\n🧱 Regenerating named icon components...');
    const generatorPath = path.join(__dirname, 'generate-icon-components.cjs');
    const result = spawnSync('node', [generatorPath], { stdio: 'inherit' });
    if (result.status !== 0) {
      throw new Error('Failed to generate named icon components');
    }

    console.log('\n✨ Icon normalization complete!\n');
    console.log('Next steps:');
    console.log('  • Run tests: pnpm --filter @ainativekit/ui test');
    console.log('  • Build: pnpm --filter @ainativekit/ui build');
    console.log('  • Start Storybook: pnpm --filter @ainativekit/ui storybook');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  normalizeFilename,
  normalizeDirectory,
  generateIconTokens,
  syncToPublic
};
