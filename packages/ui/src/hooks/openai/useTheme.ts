import { useOpenAiGlobal } from './useOpenAiGlobal';
import type { Theme } from './types';

/**
 * Get the current ChatGPT theme and listen for changes
 *
 * @returns The current theme ('light' or 'dark'), or null if not in ChatGPT environment
 *
 * @example
 * ```tsx
 * import { useTheme } from '@ainativekit/ui';
 *
 * function MyComponent() {
 *   const theme = useTheme();
 *
 *   return (
 *     <div className={theme === 'dark' ? 'dark-mode' : 'light-mode'}>
 *       Current theme: {theme ?? 'unknown'}
 *     </div>
 *   );
 * }
 * ```
 */
export const useTheme = (): Theme | null => {
  return useOpenAiGlobal('theme');
};
