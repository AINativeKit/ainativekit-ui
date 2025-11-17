# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.12.0] - 2025-11-17

### Changed

- **Carousel**: Default viewport padding is now `0` instead of `var(--ai-spacing-10)`
  - Padding is now opt-in instead of opt-out
  - Prevents layout issues in constrained spaces (e.g., 640px ChatGPT iframe)
  - Use `viewportPadding="var(--ai-spacing-10)"` to restore previous behavior

### Fixed

- **SummaryCard.Overlay**: Height calculation now correctly includes padding
  - Added `box-sizing: border-box` so `height={40}` with `padding={8}` results in 40px total, not 56px
  - Overlay content now clips properly to image rounded corners with `overflow: hidden`

## [0.11.0] - 2025-11-16

### Added

- **Light/Dark Mode Brand Colors**: Brand colors now support theme-aware variants
  - New `BrandColorValue` type: `string | { light: string; dark: string }`
  - Specify different colors for light and dark themes: `{ light: '#059669', dark: '#34D399' }`
  - Backward compatible - existing string colors work unchanged
  - Automatic CSS generation for both themes using data-attribute selectors
  - Validation caching prevents duplicate console warnings for string colors
  - Comprehensive unit tests for all light/dark mode scenarios

### Changed

- **Documentation**: Updated all README files with brand color customization examples
  - Added "Brand Color Customization" section with light/dark mode examples
  - Replaced brand-specific color examples with generic Tailwind CSS colors
  - Updated TOKEN_USAGE.md with CSS variable reference table

### Fixed

- **ESLint Configuration**: Added missing TypeScript ESLint plugins to workspace root
  - Resolves ESLint plugin resolution errors

## [0.10.0] - 2025-11-11

### Changed

- **Repository Rename**: Renamed from `ainativekit-ui` to `chatgpt-apps-sdk-ui` for improved discoverability
  - GitHub repository now at `AINativeKit/chatgpt-apps-sdk-ui`
  - NPM package name remains `@ainativekit/ui` for backward compatibility
  - All documentation URLs updated to reflect new repository name

- **Branding & Positioning**: Updated to "AINativeKit - ChatGPT Apps SDK UI"
  - Emphasizes "ChatGPT Apps SDK" positioning for better SEO and target audience clarity
  - Subtitle: "The React UI library for ChatGPT Apps SDK"
  - Tagline: "Build beautiful ChatGPT Apps 10x faster"

- **Documentation Enhancements**:
  - Added "Who This Is For" section targeting ChatGPT Apps developers
  - Added comparison table showing value proposition (before/after scenarios)
  - Replaced Contributing section with "Support the Project" featuring stronger CTAs
  - Added SEO footer with keywords and descriptive paragraph for search optimization
  - Updated badges: added npm downloads and GitHub stars, removed TypeScript badge

- **NPM Optimization**:
  - Updated package description to emphasize "ChatGPT Apps SDK"
  - Added 5 new high-value keywords: `chatgpt-apps-sdk`, `react-components`, `ui-components`, `chatgpt-ui`, `mcp`

**Note**: This is a documentation and marketing release. No breaking changes to components or APIs.

## [0.9.0] - 2025-11-10

### Fixed

