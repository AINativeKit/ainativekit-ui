/**
 * Token Helper Utilities
 * Type-safe helpers for using design tokens in inline styles
 *
 * @example
 * ```typescript
 * import { cssVar, spacing, colors } from '@ainativekit/ui/tokens';
 *
 * // Direct value access (returns actual values like '32px', '#FFFFFF')
 * <div style={{ gap: spacing[16], color: colors.light.text.primary }} />
 *
 * // CSS variable access (returns 'var(--ai-spacing-16)', useful for theme-aware styles)
 * <div style={{ gap: cssVar.spacing(16), color: cssVar.color('text-primary') }} />
 * ```
 */

import { spacing as spacingSource, type SpacingScale } from './spacing';
import { colors as colorsSource } from './colors';
import { radius as radiusSource } from './radius';
import { typography as typographySource } from './typography';
import {
  elevation as elevationSource,
  defaultElevation as defaultElevationSource,
  type ElevationLevel,
} from './elevation';
import { opacity as opacitySource } from './opacity';

export type { ElevationLevel, SpacingScale };

/**
 * Color paths for accessing nested color tokens via CSS variables
 * These map to actual --ai-color-* CSS custom properties
 *
 * Note: Use accent colors for semantic meaning (accent-blue, accent-red, etc.)
 * Brand colors (primary, success, error, warning, info) are available in the
 * colors.light.brand and colors.dark.brand objects but do NOT have CSS variables
 *
 * @example 'text-primary', 'bg-secondary', 'accent-blue'
 */
export type ColorPath =
  | 'text-primary'
  | 'text-secondary'
  | 'text-tertiary'
  | 'text-inverted'
  | 'bg-primary'
  | 'bg-secondary'
  | 'bg-tertiary'
  | 'icon-primary'
  | 'icon-secondary'
  | 'icon-tertiary'
  | 'icon-inverted'
  | 'accent-blue'
  | 'accent-red'
  | 'accent-orange'
  | 'accent-green'
  | 'outline'
  | 'border-light'
  | 'border-default'
  | 'border-heavy';

/**
 * Radius scale values (none, sm, md, base, lg, xl, full)
 */
export type RadiusScale = 'none' | 'sm' | 'md' | 'base' | 'lg' | 'xl' | 'full';

/**
 * Typography style names
 */
export type TypographyStyle =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'body'
  | 'bodyEmph'
  | 'bodySmall'
  | 'bodySmallEmph'
  | 'caption'
  | 'captionEmph'
  | 'button'
  | 'badge';

/**
 * Opacity presets
 */
export type OpacityPreset = 'full' | 'subtle' | 'muted' | 'disabled';

// ============================================================================
// Direct Token Access (returns actual values)
// ============================================================================

/**
 * Spacing tokens - returns actual pixel values
 * @example spacing[16] // '32px'
 */
export const spacing = spacingSource;

/**
 * Color tokens organized by theme
 * @example colors.light.text.primary // '#0D0D0D'
 */
export const colors = colorsSource;

/**
 * Border radius tokens
 * @example radius.xl // '24px'
 */
export const radius = radiusSource;

/**
 * Typography tokens with full style definitions
 * @example typography.heading1 // { fontSize: '36px', lineHeight: '40px', fontWeight: 600, ... }
 */
export const typography = typographySource;

/**
 * Elevation/shadow tokens
 * @example elevation[2] // { shadow: '0px 6px 24px rgba(0,0,0,0.08)', ... }
 */
export const elevation = elevationSource;

/**
 * Opacity tokens
 * @example opacity.subtle // 0.7
 */
export const opacity = opacitySource;

/**
 * Default elevation level
 * Use this with the elevation helper: elevation[defaultElevation]
 * @example elevation[defaultElevation] // elevation[1]
 */
export const defaultElevation = defaultElevationSource;

/**
 * Default border radius value
 * @example defaultRadius // '24px'
 */
export const defaultRadius = radiusSource.xl;

// ============================================================================
// CSS Variable Access (returns var(--ai-*) strings)
// ============================================================================

/**
 * CSS variable helpers for theme-aware styling
 * Returns CSS variable references that respond to theme changes
 */
export const cssVar = {
  /**
   * Get spacing CSS variable
   * @example cssVar.spacing(16) // 'var(--ai-spacing-16)'
   */
  spacing: (scale: SpacingScale): string => {
    return `var(--ai-spacing-${scale})`;
  },

  /**
   * Get color CSS variable
   * @example cssVar.color('text-primary') // 'var(--ai-color-text-primary)'
   */
  color: (path: ColorPath): string => {
    return `var(--ai-color-${path})`;
  },

  /**
   * Get radius CSS variable
   * @example cssVar.radius('xl') // 'var(--ai-radius-xl)'
   */
  radius: (scale: RadiusScale): string => {
    return `var(--ai-radius-${scale})`;
  },

  /**
   * Get typography CSS variables as a style object
   * @example cssVar.typography('heading1') // { fontSize: 'var(--ai-font-size-h1)', ... }
   */
  typography: (style: TypographyStyle): {
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
    letterSpacing: string;
  } => {
    const styleMap: Record<TypographyStyle, string> = {
      heading1: 'h1',
      heading2: 'h2',
      heading3: 'h3',
      body: 'body',
      bodyEmph: 'body-emph',
      bodySmall: 'body-small',
      bodySmallEmph: 'body-small-emph',
      caption: 'caption',
      captionEmph: 'caption-emph',
      button: 'button',
      badge: 'badge',
    };

    const varName = styleMap[style];
    return {
      fontSize: `var(--ai-font-size-${varName})`,
      lineHeight: `var(--ai-line-height-${varName})`,
      fontWeight: `var(--ai-font-weight-${varName})`,
      letterSpacing: `var(--ai-letter-spacing-${varName})`,
    };
  },

  /**
   * Get elevation CSS variable (shadow)
   * @example cssVar.elevation(2) // 'var(--ai-elevation-2)'
   */
  elevation: (level: ElevationLevel): string => {
    return `var(--ai-elevation-${level})`;
  },

  /**
   * Get opacity CSS variable
   * @example cssVar.opacity('subtle') // 'var(--ai-opacity-subtle)'
   */
  opacity: (preset: OpacityPreset): string => {
    return `var(--ai-opacity-${preset})`;
  },
} as const;

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Create a custom CSS variable reference
 * @example customVar('my-custom-color') // 'var(--my-custom-color)'
 */
export function customVar(name: string): string {
  return `var(--${name})`;
}

/**
 * Create a CSS variable reference with a fallback value
 * @example varWithFallback('ai-spacing-16', '32px') // 'var(--ai-spacing-16, 32px)'
 */
export function varWithFallback(name: string, fallback: string): string {
  return `var(--${name}, ${fallback})`;
}

/**
 * Apply typography style as inline style object
 * @example applyTypography('heading1') // { fontSize: '36px', lineHeight: '40px', fontWeight: 600, letterSpacing: '-0.1px' }
 */
export function applyTypography(style: TypographyStyle) {
  const typographyStyle = typographySource[style];
  return {
    fontSize: typographyStyle.fontSize,
    lineHeight: typographyStyle.lineHeight,
    fontWeight: typographyStyle.fontWeight,
    letterSpacing: typographyStyle.letterSpacing,
  };
}

/**
 * Apply elevation as inline style object (for light theme)
 * @example applyElevation(2) // { boxShadow: '0px 6px 24px rgba(0,0,0,0.08)' }
 */
export function applyElevation(level: ElevationLevel) {
  const elevationStyle = elevationSource[level];
  return {
    boxShadow: elevationStyle.shadow,
  };
}
