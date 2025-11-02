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
 * Get the URL path or import URL to an icon file
 * Resolves relative to the package location for bundled library usage
 * @param iconName - The globally unique icon name
 * @returns The URL or import path to the icon file
 */
export function getIconUrl(iconName: IconName): string {
  const iconPath = getIconPath(iconName);

  // In a bundled library context, resolve relative to this module
  // The icons are published in the npm package at public/icons/
  // When imported, they will be at: node_modules/@ainativekit/ui/public/icons/
  try {
    // Use import.meta.url to get the module's location
    // This works in both ESM and when the module is bundled
    const moduleDir = new URL('.', import.meta.url);
    const iconsUrl = new URL(`../../../public/${iconPath}`, moduleDir);
    return iconsUrl.href;
  } catch {
    // Fallback for environments where import.meta.url is not available
    // (e.g., older Node.js, bundlers that don't support it)
    return `/${iconPath}`;
  }
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
