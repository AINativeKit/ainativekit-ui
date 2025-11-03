import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from '../providers/ThemeProvider';
import { Button } from '../components/Button/Button';
import { Card, CardBody, CardTitle, CardDescription } from '../components/Card';
import { Alert } from '../components/Alert';
import { SetGlobalsEvent, type OpenAiApi, type OpenAiGlobals } from '../hooks/openai/types';

/**
 * Demo component that shows theme information and controls
 */
const ThemeDemo: React.FC = () => {
  const { theme, setTheme, isControlledByChatGPT } = useTheme();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '24px',
    }}>
      <Card elevationLevel={2}>
        <CardBody>
          <CardTitle>Theme Information</CardTitle>
          <CardDescription>
            Current theme settings and control status
          </CardDescription>

          <div style={{
            marginTop: '20px',
            display: 'grid',
            gap: '12px',
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}>
            <div style={{
              padding: '16px',
              backgroundColor: 'var(--ai-color-bg-secondary)',
              borderRadius: '8px',
              border: '1px solid var(--ai-color-border-default)',
            }}>
              <div style={{
                fontSize: '12px',
                color: 'var(--ai-color-text-secondary)',
                marginBottom: '8px',
                fontWeight: 500,
              }}>
                Current Theme
              </div>
              <div style={{
                fontSize: '20px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                {theme === 'dark' ? '🌙' : '☀️'} {theme || 'N/A'}
              </div>
            </div>

            <div style={{
              padding: '16px',
              backgroundColor: 'var(--ai-color-bg-secondary)',
              borderRadius: '8px',
              border: '1px solid var(--ai-color-border-default)',
            }}>
              <div style={{
                fontSize: '12px',
                color: 'var(--ai-color-text-secondary)',
                marginBottom: '8px',
                fontWeight: 500,
              }}>
                Control Status
              </div>
              <div style={{
                fontSize: '16px',
                fontWeight: 600,
              }}>
                {isControlledByChatGPT ? '🔒 ChatGPT' : '🎛️ Manual'}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {isControlledByChatGPT ? (
        <Alert
          layout="card"
          title="Theme Controlled by ChatGPT"
          message="The theme is currently controlled by ChatGPT. Toggle using Storybook's theme selector above."
        />
      ) : (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          <Alert
            layout="card"
            title="Theme Controllable"
            message="You can programmatically switch themes using the buttons below."
          />
          <div style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
          }}>
            <Button
              variant="primary"
              leftIcon="sun-filled"
              onClick={() => setTheme?.('light')}
              disabled={theme === 'light'}
            >
              Light Theme
            </Button>
            <Button
              variant="primary"
              leftIcon="moon-filled"
              onClick={() => setTheme?.('dark')}
              disabled={theme === 'dark'}
            >
              Dark Theme
            </Button>
            <Button
              variant="secondary"
              onClick={() => setTheme?.(theme === 'light' ? 'dark' : 'light')}
            >
              Toggle
            </Button>
          </div>
        </div>
      )}

      <Card elevationLevel={1}>
        <CardBody>
          <CardTitle>Sample Content</CardTitle>
          <CardDescription>
            This content adapts to the current theme automatically using CSS variables.
          </CardDescription>

          <div style={{
            marginTop: '16px',
            padding: '16px',
            backgroundColor: 'var(--ai-color-bg-tertiary)',
            borderRadius: '8px',
            border: '1px solid var(--ai-color-border-default)',
          }}>
            <p style={{
              margin: 0,
              color: 'var(--ai-color-text-primary)',
              lineHeight: 1.6,
            }}>
              All components in AI Native Kit UI use CSS variables that automatically
              adapt to the current theme. Simply set <code>data-theme="dark"</code> on
              the <code>document.documentElement</code> and all colors update instantly.
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

/**
 * Setup mock ChatGPT environment for testing
 */
const setupMockChatGPT = (theme: 'light' | 'dark' = 'light') => {
  if (typeof window === 'undefined') {
    return;
  }

  if (!window.openai) {
    const mockOpenAi: OpenAiApi & OpenAiGlobals = {
      theme,
      userAgent: {
        device: { type: 'desktop' },
        capabilities: { hover: true, touch: false },
      },
      locale: 'en-US',
      maxHeight: 600,
      displayMode: 'inline',
      safeArea: {
        insets: { top: 0, bottom: 0, left: 0, right: 0 },
      },
      toolInput: {},
      toolOutput: null,
      toolResponseMetadata: null,
      widgetState: null,
      setWidgetState: async () => {},
      callTool: async () => ({ result: '' }),
      sendFollowUpMessage: async () => {},
      openExternal: () => {},
      requestDisplayMode: async ({ mode }) => ({ mode }),
    };

    window.openai = mockOpenAi;
  } else {
    window.openai.theme = theme;
  }

  // Dispatch event to notify hooks
  window.dispatchEvent(
    new SetGlobalsEvent({
      globals: { theme },
    })
  );
};

/**
 * Cleanup mock ChatGPT environment
 */
const cleanupMockChatGPT = () => {
  if (typeof window !== 'undefined') {
    delete window.openai;
  }
};

/**
 * Story wrapper that syncs with Storybook's theme selector
 */
const ChatGPTThemeSync: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Get theme from Storybook's global theme selector
    const currentTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' || 'light';
    setupMockChatGPT(currentTheme);

    // Listen for theme changes from Storybook
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' || 'light';
          setupMockChatGPT(newTheme);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => {
      observer.disconnect();
      cleanupMockChatGPT();
    };
  }, []);

  return <>{children}</>;
};

