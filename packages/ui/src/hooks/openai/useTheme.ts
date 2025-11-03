import { useContext } from 'react';
import { useOpenAiGlobal } from './useOpenAiGlobal';
import type { Theme } from './types';
import { ThemeContext } from '../../providers/ThemeProvider';

export interface UseThemeResult {
  /**
   * Current theme ('light' or 'dark'), or null if no theme is available
   */
  theme: Theme | null;

  /**
   * Function to programmatically set the theme.
   * Only available when using ThemeProvider.
   * In ChatGPT environment, this will warn and have no effect (read-only).
   */
  setTheme?: (theme: Theme) => void;

  /**
   * Whether the theme is controlled by ChatGPT (read-only mode).
   * When true, setTheme will have no effect.
   */
  isControlledByChatGPT: boolean;
}

/**
 * Get the current theme and optionally control it
 *
 * This hook works in multiple contexts:
 * - **Inside ChatGPT**: Returns read-only theme from ChatGPT (`window.openai.theme`)
 * - **Inside ThemeProvider**: Returns theme with setTheme control
 * - **Standalone**: Returns null theme
 *
 * @returns Object with theme, setTheme (optional), and control info
 *
 * @example
 * ```tsx
 * // Inside ChatGPT (read-only)
 * import { useTheme } from '@ainativekit/ui';
 *
 * function MyComponent() {
 *   const { theme, isControlledByChatGPT } = useTheme();
 *
 *   return (
 *     <div className={theme === 'dark' ? 'dark-mode' : 'light-mode'}>
 *       Current theme: {theme ?? 'unknown'}
 *       {isControlledByChatGPT && <p>Theme controlled by ChatGPT</p>}
 *     </div>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // With ThemeProvider (controllable)
 * import { ThemeProvider, useTheme } from '@ainativekit/ui';
 *
 * function App() {
 *   return (
 *     <ThemeProvider>
 *       <MyComponent />
 *     </ThemeProvider>
 *   );
 * }
 *
 * function MyComponent() {
 *   const { theme, setTheme, isControlledByChatGPT } = useTheme();
 *
 *   return (
 *     <button
 *       onClick={() => setTheme?.(theme === 'light' ? 'dark' : 'light')}
 *       disabled={isControlledByChatGPT}
 *     >
 *       Toggle theme (current: {theme})
 *     </button>
 *   );
 * }
 * ```
 */
export const useTheme = (): UseThemeResult => {
  // Call all hooks at top level (Rules of Hooks)
  const contextValue = useContext(ThemeContext);
  const chatGPTTheme = useOpenAiGlobal('theme');

  // If ThemeProvider context is available, use it
  if (contextValue) {
    return {
      theme: contextValue.theme,
      setTheme: contextValue.setTheme,
      isControlledByChatGPT: contextValue.isControlledByChatGPT,
    };
  }

  // Fall back to ChatGPT theme (read-only)
  return {
    theme: chatGPTTheme,
    setTheme: undefined,
    isControlledByChatGPT: !!chatGPTTheme,
  };
};
