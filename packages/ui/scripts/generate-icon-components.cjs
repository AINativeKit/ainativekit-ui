#!/usr/bin/env node

/**
 * Icon Component Generator
 *
 * Generates individual React components for each icon to enable:
 * - Tree-shaking (import only what you use)
 * - Named imports (import { SettingsCog } from '@ainativekit/ui/icons')
 * - Industry-standard API (like Lucide, Material UI, Heroicons)
 *
 * Usage: node scripts/generate-icon-components.cjs
 */

const fs = require('fs');
const path = require('path');

const ICONS_SRC_DIR = path.join(__dirname, '../src/tokens/icons');
const COMPONENTS_OUTPUT_DIR = path.join(__dirname, '../src/icons');
const TEMPLATE_PATH = path.join(__dirname, '../src/icons/IconTemplate.tsx');

/**
 * Convert kebab-case icon name to PascalCase component name
 * @param {string} iconName - kebab-case icon name (e.g., 'settings-cog')
 * @returns {string} PascalCase component name (e.g., 'SettingsCog')
 */
function toPascalCase(iconName) {
  return iconName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

/**
 * Get all SVG files recursively
 */
function getAllSvgFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllSvgFiles(filePath, fileList);
    } else if (path.extname(file) === '.svg') {
      const category = path.relative(ICONS_SRC_DIR, path.dirname(filePath));
      const iconName = path.basename(file, '.svg');
      fileList.push({ category, iconName, filePath });
    }
  });

  return fileList;
}

/**
 * Get category-specific usage examples and accessibility guidance
 */
function getCategoryExamples(category, componentName, iconName) {
  const categoryExamples = {
    'account-user': {
      example: `// Most common: Decorative in buttons
<Button variant="primary" leftIcon="${iconName}">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="${iconName}" aria-label="User profile" />`,
      accessibility: 'Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.'
    },
    'arrows': {
      example: `// Navigation with text
<Button variant="ghost" rightIcon="${iconName}">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="${iconName}" aria-label="Go back" />`,
      accessibility: 'Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.'
    },
    'chat-tools': {
      example: `// Action button with icon
<Button variant="secondary" leftIcon="${iconName}">
  ${iconName.includes('copy') ? 'Copy' : iconName.includes('edit') ? 'Edit' : iconName.includes('download') ? 'Download' : 'Action'}
</Button>

// Toolbar icon button
<Button iconOnly="${iconName}" aria-label="${iconName.replace(/-/g, ' ')}" />`,
      accessibility: 'Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.'
    },
    'interface': {
      example: `// Common UI controls
<Button variant="ghost" iconOnly="${iconName}" aria-label="${iconName.includes('close') ? 'Close' : iconName.includes('menu') ? 'Open menu' : iconName.includes('search') ? 'Search' : 'Toggle'}" />

// With interactive state
<Icon name="${iconName}" interactive onClick={handleClick} />`,
      accessibility: 'Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.'
    },
    'misc': {
      example: `// Decorative icon with text
<Button leftIcon="${iconName}">
  ${iconName.includes('star') ? 'Favorite' : iconName.includes('heart') ? 'Like' : 'Action'}
</Button>

// Standalone meaningful icon
<Icon name="${iconName}" aria-label="${iconName.replace(/-/g, ' ')}" />`,
      accessibility: 'Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.'
    },
    'platform': {
      example: `// Platform identifier (decorative)
<div className="platform-badge">
  <Icon name="${iconName}" size="sm" />
  <span>${iconName.includes('apple') ? 'Apple' : iconName.includes('windows') ? 'Windows' : 'Platform'}</span>
</div>`,
      accessibility: 'Platform icons are typically decorative, paired with visible text identifying the platform.'
    },
    'settings': {
      example: `// Settings action
<Button variant="secondary" leftIcon="${iconName}">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="${iconName}">
  ${iconName.includes('notification') ? 'Notifications' : iconName.includes('privacy') ? 'Privacy' : 'Configure'}
</Button>`,
      accessibility: 'Settings icons are decorative when accompanied by descriptive text labels.'
    }
  };

  const defaultExample = {
    example: `// With Button component
<Button variant="primary" leftIcon="${iconName}">
  Action
</Button>

// Icon-only button
<Button iconOnly="${iconName}" aria-label="Action" />`,
    accessibility: 'Most icons are decorative when paired with text. Icon-only buttons require aria-label on the Button.'
  };

  return categoryExamples[category] || defaultExample;
}