/**
 * Meta configuration for theme stories
 */
const meta: Meta = {
  title: 'Providers/Theme Management',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The ThemeProvider enables programmatic theme control for development and standalone apps,
while respecting ChatGPT's theme authority when running inside ChatGPT.

**Features:**
- 🎛️ Programmatic theme switching (light/dark)
- 💾 LocalStorage persistence
- 🖥️ System preference detection
- 🤖 ChatGPT integration (read-only when controlled by ChatGPT)
- ⚡ Smooth transitions via CSS variables

**Usage Patterns:**
1. **ChatGPT Apps** - Theme is read-only, controlled by user's ChatGPT settings
2. **Standalone Apps** - Full theme control with ThemeProvider
3. **Development** - Easy theme testing and visualization
        `,
      },
    },
  },
};

export default meta;

/**
 * Story: ChatGPT Controlled Theme (Read-only)
 */
export const ChatGPTControlled: StoryObj = {
  render: () => (
    <ChatGPTThemeSync>
      <ThemeDemo />
    </ChatGPTThemeSync>
  ),
  parameters: {
    docs: {
      description: {
        story: `
When running inside ChatGPT, the theme is controlled by the user's ChatGPT settings.
The \`useTheme()\` hook returns \`isControlledByChatGPT: true\` and \`setTheme()\` has no effect.

**Try it:** Use Storybook's theme toggle (sun/moon icon in the toolbar) to switch themes.
        `,
      },
    },
  },
};

/**
 * Story: ThemeProvider with Full Control
 */
export const WithThemeProvider: StoryObj = {
  render: () => {
    // Cleanup ChatGPT mock for this story
    React.useEffect(() => {
      cleanupMockChatGPT();
      return () => {
        // Re-setup for other stories
        setupMockChatGPT();
      };
    }, []);

    return (
      <ThemeProvider defaultTheme="light">
        <ThemeDemo />
      </ThemeProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
When using ThemeProvider, you have full programmatic control over the theme.
The theme persists to localStorage and can be toggled via \`setTheme()\`.

**Try it:** Click the theme buttons below to switch themes programmatically.
        `,
      },
    },
  },
};

/**
 * Story: System Preference Detection
 */
export const SystemPreference: StoryObj = {
  render: () => {
    React.useEffect(() => {
      cleanupMockChatGPT();
      // Clear localStorage to demonstrate system preference
      try {
        localStorage.removeItem('ainativekit-theme');
      } catch {
        // Ignore
      }
      return () => setupMockChatGPT();
    }, []);

    const systemTheme = typeof window !== 'undefined'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      : 'light';

    return (
      <ThemeProvider enableSystemTheme>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          maxWidth: '600px',
          margin: '0 auto',
          padding: '24px',
        }}>
          <Alert
            layout="card"
            title="System Preference Detection"
            message={`Your system preference is: ${systemTheme}. The ThemeProvider will respect this when no theme is stored.`}
          />
          <ThemeDemo />
        </div>
      </ThemeProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
ThemeProvider can detect and use the system's color scheme preference (\`prefers-color-scheme\`).
This is the default behavior when \`enableSystemTheme={true}\` (default).

**Priority:** ChatGPT theme > localStorage > System preference > defaultTheme
        `,
      },
    },
  },
};

/**
 * Story: Dark Mode Default
 */
export const DarkModeDefault: StoryObj = {
  render: () => {
    React.useEffect(() => {
      cleanupMockChatGPT();
      try {
        localStorage.removeItem('ainativekit-theme');
      } catch {
        // Ignore
      }
      return () => setupMockChatGPT();
    }, []);

    return (
      <ThemeProvider defaultTheme="dark" enableSystemTheme={false}>
        <ThemeDemo />
      </ThemeProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
You can set a default theme using the \`defaultTheme\` prop.
This example starts with dark mode and disables system preference detection.
        `,
      },
    },
  },
};
