/**
 * Icon utility functions for AI Native Kit
 * Helper functions for working with icon tokens
 *
 * @example
 * ```typescript
 * import { getIconPath, getIconUrl } from '@ainativekit/ui';
 * const iconPath = getIconPath('settings-cog'); // 'icons/settings/settings-cog.svg'
 * const iconUrl = getIconUrl('settings-cog'); // '/icons/settings/settings-cog.svg'
 * ```
 */

import { iconCategories, iconMetadata, icons, type IconCategory, type IconName } from './icons';

/**
 * Get the full path to an icon file
 * @param iconName - The globally unique icon name (e.g., 'settings-cog')
 * @returns The full path to the icon file
 */
export function getIconPath(iconName: IconName): string {
  const metadata = iconMetadata[iconName];
  if (!metadata) {
    throw new Error(`Icon '${iconName}' not found in iconMetadata`);
  }
  return `icons/${metadata.category}/${metadata.fileName}.svg`;
}

/**
 * Get the URL path to an icon file (for use in src attributes)
 * @param iconName - The globally unique icon name
 * @returns The URL path to the icon file
 */
export function getIconUrl(iconName: IconName): string {
  return `/${getIconPath(iconName)}`;
}

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
    path: getIconPath(iconName),
    url: getIconUrl(iconName),
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