- **Carousel**: Fixed horizontal page overflow in width-constrained containers (Issue #17)
  - Replaced negative margin gap implementation with CSS `gap` property
  - Carousel now properly contains itself without requiring parent containers to use `overflow-x: hidden`
  - Self-contained component handles its own overflow correctly

## [0.8.0] - 2025-11-09

### Fixed

- **SummaryCard**: Button skeleton width now matches button width (Issue #15)
  - Skeleton buttons use the same width logic as real buttons
  - `buttonFullWidth={false}` → auto-width (min 120px) for both skeleton and button
  - `buttonFullWidth={true}` → full-width (100%) for both skeleton and button
  - `buttonFullWidth={undefined}` → variant-based (full for default, auto for flat)

### Changed

- **SummaryCard**: Simplified `buttonFullWidth` behavior
  - `buttonFullWidth={false}`: Always auto-width (min 120px)
  - `buttonFullWidth={true}`: Always full-width (100%)
  - `buttonFullWidth={undefined}`: Full-width for default variant, auto-width for flat variant
  - Button width is now fixed and predictable - no responsive behavior
  - Simpler implementation using standard CSS

### Technical Details

All components use simple, predictable viewport-based media queries for responsive behavior:

```css
/* SummaryCard: Fixed button widths based on prop */
.buttonSection[data-full-width='false'] .button {
  width: auto;
  min-width: 120px;
}

/* List & AlbumViewer: Viewport-based responsive behavior */
@media (min-width: 640px) {
  /* Tablet/desktop styles */
}
```

## [0.7.0] - 2025-11-08

### Added

- **Responsive Breakpoints**: Standardized breakpoint system across all components
  - Added design tokens for breakpoints (640px tablet, 768px desktop, 1024px desktop-wide)
  - Comprehensive Storybook documentation with interactive demos
  - Live viewport width indicators for testing responsive behavior
  - ChatGPT Desktop widget strategy (768px width optimization)

### Fixed

- **SummaryCard**: Button skeleton width now responsive in loading states
  - Use CSS custom property (--button-skeleton-width) for dynamic width calculation
  - Calculate width based on button text length (min 88px, max 200px)
  - Preserve media query behavior for responsive breakpoints
  - Loading state buttons now match data state widths at all breakpoints

### Changed

- **Responsive Breakpoints**: Standardized media queries across components
  - List component: 640px (ensures desktop layout at 768px ChatGPT widget width)
  - Card/SummaryCard/Album: 768px (button auto-width at ChatGPT widget size)
  - FullscreenMap: 1024px (sidebar only on wide screens)
  - All breakpoints use hardcoded px values with inline comments
  - Design tokens serve as documentation reference

## [0.6.0] - 2025-11-07

### Fixed

- **SummaryCard**: Prevent layout shift during loading to data mode transition
  - Set explicit height on description skeleton wrapper to match description's rendered height
  - Normal mode: includes marginTop spacing (2px between lines)
  - Compact mode: accounts for webkit-line-clamp rendering difference (-2px adjustment)
  - Button skeleton width now matches actual button width for flat variant (auto-width 160px)

## [0.5.0] - 2025-11-06

### Added

- **SummaryCard Enhancements**:
  - Top overlay support with `topOverlay` prop and helper component
  - Configurable description lines with `maxDescriptionLines` prop
  - Loading skeleton states for better UX
  - Flat variant with edge-to-edge layout for immersive designs
- **Map Component**: Configurable scroll wheel zoom controls
- **Carousel Component**: Drag-free scrolling and trackpad support
- **Typography System**: Complete font weight token system with light variants

### Changed

- **Card Component**: Reduced spacing for more compact design
- **Card Loading UI**: Improve loading UI to be responsive to smoothly transit to data state.
- **SummaryCard**: Consolidated DiscoveryCard functionality with improved structure

### Fixed

- Pizza restaurant description and SummaryCard dimension adjustments

## [0.4.0] - 2025-11-03

### Added

- **ThemeProvider**: New provider component for programmatic theme control
  - Enables theme switching in standalone apps and development environments
  - Respects ChatGPT theme authority when running inside ChatGPT (read-only mode)
  - Supports localStorage persistence and system preference detection
  - See [Theme Management](packages/ui/README.md#-openai-hooks--theme-management) for usage
- [Performance Best Practices](packages/ui/docs/guides/performance.md) guide
  - Clarifies typical ChatGPT Apps SDK usage patterns (10-20 items)
  - Explains why virtualization is not needed for conversational UI
  - Provides optimization tips for image-heavy content
  - Documents when to consider pagination vs virtualization

### Changed

- **useTheme()**: Enhanced to return object with `{ theme, setTheme, isControlledByChatGPT }`
  - **Breaking Change**: Previously returned `Theme | null`, now returns `UseThemeResult` object
  - Works seamlessly with or without ThemeProvider
  - Inside ChatGPT: Read-only theme from `window.openai.theme`
  - Inside ThemeProvider: Full theme control with localStorage persistence
- Icon system documentation updated to remove misleading tree-shaking claims
  - Icons use runtime lookup (not tree-shakeable)
  - Bundle includes all 417 icons (606KB source, 206KB gzipped)
  - Focus on actual benefits: type safety, autocompletion, semantic categories

### Fixed

- Icon data generation script now handles missing source directory gracefully
- Storybook build no longer fails when icon source files are unavailable
- ESLint errors in theme implementation (Rules of Hooks violations)

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

[0.10.0]: https://github.com/AINativeKit/chatgpt-apps-sdk-ui/releases/tag/v0.10.0
[0.9.0]: https://github.com/AINativeKit/chatgpt-apps-sdk-ui/releases/tag/v0.9.0
[0.8.0]: https://github.com/AINativeKit/chatgpt-apps-sdk-ui/releases/tag/v0.8.0
[0.7.0]: https://github.com/AINativeKit/chatgpt-apps-sdk-ui/releases/tag/v0.7.0
[0.6.0]: https://github.com/AINativeKit/chatgpt-apps-sdk-ui/releases/tag/v0.6.0
[0.5.0]: https://github.com/AINativeKit/chatgpt-apps-sdk-ui/releases/tag/v0.5.0
[0.4.0]: https://github.com/AINativeKit/chatgpt-apps-sdk-ui/releases/tag/v0.4.0
[0.1.0]: https://github.com/AINativeKit/chatgpt-apps-sdk-ui/releases/tag/v0.1.0
