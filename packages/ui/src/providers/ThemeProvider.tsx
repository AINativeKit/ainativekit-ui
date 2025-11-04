import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import { useOpenAiGlobal } from '../hooks/openai/useOpenAiGlobal';
import type { Theme } from '../hooks/openai/types';
import type { BrandColorConfig } from '../tokens/colors';
import {
  getContrastColor,
  validateContrast,
  isValidHexColor,
  normalizeHexColor,
} from '../tokens/token-helpers';

/**
 * Theme context value shape
 */
export interface ThemeContextValue {
  /**
   * Current theme ('light' or 'dark')
   */
  theme: Theme;

  /**
   * Function to programmatically set the theme.
   * Note: If running inside ChatGPT, the theme is controlled by ChatGPT
   * and this function will have no effect.
   */
  setTheme: (theme: Theme) => void;

  /**
   * Whether the theme is controlled by ChatGPT (read-only mode)
   */
  isControlledByChatGPT: boolean;

  /**
   * Current brand color configuration
   */
  brandColors?: BrandColorConfig;
}

/**
 * Theme context
 * @internal - Exported for use in useTheme hook
 */
export const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Props for ThemeProvider component
 */
export interface ThemeProviderProps {
  /**
   * Child components
   */
  children: React.ReactNode;

  /**
   * Default theme to use when no other theme source is available
   * @default 'light'
   */
  defaultTheme?: Theme;

  /**
   * LocalStorage key for persisting theme preference
   * @default 'ainativekit-theme'
   */
  storageKey?: string;

  /**
   * Whether to detect and use system color scheme preference
   * @default true
   */
  enableSystemTheme?: boolean;

  /**
   * Custom brand colors to override the default accent colors
   * Provide hex color codes to customize the primary, success, warning, and error colors
   * @example
   * ```tsx
   * <ThemeProvider brandColors={{ primary: '#6B46C1', success: '#00C853' }}>
   *   <App />
   * </ThemeProvider>
   * ```
   */
  brandColors?: BrandColorConfig;
}

/**
 * Generate CSS custom properties from brand color configuration
 */
function generateBrandColorCSS(
  brandColors: BrandColorConfig,
  theme: Theme
): string {
  const isDark = theme === 'dark';
  const mixColor = isDark ? 'white' : 'black';
  const hoverPercent = isDark ? '85%' : '85%';
  const activePercent = isDark ? '90%' : '75%';

  const styles: string[] = [];

  // Helper to validate and add color with warnings
  const addColorVariable = (
    colorKey: keyof BrandColorConfig,
    varName: string,
    value: string
  ) => {
    // Validate hex color format first
    if (!isValidHexColor(value)) {
      console.warn(
        `[ThemeProvider] Invalid hex color format for brand ${colorKey}: "${value}". ` +
          `Expected format: #RGB, #RRGGBB, or #RRGGBBAA. This color will be skipped.`
      );
      return; // Skip invalid colors
    }

    // Normalize the color to standard format with #
    const normalizedValue = normalizeHexColor(value);
    if (!normalizedValue) {
      console.warn(
        `[ThemeProvider] Failed to normalize color "${value}" for brand ${colorKey}. This color will be skipped.`
      );
      return;
    }

    // Check if color has alpha channel (8-digit hex)
    const hasAlpha = normalizedValue.length === 9;
    if (hasAlpha) {
      console.warn(
        `[ThemeProvider] Brand ${colorKey} color "${normalizedValue}" contains an alpha channel. ` +
          `Contrast validation will be performed on the opaque base color (alpha channel stripped). ` +
          `Actual contrast may vary depending on background opacity.`
      );
    }

    // Validate contrast for on-color (text on brand color)
    // Note: For 8-digit colors, we validate against the opaque RGB values
    const onColor = getContrastColor(normalizedValue);
    const contrastResult = validateContrast(onColor, normalizedValue);

    if (!contrastResult.valid) {
      console.warn(
        `[ThemeProvider] Brand ${colorKey} color "${normalizedValue}" may not meet WCAG AA contrast requirements (ratio: ${contrastResult.ratio?.toFixed(2)}). Consider using a different color.`
      );
    }

    styles.push(`--ai-color-${varName}: ${normalizedValue};`);
    styles.push(
      `--ai-color-${varName}-hover: color-mix(in srgb, var(--ai-color-${varName}) ${hoverPercent}, ${mixColor});`
    );
    styles.push(
      `--ai-color-${varName}-active: color-mix(in srgb, var(--ai-color-${varName}) ${activePercent}, ${mixColor});`
    );
    styles.push(`--ai-color-brand-on-${colorKey}: ${onColor};`);
  };

  // Generate CSS for each provided brand color
  if (brandColors.primary) {
    addColorVariable('primary', 'brand-primary', brandColors.primary);
  }
  if (brandColors.success) {
    addColorVariable('success', 'brand-success', brandColors.success);
  }
  if (brandColors.warning) {
    addColorVariable('warning', 'brand-warning', brandColors.warning);
  }
  if (brandColors.error) {
    addColorVariable('error', 'brand-error', brandColors.error);
  }

  // Return empty if no custom colors provided
  if (styles.length === 0) return '';

  // Wrap in appropriate selector
  const selector = isDark ? '[data-theme="dark"]' : ':root';
  return `${selector} {\n  ${styles.join('\n  ')}\n}`;
}

/**
 * Get the initial theme based on various sources
 */
