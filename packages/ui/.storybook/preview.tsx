import type { Decorator, Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '../src/providers/ThemeProvider';
import '../src/tokens/tokens.css';

const reactWithUse = React as unknown as { use?: typeof React.useContext };
if (typeof reactWithUse.use !== 'function') {
  reactWithUse.use = React.useContext;
}

const withTheme: Decorator = (Story, context) => {
  const theme = (context.globals.theme as 'light' | 'dark') ?? 'light';

  // Apply background color to Storybook canvas for dark mode
  React.useEffect(() => {
    const docsRoot = document.querySelector('.sb-show-main') as HTMLElement;
    if (docsRoot) {
      docsRoot.style.backgroundColor = theme === 'dark' ? '#1a1a1a' : '#ffffff';
      docsRoot.style.transition = 'background-color 0.3s ease';
    }
  }, [theme]);

  return (
    <ThemeProvider defaultTheme={theme} brandColors={{ primary: '#0285ff' }}>
      <Story />
    </ThemeProvider>
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