/**
 * Generate React component for an icon
 */
function generateIconComponent(category, iconName) {
  const componentName = toPascalCase(iconName);
  const { example, accessibility } = getCategoryExamples(category, componentName, iconName);

  return `import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ${componentName} icon from ${category} category
 *
 * @example
 * \`\`\`tsx
 * import { ${componentName} } from '@ainativekit/ui/icons';
 *
 * ${example}
 * \`\`\`
 *
 * @accessibility
 * ${accessibility}
 */
export const ${componentName} = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="${iconName}" {...props} />;
  }
);

${componentName}.displayName = '${componentName}';
`;
}

/**
 * Main execution
 */
function main() {
  console.log('🎨 Generating Icon Components...\n');

  // Clean output directory
  if (fs.existsSync(COMPONENTS_OUTPUT_DIR)) {
    fs.rmSync(COMPONENTS_OUTPUT_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(COMPONENTS_OUTPUT_DIR, { recursive: true });

  // Get all icons
  const icons = getAllSvgFiles(ICONS_SRC_DIR);
  console.log(`Found ${icons.length} icons across categories\n`);

  const componentsByCategory = {};
  const allComponents = [];

  // Generate components
  icons.forEach(({ category, iconName }) => {
    const componentName = toPascalCase(iconName);
    const componentCode = generateIconComponent(category, iconName);
    const fileName = `${componentName}.tsx`;
    const filePath = path.join(COMPONENTS_OUTPUT_DIR, fileName);

    fs.writeFileSync(filePath, componentCode, 'utf-8');

    if (!componentsByCategory[category]) {
      componentsByCategory[category] = [];
    }
    componentsByCategory[category].push(componentName);
    allComponents.push(componentName);
  });

  console.log('✓ Generated individual components\n');

  // Generate index file
  const indexContent = `/**
 * Icon Components - AI Native Kit
 * Auto-generated individual icon components for tree-shaking
 *
 * @example
 * \`\`\`tsx
 * // Named imports (tree-shakeable)
 * import { SettingsCog, PlusCircleAdd } from '@ainativekit/ui/icons';
 *
 * <SettingsCog size="md" />
 * <PlusCircleAdd size={24} />
 * \`\`\`
 *
 * Generated: ${new Date().toISOString()}
 * Total icons: ${allComponents.length}
 */

${allComponents.map(name => `export { ${name} } from './${name}';`).join('\n')}
`;

  fs.writeFileSync(
    path.join(COMPONENTS_OUTPUT_DIR, 'index.ts'),
    indexContent,
    'utf-8'
  );

  console.log('✓ Generated index.ts with all exports\n');

  // Generate category-specific exports (optional)
  Object.entries(componentsByCategory).forEach(([category, components]) => {
    const categoryFileName = `${category}.ts`;
    const categoryContent = `/**
 * ${category.charAt(0).toUpperCase() + category.slice(1)} Icons
 * ${components.length} icons
 */

${components.map(name => `export { ${name} } from './${name}';`).join('\n')}
`;

    fs.writeFileSync(
      path.join(COMPONENTS_OUTPUT_DIR, categoryFileName),
      categoryContent,
      'utf-8'
    );
  });

  console.log('✓ Generated category-specific exports\n');

  // Summary
  console.log('📊 Summary:');
  console.log(`   Total components: ${allComponents.length}`);
  console.log(`   Categories: ${Object.keys(componentsByCategory).length}`);
  console.log('');
  Object.entries(componentsByCategory)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([category, components]) => {
      console.log(`   ${category}: ${components.length} icons`);
    });

  console.log('\n✨ Icon components generated successfully!');
  console.log('\nUsage:');
  console.log('  import { SettingsCog, PlusCircleAdd } from \'@ainativekit/ui/icons\';');
  console.log('  <SettingsCog size="md" />');
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  toPascalCase,
  generateIconComponent,
  getAllSvgFiles
};
