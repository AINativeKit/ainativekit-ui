# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **ThemeProvider**: New provider component for programmatic theme control
  - Enables theme switching in standalone apps and development environments
  - Respects ChatGPT theme authority when running inside ChatGPT (read-only mode)
  - Supports localStorage persistence and system preference detection
  - See [Theme Management](packages/ui/README.md#-openai-hooks--theme-management) for usage

### Changed
- **useTheme()**: Enhanced to return object with `{ theme, setTheme, isControlledByChatGPT }`
  - **Breaking Change**: Previously returned `Theme | null`, now returns `UseThemeResult` object
  - Works seamlessly with or without ThemeProvider
  - Inside ChatGPT: Read-only theme from `window.openai.theme`
  - Inside ThemeProvider: Full theme control with localStorage persistence
- Refreshed documentation across the project to align with the 0.1.0 release and Storybook content.
- Added an icon system reference guide detailing categories, APIs, and maintenance workflows.
- Adopted an explicit Code of Conduct linked from CONTRIBUTING guidelines.

### Documentation
- Added [Performance Best Practices](packages/ui/docs/guides/performance.md) guide
  - Clarifies typical ChatGPT Apps SDK usage patterns (10-20 items)
  - Explains why virtualization is not needed for conversational UI
  - Provides optimization tips for image-heavy content
  - Documents when to consider pagination vs virtualization


## [0.1.0] - 2025-10-28

### Added

#### Components
- **Core Primitives** (Production-Ready): Button, Icon, Badge, Chip, Alert, Skeleton, Feature, Card (Base)
- **Example Patterns** (Reference Implementations): 
  - Card Variants (Image, Summary, List, Discovery)
  - Carousel, List
  - Album (photo gallery pattern - adapt for your media type)
  - Map (location pattern - adapt for your data source)

#### Design System
- Complete design token system (colors, typography, spacing, elevation, radius, opacity)
- 417 fully type-safe icons across 7 categories
- Light and dark theme support
- CSS custom properties for all tokens

#### OpenAI Integration
- `useOpenAiGlobal()` - Access ChatGPT global object
- `useWidgetProps()` - Widget-specific props management
- `useWidgetState()` - State management for widgets
- `useMaxHeight()` - Responsive height handling
- `useDisplayMode()` - Detect display mode (inline/fullscreen)

#### Developer Experience
- Full TypeScript support with JSDoc documentation
- ESM and CJS builds
- Multiple export paths for granular imports
- Comprehensive Storybook with 29 stories
- 15 test files with Vitest + React Testing Library
- Custom ESLint rule for tier dependency enforcement

#### Documentation
- 29 Storybook stories with interactive examples
- Gallery examples showing real-world patterns

### Infrastructure
- pnpm workspace monorepo setup
- Vite build system
- Vitest testing setup
- ESLint + Prettier code quality
- Icon normalization scripts
- Automated icon component generation

---

## Versioning

This library follows [Semantic Versioning](https://semver.org/):

- **MAJOR** version for incompatible API changes
- **MINOR** version for new functionality in a backward-compatible manner
- **PATCH** version for backward-compatible bug fixes

---

[0.1.0]: https://github.com/ainativekit/ainativekit-ui/releases/tag/v0.1.0
