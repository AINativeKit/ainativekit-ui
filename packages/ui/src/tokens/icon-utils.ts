/**
 * Icon utility functions for AI Native Kit
 * Helper functions for working with icon metadata
 *
 * Note: Icons are now bundled as inline SVG components, so URL resolution
 * is no longer needed. These utilities help with icon discovery and metadata.
 *
 * @example
 * ```typescript
 * import { getIconMetadata, iconExists } from '@ainativekit/ui';
 * const metadata = getIconMetadata('settings-cog');
 * // { category: 'settings', name: 'settings-cog', fileName: 'settings-cog' }
 * ```
 */

import { iconCategories, iconMetadata, icons, type IconCategory, type IconName } from './icons';

/**
 * Get icon metadata (useful for building icon pickers)
 * @param iconName - The globally unique icon name
 * @returns Icon metadata object
 */
export function getIconMetadata(iconName: IconName) {
  const metadata = iconMetadata[iconName];
  if (!metadata) {
    throw new Error(`Icon '${iconName}' not found in iconMetadata`);
  }

  return {
    category: metadata.category,
    name: iconName,
    fileName: metadata.fileName,
  };
}

/**
 * Get all available icon names in a category
 * @param category - The icon category
 * @returns Array of icon names in the category
 */
export function getIconsInCategory(category: IconCategory): IconName[] {
  return [...icons[category]];
}

/**
 * Get all available icon categories
 * @returns Array of category names
 */
export function getIconCategories(): IconCategory[] {
  return [...iconCategories];
}

/**
 * Check if an icon exists
 * @param iconName - The icon name to check
 * @returns True if the icon exists, false otherwise
 */
export function iconExists(iconName: string): iconName is IconName {
  return iconName in iconMetadata;
}
