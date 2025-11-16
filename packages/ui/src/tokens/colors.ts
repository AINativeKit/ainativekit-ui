/**
 * Color tokens for AI Native Kit
 * Defines color palette for light and dark themes
 *
 * @example
 * ```typescript
 * import { colors } from '@ainativekit/ui';
 * const bgColor = colors.light.background.primary; // '#FFFFFF'
 * ```
 */

// Define accent colors first
const lightAccent = {
  blue: '#0285FF',
  red: '#E02E2A',
  orange: '#E25507',
  green: '#008635',
} as const;

const darkAccent = {
  blue: '#0285FF',
  red: '#FF8583',
  orange: '#FF9E6C',
  green: '#40C977',
} as const;

export const colors = {
  light: {
    background: {
      primary: '#FFFFFF',
      secondary: '#E8E8E8',
      tertiary: '#F3F3F3',
    },
    text: {
      primary: '#0D0D0D',
      secondary: '#5D5D5D',
      tertiary: '#8F8F8F',
      inverted: '#1B1B1F',
    },
    icon: {
      primary: '#0D0D0D',
      secondary: '#5D5D5D',
      tertiary: '#8F8F8F',
      inverted: '#1B1B1F',
    },
    accent: lightAccent,
    // Brand colors with interactive states (customizable via ThemeProvider)
    brand: {
      primary: {
        base: lightAccent.blue,
        hover: '#016FDB', // ~15% darker
        active: '#0159B8', // ~25% darker
        onColor: '#FFFFFF',
      },
      success: {
        base: lightAccent.green,
        hover: '#00722E', // ~15% darker
        active: '#005E25', // ~25% darker
        onColor: '#FFFFFF',
      },
      warning: {
        base: lightAccent.orange,
        hover: '#C14906', // ~15% darker
        active: '#A03E05', // ~25% darker
        onColor: '#FFFFFF',
      },
      error: {
        base: lightAccent.red,
        hover: '#BF2723', // ~15% darker
        active: '#9E201D', // ~25% darker
        onColor: '#FFFFFF',
      },
    },
    outline: '#79747E',
    border: {
      light: 'rgba(13, 13, 13, 0.05)',
      default: 'rgba(13, 13, 13, 0.10)',
      heavy: 'rgba(13, 13, 13, 0.15)',
    },
    state: {
      hover: {
        background: 'rgba(13, 13, 13, 0.08)',
        opacity: 0.9,
      },
      active: {
        opacity: 1,
        scale: 0.98,
      },
      disabled: {
        opacity: 0.4,
      },
      focus: {
        outline: '#0285FF',
        offset: '2px',
      },
    },
  },
  dark: {
    background: {
      primary: '#212121',
      secondary: '#303030',
      tertiary: '#414141',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#CDCDCD',
      tertiary: '#AFAFAF',
      inverted: '#FFFFFF',
    },
    icon: {
      primary: '#FFFFFF',
      secondary: '#CDCDCD',
      tertiary: '#AFAFAF',
      inverted: '#FFFFFF',
    },
    accent: darkAccent,
    // Brand colors with interactive states (customizable via ThemeProvider)
    brand: {
      primary: {
        base: darkAccent.blue,
        hover: '#1A92FF', // ~15% lighter
        active: '#339FFF', // ~25% lighter
        onColor: '#FFFFFF',
      },
      success: {
        base: darkAccent.green,
        hover: '#56D487', // ~15% lighter
        active: '#6BDF97', // ~25% lighter
        onColor: '#000000',
      },
      warning: {
        base: darkAccent.orange,
        hover: '#FFAB82', // ~15% lighter
        active: '#FFB898', // ~25% lighter
        onColor: '#000000',
      },
      error: {
        base: darkAccent.red,
        hover: '#FF9D9B', // ~15% lighter
        active: '#FFB5B3', // ~25% lighter
        onColor: '#000000',
      },
    },
    outline: '#938F99',
    border: {
      light: 'rgba(255, 255, 255, 0.08)',
      default: 'rgba(255, 255, 255, 0.12)',
      heavy: 'rgba(255, 255, 255, 0.16)',
    },
    state: {
      hover: {
        background: 'rgba(255, 255, 255, 0.08)',
        opacity: 0.9,
      },
      active: {
        opacity: 1,
        scale: 0.98,
      },
      disabled: {
        opacity: 0.4,
      },
      focus: {
        outline: '#0285FF',
        offset: '2px',
      },
    },
  },
} as const;

export type ColorTheme = typeof colors.light;
export type ThemeMode = 'light' | 'dark';

/**
 * Brand color value that supports both simple strings and light/dark mode variants
 * - String: Same color for both light and dark modes
 * - Object: Different colors for light and dark modes (following ConstructKit pattern)
 *
 * @example
 * // Simple (same color for both modes)
 * primary: '#6366F1'
 *
 * // Light/dark variants (different colors per mode)
 * success: { light: '#059669', dark: '#34D399' }
 */
export type BrandColorValue = string | { light: string; dark: string };

/**
 * Brand color configuration for customizing theme colors
 * Used by ThemeProvider to override default brand colors
 */
export interface BrandColorConfig {
  /** Primary brand color (used for main actions, links, etc.) */
  primary?: BrandColorValue;
  /** Success color (used for positive actions, success states) */
  success?: BrandColorValue;
  /** Warning color (used for warning states, caution messages) */
  warning?: BrandColorValue;
  /** Error color (used for error states, destructive actions) */
  error?: BrandColorValue;
}

/**
 * Semantic color variants for component color props
 */
export type ColorVariant = 'primary' | 'success' | 'warning' | 'error' | 'neutral';
