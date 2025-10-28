import type { Decorator, Preview } from '@storybook/react';
import React from 'react';
import '../src/tokens/tokens.css';

const reactWithUse = React as unknown as { use?: typeof React.useContext };
if (typeof reactWithUse.use !== 'function') {
  reactWithUse.use = React.useContext;
}

const ThemeWrapper: React.FC<{ theme: 'light' | 'dark'; children: React.ReactNode }> = ({
  theme,
  children,
}) => {
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.style.background = 'var(--ai-color-bg-primary)';
    document.body.style.color = 'var(--ai-color-text-primary)';
    document.body.style.fontFamily = 'var(--ai-font-family)';

    return () => {
      document.body.style.background = '';
      document.body.style.color = '';
      document.body.style.fontFamily = '';
    };
  }, [theme]);

  return (
    <div
      style={{
        background: 'var(--ai-color-bg-primary)',
        color: 'var(--ai-color-text-primary)',
        minHeight: '100vh',
        transition: 'background 0.2s ease, color 0.2s ease',
      }}
    >
      {children}
    </div>
  );
};

const withTheme: Decorator = (Story, context) => {
  const theme = (context.globals.theme as 'light' | 'dark') ?? 'light';

  return (
    <ThemeWrapper theme={theme}>
      <Story />
    </ThemeWrapper>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true, // We use data-theme instead
    },
    viewport: {
      viewports: {
        mobile: { name: 'Mobile', styles: { width: '375px', height: '667px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1280px', height: '800px' } },
      },
    },
    options: {
      storySort: {
        method: 'configure',
        order: [
          'Introduction',
          'Gallery',
          ['Albums', 'Carousel', 'Pizza List', 'Maps', 'Cards'],
          'Design Tokens',
          ['Colors', 'Typography', 'Spacing', 'Radius', 'Elevation'],
          'Primitive Components',
          ['Alerts', 'Badges', 'Buttons', 'Chips', 'Features', 'Icons', 'Skeletons'],
          'Composed Components',
          ['Cards', 'Album', 'Carousel', 'List', 'Maps'],
          'Integrations',
        ],
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [withTheme],
};

export default preview;