function getInitialTheme(
  chatGPTTheme: Theme | null,
  storageKey: string,
  enableSystemTheme: boolean,
  defaultTheme: Theme
): Theme {
  // SSR guard
  if (typeof window === 'undefined') {
    return defaultTheme;
  }

  // Priority 1: ChatGPT theme (if in ChatGPT environment)
  if (chatGPTTheme) {
    return chatGPTTheme;
  }

  // Priority 2: localStorage
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
  } catch (error) {
    // localStorage might not be available (SSR, private browsing, etc.)
    console.warn('Failed to read theme from localStorage:', error);
  }

  // Priority 3: System preference
  if (enableSystemTheme) {
    try {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch (error) {
      // matchMedia might not be available
      console.warn('Failed to detect system theme:', error);
    }
  }

  // Priority 4: Default theme
  return defaultTheme;
}

/**
 * Theme provider component
 *
 * Provides theme state and controls to child components. Integrates seamlessly
 * with ChatGPT Apps SDK when running inside ChatGPT, and provides standalone
 * theme management for other environments.
 *
 * @example
 * ```tsx
 * import { ThemeProvider } from '@ainativekit/ui';
 *
 * function App() {
 *   return (
 *     <ThemeProvider defaultTheme="light">
 *       <YourApp />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Toggle theme from a component
 * import { useThemeContext } from '@ainativekit/ui';
 *
 * function ThemeToggle() {
 *   const { theme, setTheme, isControlledByChatGPT } = useThemeContext();
 *
 *   if (isControlledByChatGPT) {
 *     return <div>Theme controlled by ChatGPT: {theme}</div>;
 *   }
 *
 *   return (
 *     <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
 *       Toggle theme (current: {theme})
 *     </button>
 *   );
 * }
 * ```
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'light',
  storageKey = 'ainativekit-theme',
  enableSystemTheme = true,
  brandColors,
}) => {
  // Check for ChatGPT theme
  const chatGPTTheme = useOpenAiGlobal('theme');

  // Initialize theme state
  const [theme, setThemeState] = useState<Theme>(() =>
    getInitialTheme(chatGPTTheme, storageKey, enableSystemTheme, defaultTheme)
  );

  // Ref to track injected style element for brand colors
  const styleElementRef = useRef<HTMLStyleElement | null>(null);

  // Memoize CSS generation to avoid unnecessary recalculation
  const brandColorCSS = useMemo(() => {
    if (!brandColors) return '';
    return generateBrandColorCSS(brandColors, theme);
  }, [brandColors, theme]);

  // Update theme when ChatGPT theme changes (takes precedence)
  useEffect(() => {
    if (chatGPTTheme) {
      setThemeState(chatGPTTheme);
    }
  }, [chatGPTTheme]);

  // Apply theme to DOM
  useEffect(() => {
    if (typeof window === 'undefined') return;

    document.documentElement.setAttribute('data-theme', theme);

    // Save to localStorage (unless controlled by ChatGPT)
    if (!chatGPTTheme) {
      try {
        localStorage.setItem(storageKey, theme);
      } catch (error) {
        console.warn('Failed to save theme to localStorage:', error);
      }
    }
  }, [theme, chatGPTTheme, storageKey]);

  // Listen to system theme changes
  useEffect(() => {
    if (typeof window === 'undefined' || !enableSystemTheme || chatGPTTheme) {
      return;
    }

    try {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
        // Only update if no user preference is stored
        try {
          const stored = localStorage.getItem(storageKey);
          if (!stored) {
            setThemeState(e.matches ? 'dark' : 'light');
          }
        } catch {
          // Ignore localStorage errors
        }
      };

      // Modern browsers
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
      }
      // Legacy browsers
      else if (mediaQuery.addListener) {
        mediaQuery.addListener(handleChange);
        return () => mediaQuery.removeListener(handleChange);
      }
    } catch (error) {
      // matchMedia not supported, ignore
      console.warn('Failed to setup system theme listener:', error);
    }
  }, [chatGPTTheme, enableSystemTheme, storageKey]);

  // Inject brand color CSS
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!brandColorCSS) {
      // No custom colors, remove style element if it exists
      if (styleElementRef.current) {
        styleElementRef.current.remove();
        styleElementRef.current = null;
      }
      return;
    }

    // Create or update style element
    if (!styleElementRef.current) {
      styleElementRef.current = document.createElement('style');
      styleElementRef.current.setAttribute('data-ainativekit-brand-colors', 'true');
      document.head.appendChild(styleElementRef.current);
    }

    // Only update if CSS content has changed (additional optimization)
    if (styleElementRef.current.textContent !== brandColorCSS) {
      styleElementRef.current.textContent = brandColorCSS;
    }

    // Cleanup on unmount
    return () => {
      if (styleElementRef.current) {
        styleElementRef.current.remove();
        styleElementRef.current = null;
      }
    };
  }, [brandColorCSS]);

  // setTheme function (no-op if ChatGPT controls theme)
  const setTheme = useCallback(
    (newTheme: Theme) => {
      if (chatGPTTheme) {
        console.warn(
          'Theme is controlled by ChatGPT and cannot be changed manually.'
        );
        return;
      }
      setThemeState(newTheme);
    },
    [chatGPTTheme]
  );

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme,
      isControlledByChatGPT: !!chatGPTTheme,
      brandColors,
    }),
    [theme, setTheme, chatGPTTheme, brandColors]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

/**
 * Hook to access theme context
 *
 * Must be used within a ThemeProvider.
 *
 * @returns Theme context value with current theme and setTheme function
 * @throws Error if used outside of ThemeProvider
 *
 * @example
 * ```tsx
 * import { useThemeContext } from '@ainativekit/ui';
 *
 * function MyComponent() {
 *   const { theme, setTheme } = useThemeContext();
 *
 *   return (
 *     <div className={theme === 'dark' ? 'dark-mode' : 'light-mode'}>
 *       <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
 *         Toggle theme
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 */
export const useThemeContext = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
