#!/usr/bin/env node
/**
 * Generate Markdown documentation from TypeScript component files
 *
 * This script parses TypeScript component files, extracts JSDoc comments,
 * prop types, and examples, then generates comprehensive Markdown documentation
 * for Context7 and human developers.
 */

import { Project } from 'ts-morph';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

const SRC_DIR = path.resolve(__dirname, '../src');
const DOCS_DIR = path.resolve(__dirname, '../docs');

// Load metadata if available, but don't fail if it's missing
let componentRegistry: Record<string, unknown> = { components: {} };
try {
  componentRegistry = require('../metadata/component-registry.json');
} catch {
  console.log('ℹ️  component-registry.json not found - generating docs from TypeScript only\n');
}

// Ensure docs directory exists
const docsComponents = path.join(DOCS_DIR, 'components');
['primitives', 'composed', 'patterns'].forEach(category => {
  const dir = path.join(docsComponents, category);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

console.log('🚀 Generating Markdown documentation from TypeScript...\n');

// Create TypeScript project
const project = new Project({
  tsConfigFilePath: path.resolve(__dirname, '../tsconfig.json'),
});

// Component categories
const CATEGORIES: Record<string, string[]> = {
  primitives: ['Badge', 'Button', 'Chip', 'Alert', 'Icon', 'Skeleton'],
  composed: ['Card', 'ImageCard', 'SummaryCard', 'ListCard', 'Carousel', 'List', 'ListItem'],
  patterns: [
    'Album',
    'AlbumCard',
    'AlbumCarousel',
    'AlbumViewer',
    'FilmStrip',
    'MapView',
    'CompactMap',
    'FullscreenMap',
    'LocationCard',
    'LocationCarousel',
    'MapSidebar',
    'MapInspector',
  ],
};

/**
 * Extract examples from JSDoc comment
 */
function _extractExamples(jsDocComment: string): string[] {
  const examples: string[] = [];
  const exampleMatches = jsDocComment.matchAll(/@example\s*([\s\S]*?)(?=@\w+|$)/g);

  for (const match of exampleMatches) {
    if (match[1]) {
      examples.push(match[1].trim());
    }
  }

  return examples;
}

/**
 * Generate props table from interface
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function generatePropsTable(componentName: string, sourceFile: any): string {
  try {
    // Find the props interface
    const propsInterface = sourceFile.getInterface(`${componentName}Props`);
    if (!propsInterface) {
      return '_No props interface found_';
    }

    const rows: string[] = [];
    rows.push('| Prop | Type | Default | Description |');
    rows.push('|------|------|---------|-------------|');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    propsInterface.getProperties().forEach((prop: any) => {
      const name = prop.getName();
      const type = prop.getType().getText().replace(/\|/g, '\\|');
      const jsDoc = prop.getJsDocs()[0];
      const description = jsDoc ? jsDoc.getDescription().trim() : '';

      // Extract default value from JSDoc @default tag
      let defaultValue = '-';
      if (jsDoc) {
        const tags = jsDoc.getTags();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const defaultTag = tags.find((tag: any) => tag.getTagName() === 'default');
        if (defaultTag) {
          defaultValue = `\`${defaultTag.getComment()}\``;
        }
      }

      rows.push(`| \`${name}\` | \`${type}\` | ${defaultValue} | ${description} |`);
    });

    return rows.join('\n');
  } catch {
    console.warn(`Warning: Could not generate props table for ${componentName}`);
    return '_Props table generation failed_';
  }
}

/**
 * Generate documentation for a single component
 */
function generateComponentDoc(componentName: string, category: string): void {
  // Find component source file
  const sourceFilePath = path.join(
    SRC_DIR,
    'components',
    componentName,
    `${componentName}.tsx`
  );

  if (!fs.existsSync(sourceFilePath)) {
    console.warn(`⚠️  Source file not found for ${componentName}, skipping...`);
    return;
  }

  const sourceFile = project.addSourceFileAtPath(sourceFilePath);

  // Get metadata if available
  const meta = (componentRegistry.components as Record<string, unknown>)?.[componentName] as Record<string, unknown> || {};

  const description = (meta.description as string) || 'Component for building user interfaces.';
  let examples: string[] = [];

  // Extract JSDoc examples from source file
  // Simplified approach: just extract examples, use metadata for description
  try {
    const sourceText = sourceFile.getText();

    // Find all @example blocks with code fences (```tsx ... ```)
    // This regex captures content between @example and the next tag or end of comment
    const exampleRegex = /@example\s*\n\s*\*\s*```tsx\n([\s\S]*?)```\s*\n/g;
    const exampleMatches = Array.from(sourceText.matchAll(exampleRegex));

    if (exampleMatches.length > 0) {
      examples = exampleMatches.map(match => {
        let code = match[1];
        // Remove JSDoc comment markers (* at start of lines)
        code = code.split('\n').map(line => {
          const cleaned = line.replace(/^\s*\*\s?/, '');
          return cleaned;
        }).join('\n').trim();
        return `\`\`\`tsx\n${code}\n\`\`\``;
      });
    }
  } catch {
    // Silently continue if extraction fails
  }

  // Use examples from metadata if none in JSDoc (metadata is optional)
  if (examples.length === 0 && meta.examples && Array.isArray(meta.examples) && meta.examples.length > 0) {
    examples = (meta.examples as Array<Record<string, string>>).map(ex => `\`\`\`tsx\n${ex.code}\n\`\`\``);
  }

  // Generate props table
  const propsTable = generatePropsTable(componentName, sourceFile);

  // Generate markdown content
  const sections: string[] = [
    `# ${componentName}`,
    '',
    description,
    '',
    '## Import',
    '',
    '```tsx',
    `import { ${componentName} } from '@ainativekit/ui';`,
    `import '@ainativekit/ui/styles';`,
    '```',
    '',
    '## Basic Usage',
    '',
    examples.length > 0 ? examples[0] : `\`\`\`tsx\n<${componentName} />\n\`\`\``,
    '',
    '## Props',
    '',
    propsTable,
  ];

  // Add additional examples if available
  if (examples.length > 1) {
    sections.push('');
    sections.push('## Examples');
    sections.push('');
    examples.slice(1).forEach((ex, i) => {
      sections.push(`### Example ${i + 1}`);
      sections.push('');
      sections.push(ex);
      sections.push('');
    });
  }

  // Add use cases from metadata if available
  if (Array.isArray(meta.useCases) && meta.useCases.length > 0) {
    sections.push('## Use Cases');
    sections.push('');
    sections.push(meta.useCases.map((uc: string) => `- ${uc.charAt(0).toUpperCase() + uc.slice(1)}`).join('\n'));
    sections.push('');
  }

  // Add features from metadata if available
  if (Array.isArray(meta.features) && meta.features.length > 0) {
    sections.push('## Features');
    sections.push('');
    sections.push(meta.features.map((f: string) => `- ${f.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`).join('\n'));
    sections.push('');
  }

  // Add related components from metadata if available
  if (Array.isArray(meta.relatedComponents) && meta.relatedComponents.length > 0) {
    sections.push('## Related Components');
    sections.push('');
    sections.push(meta.relatedComponents.map((rc: string) => `- [${rc}](/components/${getCategoryForComponent(rc)}/${rc.toLowerCase()}.md)`).join('\n'));
    sections.push('');
  }

  sections.push('---');
  sections.push('');
  sections.push(`_Generated from TypeScript definitions. [View source](../../src/components/${componentName}/${componentName}.tsx)_`);

  const markdown = sections.join('\n');

  // Write markdown file
  const outputPath = path.join(
    docsComponents,
    category,
    `${componentName.toLowerCase()}.md`
  );

  fs.writeFileSync(outputPath, markdown, 'utf-8');
  console.log(`✅ Generated ${category}/${componentName.toLowerCase()}.md`);
}

/**
 * Get category for a component name
 */
function getCategoryForComponent(componentName: string): string {
  for (const [category, components] of Object.entries(CATEGORIES)) {
    if (components.includes(componentName)) {
      return category;
    }
  }
  return 'primitives';
}

/**
 * Generate index file for a category
 */
function generateCategoryIndex(category: string, components: string[]): void {
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);
  const markdown = `# ${categoryTitle} Components

${components.map(comp => {
    const meta = componentRegistry.components[comp];
    return `## [${comp}](./${comp.toLowerCase()}.md)

${meta?.description || ''}
`;
  }).join('\n')}
`;

  const outputPath = path.join(docsComponents, category, 'index.md');
  fs.writeFileSync(outputPath, markdown, 'utf-8');
  console.log(`✅ Generated ${category}/index.md`);
}

/**
 * Generate main documentation index
 */
function generateMainIndex(): void {
  const markdown = `# AINativeKit UI Documentation

> React component library optimized for ChatGPT Apps SDK with JSON-to-UI mapping, 417 Figma-aligned icons, and AI-native patterns.

## Quick Start

\`\`\`bash
npm install @ainativekit/ui
\`\`\`

\`\`\`tsx
import { SummaryCard, Button } from '@ainativekit/ui';
import '@ainativekit/ui/styles';

function App() {
  return (
    <SummaryCard
      title="Little Nona's"
      subtitle="1427 Via Campania"
      badge="9.2"
      badgeVariant="success"
      images={["restaurant.jpg"]}
      buttonText="Order Now"
    />
  );
}
\`\`\`

## Component Categories

### [Primitives](/components/primitives/)
Basic building block components.

${CATEGORIES.primitives.map(c => `- [${c}](/components/primitives/${c.toLowerCase()}.md)`).join('\n')}

### [Composed](/components/composed/)
Medium complexity, general-purpose components.

${CATEGORIES.composed.map(c => `- [${c}](/components/composed/${c.toLowerCase()}.md)`).join('\n')}

### [Patterns](/components/patterns/)
Complex, domain-specific, feature-complete patterns.

${CATEGORIES.patterns.map(c => `- [${c}](/components/patterns/${c.toLowerCase()}.md)`).join('\n')}

## Features

- 🎯 **Apps SDK Optimized:** Components designed for ChatGPT Apps SDK
- 🔄 **JSON → UI Mapping:** Render structured MCP results with minimal code
- 🎨 **417 Figma-Aligned Icons:** Fully typed and tree-shakeable
- ♿ **Accessibility First:** ARIA attributes & sensible focus management
- 🌗 **Dark/Light Themes:** Built-in theme switching
- 📦 **Tree-Shakeable & Type-Safe:** Import only what you need

## Links

- [GitHub Repository](https://github.com/ainativekit/ainativekit-ui)
- [Storybook](https://www.ainativekit.com)
- [NPM Package](https://www.npmjs.com/package/@ainativekit/ui)
`;

  const outputPath = path.join(DOCS_DIR, 'index.md');
  fs.writeFileSync(outputPath, markdown, 'utf-8');
  console.log(`✅ Generated docs/index.md`);
}

// Main execution
console.log('📁 Processing components...\n');

let totalGenerated = 0;

for (const [category, components] of Object.entries(CATEGORIES)) {
  console.log(`\n📂 Category: ${category}`);
  components.forEach(componentName => {
    try {
      generateComponentDoc(componentName, category);
      totalGenerated++;
    } catch (error) {
      console.error(`❌ Error generating docs for ${componentName}:`, error);
    }
  });

  generateCategoryIndex(category, components);
}

generateMainIndex();

console.log(`\n✨ Done! Generated ${totalGenerated} component documentation files.`);
console.log(`📖 Documentation available in: ${DOCS_DIR}`);
