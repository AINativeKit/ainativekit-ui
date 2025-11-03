import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from 'react';
import { useOpenAiGlobal } from '../hooks/openai/useOpenAiGlobal';
import type { Theme } from '../hooks/openai/types';

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
}) => {
  // Check for ChatGPT theme
  const chatGPTTheme = useOpenAiGlobal('theme');

  // Initialize theme state
  const [theme, setThemeState] = useState<Theme>(() =>
    getInitialTheme(chatGPTTheme, storageKey, enableSystemTheme, defaultTheme)
  );

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
        } catch (error) {
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
    }),
    [theme, setTheme, chatGPTTheme]
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
