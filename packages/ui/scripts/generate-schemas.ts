#!/usr/bin/env node
/**
 * Generate JSON Schemas for all component prop types
 *
 * This script uses typescript-json-schema to generate JSON Schema files
 * from TypeScript interfaces for all components in the library.
 */

import * as TJS from 'typescript-json-schema';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

// Define all component prop types to generate schemas for
const COMPONENT_SCHEMAS = [
  // Primitives
  { name: 'BadgeProps', component: 'Badge', category: 'primitive' },
  { name: 'ButtonProps', component: 'Button', category: 'primitive' },
  { name: 'ChipProps', component: 'Chip', category: 'primitive' },
  { name: 'AlertProps', component: 'Alert', category: 'primitive' },
  { name: 'IconProps', component: 'Icon', category: 'primitive' },
  { name: 'SkeletonProps', component: 'Skeleton', category: 'primitive' },

  // Composed
  { name: 'CardProps', component: 'Card', category: 'composed' },
  { name: 'ImageCardProps', component: 'ImageCard', category: 'composed' },
  { name: 'SummaryCardProps', component: 'SummaryCard', category: 'composed' },
  { name: 'ListCardProps', component: 'ListCard', category: 'composed' },
  { name: 'CarouselProps', component: 'Carousel', category: 'composed' },
  { name: 'ListProps', component: 'List', category: 'composed' },
  { name: 'ListItemProps', component: 'ListItem', category: 'composed' },

  // Patterns
  { name: 'AlbumProps', component: 'Album', category: 'pattern' },
  { name: 'AlbumCardProps', component: 'AlbumCard', category: 'pattern' },
  { name: 'AlbumCarouselProps', component: 'AlbumCarousel', category: 'pattern' },
  { name: 'AlbumViewerProps', component: 'AlbumViewer', category: 'pattern' },
  { name: 'FilmStripProps', component: 'FilmStrip', category: 'pattern' },
  { name: 'MapViewProps', component: 'MapView', category: 'pattern' },
  { name: 'CompactMapProps', component: 'CompactMap', category: 'pattern' },
  { name: 'LocationCarouselProps', component: 'LocationCarousel', category: 'pattern' },
  { name: 'LocationCardProps', component: 'LocationCard', category: 'pattern' },
  { name: 'FullscreenMapProps', component: 'FullscreenMap', category: 'pattern' },
  { name: 'MapSidebarProps', component: 'MapSidebar', category: 'pattern' },
  { name: 'MapInspectorProps', component: 'MapInspector', category: 'pattern' },
];

const SCHEMA_DIR = path.resolve(__dirname, '../schemas/components');
const SRC_DIR = path.resolve(__dirname, '../src');

// Ensure schema directory exists
if (!fs.existsSync(SCHEMA_DIR)) {
  fs.mkdirSync(SCHEMA_DIR, { recursive: true });
}

// Get all component TypeScript files
function getAllTsFiles(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllTsFiles(filePath, fileList);
    } else if (
      filePath.match(/\.tsx?$/) &&
      !filePath.includes('.test.') &&
      !filePath.includes('.stories.')
    ) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const allSourceFiles = getAllTsFiles(path.join(SRC_DIR, 'components'));

// Configure typescript-json-schema settings
const settings: TJS.PartialArgs = {
  required: true,
  noExtraProps: false,
  strictNullChecks: true,
  ignoreErrors: true,
  excludePrivate: true,
  validationKeywords: ['tsType'],
};

console.log('🚀 Generating JSON Schemas for component props...\n');
console.log(`📁 Found ${allSourceFiles.length} source files\n`);

// Create a program from all source files
const program = TJS.getProgramFromFiles(
  allSourceFiles,
  {
    strictNullChecks: true,
  },
  SRC_DIR
);

// Generate schemas for each component
let successCount = 0;
let errorCount = 0;

for (const { name, component, category } of COMPONENT_SCHEMAS) {
  try {
    const schema = TJS.generateSchema(program, name, settings);

    if (schema) {
      // Enhance schema with metadata
      const enhancedSchema = {
        $schema: 'http://json-schema.org/draft-07/schema#',
        $id: `https://ainativekit.com/schemas/${component}.json`,
        title: `${component} Component Props`,
        description: `Props interface for the ${component} component`,
        ...schema,
        // Add custom metadata for AI tools
        'x-component': component,
        'x-category': category,
        'x-package': '@ainativekit/ui',
      };

      // Write schema to file
      const schemaPath = path.join(SCHEMA_DIR, `${component}.schema.json`);
      fs.writeFileSync(schemaPath, JSON.stringify(enhancedSchema, null, 2), 'utf-8');

      console.log(`✅ Generated schema for ${component} (${name})`);
      successCount++;
    } else {
      console.warn(`⚠️  No schema generated for ${name}`);
      errorCount++;
    }
  } catch (error) {
    console.error(`❌ Error generating schema for ${name}:`, error);
    errorCount++;
  }
}

// Generate index file with all schemas
const indexContent = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'https://ainativekit.com/schemas/index.json',
  title: 'AINativeKit UI Component Schemas',
  description: 'Collection of JSON schemas for all AINativeKit UI components',
  version: require('../package.json').version,
  components: COMPONENT_SCHEMAS.reduce(
    (acc, { component, category }) => {
      acc[component] = {
        schemaPath: `./components/${component}.schema.json`,
        category,
        import: '@ainativekit/ui',
      };
      return acc;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    },
    {} as Record<string, any>
  ),
};

const indexPath = path.join(path.dirname(SCHEMA_DIR), 'index.json');
fs.writeFileSync(indexPath, JSON.stringify(indexContent, null, 2), 'utf-8');

console.log(`\n✅ Generated schema index at schemas/index.json`);
console.log(`\n📊 Summary:`);
console.log(`   ✅ Successfully generated: ${successCount}`);
console.log(`   ❌ Errors: ${errorCount}`);
console.log(`\n✨ Done!`);
