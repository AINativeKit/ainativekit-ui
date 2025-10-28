# 🧠 AI Native Kit UI
> **Turn MCP JSON results into ChatGPT App UIs - instantly and effortlessly.**
> Ready-to-use, Figma-aligned React components built for the [ChatGPT Apps SDK](https://developers.openai.com/apps-sdk).

[![npm version](https://img.shields.io/npm/v/@ainativekit/ui.svg)](https://www.npmjs.com/package/@ainativekit/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-%233178C6.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/Storybook-%23FF4785.svg?logo=storybook&logoColor=white)](https://ainativekit.github.io/ainativekit-ui)

## 🔍 Overview

AI Native Kit UI bridges the gap between structured JSON outputs from your MCP tools and beautiful, accessible UI components tailored for ChatGPT apps. Designed specifically for the [ChatGPT Apps SDK](https://developers.openai.com/apps-sdk), this React component library lets you map JSON data directly to interactive, Figma-aligned UI elements, no manual wiring required. Build rich ChatGPT experiences faster with production-ready components, example patterns, and a comprehensive design system.

**[🎪 See Live Demos in Our Storybook →](https://ainativekit.github.io/ainativekit-ui/?path=/docs/introduction--docs)**

## 💡 Why You’ll Love It

| Developer Pain Point                | How AI Native Kit UI Solves It                   |
|-----------------------------------|-------------------------------------------------|
| Manually converting JSON to UI    | Native JSON to UI mapping components streamline integration |
| Lack of ChatGPT-specific components | Built specifically for ChatGPT Apps SDK with optimized patterns |
| Inconsistent design and icons     | Figma-aligned, type-safe icon library ensures visual consistency |
| Accessibility concerns             | WCAG 2.1 AA compliant components with ARIA support |
| Poor developer experience         | 100% TypeScript with IntelliSense and detailed docs |

## 🚀 Core Features

- 🎯 **Apps SDK Optimized**: Components designed to work seamlessly with ChatGPT Apps SDK
- 🔄 **JSON → UI Mapping**: Directly map structured JSON data to UI components
- 🎨 **417 Figma-Aligned Icons**: Fully typed and tree-shakeable icon set
- ♿ **Accessibility First**: WCAG 2.1 AA compliant with ARIA support
- 🌗 **Dark & Light Mode**: Built-in theme switching support
- 🧩 **Production-Ready Components & Patterns**: Flexible building blocks and example implementations
- 🪝 **OpenAI Hooks**: Custom hooks for ChatGPT Apps SDK integration
- 📦 **Tree-Shakeable & Type-Safe**: Import only what you need with full TypeScript support

## ⚡ Quick Start

### Installation

```bash
npm install @ainativekit/ui
# or
pnpm add @ainativekit/ui
# or
yarn add @ainativekit/ui
```

### Example: Transform JSON into Beautiful UI

Turn your MCP tool results into rich, interactive cards instantly:

```tsx
import { Card, Badge } from '@ainativekit/ui';
import '@ainativekit/ui/styles';

// JSON from your MCP tool
const weatherData = {
  city: 'San Francisco',
  temp: '72°F',
  condition: 'Sunny',
  image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4'
};

function WeatherWidget() {
  return (
    <Card>
      <Card.Image src={weatherData.image} alt={weatherData.city} />
      <Card.Body>
        <Card.Title>{weatherData.city}</Card.Title>
        <Card.Description>
          {weatherData.temp} · {weatherData.condition}
        </Card.Description>
      </Card.Body>
      <Card.Footer>
        <Badge variant="success">Live</Badge>
      </Card.Footer>
    </Card>
  );
}
```

## 🧱 Component Categories

### Core Components - Reliable building blocks for your UI

- **Button**: Four variants: primary, secondary, tertiary, ghost
- **Icon**: Type-safe, Figma-aligned icons
- **Badge**: Status indicators and labels
- **Chip**: Tags and filters
- **Alert**: Feedback and messages
- **Skeleton**: Loading placeholders
- **Card**: Flexible container with compound patterns

### Example Patterns - Ready-made UI structures for common use cases

- **Card Variants**: Image, summary, list, and discovery cards
- **Carousel**: Horizontal scroll galleries
- **List**: Structured lists with rich content
- **Album**: Photo gallery pattern adaptable for media, fullscreen supported.
- **Map**: Location-based interactive UI pattern with fullscreen supported.

## 🎨 Design System

### Design Tokens

Use consistent colors, typography, spacing, and elevation derived from OpenAI’s Figma design system:

```tsx
import { colors, typography, spacing, elevation } from '@ainativekit/ui';

const style = {
  backgroundColor: colors.light.background.primary,
  padding: spacing['space-16'],
  fontSize: typography.body.fontSize,
  boxShadow: elevation.low,
};
```

### Icon Usage

```tsx
import { Icon } from '@ainativekit/ui';
import { SettingsCog, Terminal, Star } from '@ainativekit/ui/icons';

// Preferred: Named icon components
<SettingsCog size="md" />

// Alternative: Dynamic icon by name
<Icon name="settings-cog" size="lg" />
```

## 🪝 OpenAI Hooks

Built-in hooks to integrate with the ChatGPT Apps SDK:

```tsx
import { useOpenAiGlobal, useWidgetState, useMaxHeight } from '@ainativekit/ui';

function MyChatGPTWidget() {
  const openai = useOpenAiGlobal(); // Access global OpenAI instance
  const [state, setState] = useWidgetState({}); // Manage widget state
  const maxHeight = useMaxHeight(); // Get max height for layout constraints

  return <div style={{ maxHeight }}>{/* Your widget content */}</div>;
}
```

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Run Storybook for interactive component exploration
pnpm storybook

# Run tests
pnpm test

# Build the library
pnpm build

# Lint codebase
pnpm lint
```

## 📦 Package Structure

```
@ainativekit/ui
├── /           # Main entry point (components, tokens, hooks)
├── /icons      # All 417 icons as named React components
├── /tokens     # Design tokens only
└── /styles     # CSS styles
```

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/@ainativekit/ui)
- [GitHub Repository](https://github.com/ainativekit/ainativekit-ui)
- [Issue Tracker](https://github.com/ainativekit/ainativekit-ui/issues)
- [Storybook](https://ainativekit.github.io/ainativekit-ui)

## 🙏 Acknowledgments

Built for the OpenAI Apps SDK community. Inspired by ChatGPT App Examples, OpenAI Figma Design, Apple Human Interface Guidelines, Material UI, Chakra UI, and Ant Design.

---

**Made with ❤️ by and for ChatGPT App Developers.**
Stop wiring UIs manually - start shipping faster with **AI Native Kit UI**.
