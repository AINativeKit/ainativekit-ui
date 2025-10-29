# 🧩 AI Native Kit UI

> **Instantly turn MCP JSON results into polished ChatGPT App UIs.**  
> OpenAI Figma‑aligned **React** components purpose‑built for the [ChatGPT Apps SDK](https://developers.openai.com/apps-sdk).

[![npm version](https://img.shields.io/npm/v/@ainativekit/ui.svg)](https://www.npmjs.com/package/@ainativekit/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-%233178C6.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/Storybook-%23FF4785.svg?logo=storybook&logoColor=white)](https://www.ainativekit.com)

![AINativeKit UI demo](./assets/ainativekit-ui-demo.gif)

<p>
  <b><a href="https://www.ainativekit.com">🎪 Live Storybook</a></b> ·
  <b><a href="#-quick-start">⚡ Quick Start</a></b> ·
  <b><a href="#-examples">🧪 Examples</a></b> ·
  <b><a href="#-components">🧱 Components</a></b>
</p>

## 🔍 Overview

**AI Native Kit UI** bridges the gap between **structured MCP JSON** and **beautiful, accessible UI** for ChatGPT apps. Designed for the **Apps SDK**, it maps model/tool results directly to **interactive, Figma‑aligned components**, so you stop hand‑wiring UI and start shipping.

- ✨ **What you get:** Production‑ready React components, example patterns, hooks for Apps SDK, and a rich design‑token system.
- 🧭 **Who it’s for:** Developers building **ChatGPT Apps** who want consistent, on‑brand UI without reinventing the wheel.

> **Why now?** ChatGPT Apps (via the Apps SDK) expose results + UI metadata. This kit renders those results as native widgets with minimal code.

## 💡 Why You’ll Love It

| Developer Pain Point | How AINativeKit UI Helps |
|---|---|
| Manually converting JSON to UI | **Native JSON -> UI mapping** components streamline integration |
| Lack of ChatGPT‑specific components | Built **specifically** for the **ChatGPT Apps SDK** with optimized patterns |
| Inconsistent design & icons | **Figma‑aligned** tokens + **typed icon library** ensure visual consistency |
| Accessibility concerns | **WCAG 2.1 AA** mindful components with ARIA support |
| Poor developer experience | 100% **TypeScript**, IntelliSense, Storybook docs |

## 🚀 Core Features

- 🎯 **Apps SDK Optimized:** Components designed to work seamlessly with ChatGPT Apps SDK
- 🔄 **JSON -> UI Mapping:** Render structured MCP results with minimal glue code
- 🎨 **417 Figma‑Aligned Icons:** Fully typed and tree‑shakeable
- ♿ **Accessibility First:** ARIA attributes & sensible focus management
- 🌗 **Dark/Light Themes:** Built‑in theme switching
- 🧩 **Production‑Ready Blocks:** Cards, lists, carousel, album, map, and more
- 🪝 **OpenAI Hooks:** `useOpenAiGlobal`, `useWidgetState`, `useMaxHeight`
- 📦 **Tree‑Shakeable & Type‑Safe:** Import only what you need

## ⚡ Quick Start

### 1) Install

```bash
npm install @ainativekit/ui
# or
pnpm add @ainativekit/ui
# or
yarn add @ainativekit/ui
```

### 2) Use: turn MCP JSON into UI

```tsx
import { Card, Badge } from '@ainativekit/ui';
import '@ainativekit/ui/styles';

// Example MCP/tool JSON (simplified)
const weatherData = {
  city: 'San Francisco',
  temp: '72°F',
  condition: 'Sunny',
  image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4'
};

export function WeatherWidget() {
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

> 📚 Explore many more examples in **Storybook** -> https://www.ainativekit.com

## 🧪 Examples

- **Cards:** Image, summary, list, discovery
- **Lists:** Structured lists with rich content
- **Carousel:** Horizontal scroll galleries
- **Album:** Media gallery with fullscreen
- **Map:** Location UI pattern with fullscreen

> Tip: Copy any example from Storybook into your app and tweak the props.

## 🧱 Components

**Core:** `Button` (primary/secondary/tertiary/ghost) · `Icon` · `Badge` · `Chip` · `Alert` · `Skeleton` · `Card`

**Patterns:** Card variants · Carousel · List · Album · Map

## 🎨 Design System

Use consistent **colors**, **typography**, **spacing**, and **elevation** derived from OpenAI’s Figma system.

```tsx
import { colors, typography, spacing, elevation } from '@ainativekit/ui';

const style = {
  backgroundColor: colors.light.background.primary,
  padding: spacing['space-16'],
  fontSize: typography.body.fontSize,
  boxShadow: elevation.low,
};
```

**Icons:**

```tsx
import { Icon } from '@ainativekit/ui';
import { SettingsCog, Terminal, Star } from '@ainativekit/ui/icons';

// Preferred: Named icon components
<SettingsCog size="md" />

// Alternative: Dynamic icon by name
<Icon name="settings-cog" size="lg" />
```

## 🪝 OpenAI Hooks

Utilities to integrate with the **ChatGPT Apps SDK** runtime.

```tsx
import { useOpenAiGlobal, useWidgetState, useMaxHeight } from '@ainativekit/ui';

function MyChatGPTWidget() {
  const openai = useOpenAiGlobal(); // Access global OpenAI instance
  const [state, setState] = useWidgetState({}); // Manage widget state
  const maxHeight = useMaxHeight(); // Layout constraint from host

  return <div style={{ maxHeight }}>{/* your widget */}</div>;
}
```

## 🧰 Development

```bash
pnpm install          # install deps
pnpm storybook        # run interactive docs
pnpm test             # run tests
pnpm build            # build the library
pnpm lint             # lint
```

**Package structure**

```
@ainativekit/ui
├── /               # Components, tokens, hooks
├── /icons          # 417 icons as named React components
├── /tokens         # Design tokens only
└── /styles         # CSS styles
```

## ✅ Compatibility

- **React** ≥ 18
- **TypeScript** ≥ 5 (recommended)
- **ChatGPT Apps SDK** (preview)
- Works with modern bundlers (Vite, Next.js, etc.)

## 🗺️ Roadmap (high‑level)

- [ ] More first‑class **MCP JSON -> UI mappers** (tables, charts, forms)
- [ ] Expanded **widget patterns** used commonly in ChatGPT apps
- [ ] **Theming API** refinement + tokens export
- [ ] Additional **a11y** audits

Have ideas? Please open an issue or PR!

## 🤝 Contributing

Contributions welcome! Please:

1. **Star** the repo to support visibility 🙌
2. **Open an issue** to discuss new features/bugs
3. **Fork** -> create a feature branch -> open a **PR**

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) (coming soon) for guidelines.

## 🔗 Links

- **Storybook:** https://www.ainativekit.com
- **NPM:** https://www.npmjs.com/package/@ainativekit/ui
- **GitHub:** https://github.com/AINativeKit/ainativekit-ui
- **Issues:** https://github.com/AINativeKit/ainativekit-ui/issues

## 🙏 Acknowledgments

Built for the **OpenAI Apps SDK** community. Inspired by ChatGPT App examples, OpenAI Figma design, Apple HIG, Material UI, Chakra UI, and Ant Design.

**Made with ❤️ by and for ChatGPT App developers.**

Stop wiring UIs manually, start shipping faster with **AI Native Kit UI**.