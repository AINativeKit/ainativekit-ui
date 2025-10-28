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
    // Semantic brand color aliases derived from accent colors
    brand: {
      primary: lightAccent.blue,
      success: lightAccent.green,
      warning: lightAccent.orange,
      error: lightAccent.red,
      info: lightAccent.blue,
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
    // Semantic brand color aliases derived from accent colors
    brand: {
      primary: darkAccent.blue,
      success: darkAccent.green,
      warning: darkAccent.orange,
      error: darkAccent.red,
      info: darkAccent.blue,
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
