# AINativeKit UI Documentation

> React component library optimized for ChatGPT Apps SDK with JSON-to-UI mapping, 417 Figma-aligned icons, and AI-native patterns.

## Quick Start

```bash
npm install @ainativekit/ui
```

```tsx
import { SummaryCard, Button } from '@ainativekit/ui';
import '@ainativekit/ui/styles';

function App() {
  return (
    <SummaryCard
      title="Little Nona's"
      subtitle="1427 Via Campania"
      badge="9.2"
      badgeVariant="success"
      images={["restaurant.jpg"]}
      buttonText="Order Now"
    />
  );
}
```

## Component Categories

### [Primitives](/components/primitives/)
Basic building block components.

- [Badge](/components/primitives/badge.md)
- [Button](/components/primitives/button.md)
- [Chip](/components/primitives/chip.md)
- [Alert](/components/primitives/alert.md)
- [Icon](/components/primitives/icon.md)
- [Skeleton](/components/primitives/skeleton.md)

### [Composed](/components/composed/)
Medium complexity, general-purpose components.

- [Card](/components/composed/card.md)
- [ImageCard](/components/composed/imagecard.md)
- [SummaryCard](/components/composed/summarycard.md)
- [ListCard](/components/composed/listcard.md)
- [Carousel](/components/composed/carousel.md)
- [List](/components/composed/list.md)
- [ListItem](/components/composed/listitem.md)

### [Patterns](/components/patterns/)
Complex, domain-specific, feature-complete patterns.

- [Album](/components/patterns/album.md)
- [AlbumCard](/components/patterns/albumcard.md)
- [AlbumCarousel](/components/patterns/albumcarousel.md)
- [AlbumViewer](/components/patterns/albumviewer.md)
- [FilmStrip](/components/patterns/filmstrip.md)
- [MapView](/components/patterns/mapview.md)
- [CompactMap](/components/patterns/compactmap.md)
- [FullscreenMap](/components/patterns/fullscreenmap.md)
- [LocationCard](/components/patterns/locationcard.md)
- [LocationCarousel](/components/patterns/locationcarousel.md)
- [MapSidebar](/components/patterns/mapsidebar.md)
- [MapInspector](/components/patterns/mapinspector.md)

## Features

- 🎯 **Apps SDK Optimized:** Components designed for ChatGPT Apps SDK
- 🔄 **JSON → UI Mapping:** Render structured MCP results with minimal code
- 🎨 **417 Figma-Aligned Icons:** Fully typed and tree-shakeable
- ♿ **Accessibility First:** ARIA attributes & sensible focus management
- 🌗 **Dark/Light Themes:** Built-in theme switching
- 📦 **Tree-Shakeable & Type-Safe:** Import only what you need

## Links

- [GitHub Repository](https://github.com/ainativekit/ainativekit-ui)
- [Storybook](https://www.ainativekit.com)
- [NPM Package](https://www.npmjs.com/package/@ainativekit/ui)
