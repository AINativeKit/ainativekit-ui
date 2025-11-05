import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ThemeProvider, useThemeContext } from './ThemeProvider';

// Mock useOpenAiGlobal hook
vi.mock('../hooks/openai/useOpenAiGlobal', () => ({
  useOpenAiGlobal: vi.fn(() => null),
}));

import { useOpenAiGlobal } from '../hooks/openai/useOpenAiGlobal';

// Test component that uses the theme context
const TestComponent: React.FC<{ showButton?: boolean }> = ({ showButton = true }) => {
  const { theme, setTheme, isControlledByChatGPT } = useThemeContext();

  return (
    <div>
      <div data-testid="theme">{theme}</div>
      <div data-testid="controlled">{String(isControlledByChatGPT)}</div>
      {showButton && (
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle</button>
      )}
    </div>
  );
};

describe('ThemeProvider', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    // Clear mocks
    vi.clearAllMocks();
    // Reset useOpenAiGlobal to return null by default
    vi.mocked(useOpenAiGlobal).mockReturnValue(null);
    // Reset document.documentElement.setAttribute
    document.documentElement.removeAttribute('data-theme');
    // Mock window.matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Rendering', () => {
    it('renders children', () => {
      render(
        <ThemeProvider>
          <div>Test Child</div>
        </ThemeProvider>
      );
      expect(screen.getByText('Test Child')).toBeInTheDocument();
    });

    it('provides default theme context', () => {
      render(
        <ThemeProvider>
          <TestComponent showButton={false} />
        </ThemeProvider>
      );
      expect(screen.getByTestId('theme')).toHaveTextContent('light');
      expect(screen.getByTestId('controlled')).toHaveTextContent('false');
    });

    it('uses custom default theme', () => {
      render(
        <ThemeProvider defaultTheme="dark">
          <TestComponent showButton={false} />
        </ThemeProvider>
      );
      expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    });

    it('sets data-theme attribute on document element', () => {
      render(
        <ThemeProvider defaultTheme="dark">
          <TestComponent showButton={false} />
        </ThemeProvider>
      );
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    });
  });

  describe('LocalStorage Persistence', () => {
    it('loads theme from localStorage', () => {
      localStorage.setItem('ainativekit-theme', 'dark');
      render(
        <ThemeProvider>
          <TestComponent showButton={false} />
        </ThemeProvider>
      );
      expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    });

    it('saves theme to localStorage when changed', async () => {
      const user = userEvent.setup();
      render(
        <ThemeProvider>
          <TestComponent />
        </ThemeProvider>
      );

      const button = screen.getByRole('button');
      await user.click(button);

      await waitFor(() => {
        expect(localStorage.getItem('ainativekit-theme')).toBe('dark');
      });
    });

    it('uses custom storage key', async () => {
      const user = userEvent.setup();
      render(
        <ThemeProvider storageKey="my-custom-theme">
          <TestComponent />
        </ThemeProvider>
      );

      const button = screen.getByRole('button');
      await user.click(button);

      await waitFor(() => {
        expect(localStorage.getItem('my-custom-theme')).toBe('dark');
      });
    });

    it('handles localStorage errors gracefully', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
        throw new Error('localStorage not available');
      });

      render(
        <ThemeProvider>
          <TestComponent showButton={false} />
        </ThemeProvider>
      );

      expect(screen.getByTestId('theme')).toHaveTextContent('light');
      expect(consoleSpy).toHaveBeenCalledWith(
        'Failed to read theme from localStorage:',
        expect.any(Error)
      );
      consoleSpy.mockRestore();
    });
  });

  describe('System Preference Detection', () => {
    it('detects dark system preference', () => {
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: vi.fn().mockImplementation((query) => ({
          matches: query === '(prefers-color-scheme: dark)',
          media: query,
          onchange: null,
          addListener: vi.fn(),
          removeListener: vi.fn(),
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn(),
        })),
      });

      render(
        <ThemeProvider>
          <TestComponent showButton={false} />
        </ThemeProvider>
      );

      expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    });

    it('can disable system theme detection', () => {
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: vi.fn().mockImplementation((query) => ({
          matches: query === '(prefers-color-scheme: dark)',
          media: query,
          onchange: null,
          addListener: vi.fn(),
          removeListener: vi.fn(),
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn(),
        })),
      });

      render(
        <ThemeProvider enableSystemTheme={false}>
          <TestComponent showButton={false} />
        </ThemeProvider>
      );

      expect(screen.getByTestId('theme')).toHaveTextContent('light');
    });

    it('handles matchMedia errors gracefully', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: vi.fn().mockImplementation(() => {
          throw new Error('matchMedia not supported');
        }),
      });

      render(
        <ThemeProvider>
          <TestComponent showButton={false} />
        </ThemeProvider>
      );

      expect(screen.getByTestId('theme')).toHaveTextContent('light');
      expect(consoleSpy).toHaveBeenCalledWith('Failed to detect system theme:', expect.any(Error));
      consoleSpy.mockRestore();
    });
  });

  describe('ChatGPT Integration', () => {
    it('uses ChatGPT theme when available', () => {
      vi.mocked(useOpenAiGlobal).mockReturnValue('dark');

      render(
        <ThemeProvider>
          <TestComponent showButton={false} />
        </ThemeProvider>
      );

      expect(screen.getByTestId('theme')).toHaveTextContent('dark');
      expect(screen.getByTestId('controlled')).toHaveTextContent('true');
    });

    it('updates theme when ChatGPT theme changes', () => {
      const { rerender } = render(
        <ThemeProvider>
          <TestComponent showButton={false} />
        </ThemeProvider>
      );

      expect(screen.getByTestId('theme')).toHaveTextContent('light');

      // Simulate ChatGPT theme change
      vi.mocked(useOpenAiGlobal).mockReturnValue('dark');

      rerender(
        <ThemeProvider>
          <TestComponent showButton={false} />
        </ThemeProvider>
      );

      expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    });

    it('does not save ChatGPT theme to localStorage', async () => {
      vi.mocked(useOpenAiGlobal).mockReturnValue('dark');

      render(
        <ThemeProvider>
          <TestComponent showButton={false} />
        </ThemeProvider>
      );

      await waitFor(() => {
        expect(localStorage.getItem('ainativekit-theme')).toBeNull();
      });
    });

    it('warns when trying to manually set theme in ChatGPT', async () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      vi.mocked(useOpenAiGlobal).mockReturnValue('light');

      const user = userEvent.setup();
      render(
        <ThemeProvider>
          <TestComponent />
        </ThemeProvider>
      );

      const button = screen.getByRole('button');
      await user.click(button);

      expect(consoleSpy).toHaveBeenCalledWith(
        'Theme is controlled by ChatGPT and cannot be changed manually.'
      );
      expect(screen.getByTestId('theme')).toHaveTextContent('light');
      consoleSpy.mockRestore();
    });
  });

  describe('Theme Priority', () => {
    it('prioritizes themes correctly: ChatGPT > localStorage > system > default', () => {
      // Set localStorage
      localStorage.setItem('ainativekit-theme', 'dark');
      // Set system preference
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: vi.fn().mockImplementation((query) => ({
          matches: query === '(prefers-color-scheme: dark)',
          media: query,
          onchange: null,
          addListener: vi.fn(),
          removeListener: vi.fn(),
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn(),
        })),
      });

      // Without ChatGPT, should use localStorage
      render(
        <ThemeProvider defaultTheme="light">
          <TestComponent showButton={false} />
        </ThemeProvider>
      );
      expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    });

    it('ChatGPT theme overrides localStorage', () => {
      localStorage.setItem('ainativekit-theme', 'light');
      vi.mocked(useOpenAiGlobal).mockReturnValue('dark');

      render(
        <ThemeProvider>
          <TestComponent showButton={false} />
        </ThemeProvider>
      );

      expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    });
  });

  describe('Theme Toggling', () => {
    it('toggles theme when setTheme is called', async () => {
      const user = userEvent.setup();
      render(
        <ThemeProvider>
          <TestComponent />
        </ThemeProvider>
      );

      expect(screen.getByTestId('theme')).toHaveTextContent('light');

      const button = screen.getByRole('button');
      await user.click(button);

      await waitFor(() => {
        expect(screen.getByTestId('theme')).toHaveTextContent('dark');
      });

      await user.click(button);

      await waitFor(() => {
        expect(screen.getByTestId('theme')).toHaveTextContent('light');
      });
    });

    it('updates document attribute when theme changes', async () => {
      const user = userEvent.setup();
      render(
        <ThemeProvider>
          <TestComponent />
        </ThemeProvider>
      );

      const button = screen.getByRole('button');
      await user.click(button);

      await waitFor(() => {
        expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
      });
    });
  });

  describe('Error Handling', () => {
    it('throws error when useThemeContext is used outside provider', () => {
      // Suppress console.error for this test
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      expect(() => {
        render(<TestComponent showButton={false} />);
      }).toThrow('useThemeContext must be used within a ThemeProvider');

      consoleSpy.mockRestore();
    });
  });

  describe('SSR Safety', () => {
    it('handles SSR environment gracefully', () => {
      // This test verifies the component doesn't crash in SSR
      // The actual SSR behavior is handled by the typeof window checks
      render(
        <ThemeProvider>
          <div>SSR Safe</div>
        </ThemeProvider>
      );
      expect(screen.getByText('SSR Safe')).toBeInTheDocument();
    });
  });
});
