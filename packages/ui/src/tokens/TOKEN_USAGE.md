# Design Token Usage Guide

This guide demonstrates how to use AI Native Kit design tokens with full type safety and autocomplete support.

## Table of Contents

- [Quick Start](#quick-start)
- [Import Options](#import-options)
- [Token Categories](#token-categories)
  - [Spacing](#spacing)
  - [Colors](#colors)
  - [Typography](#typography)
  - [Border Radius](#border-radius)
  - [Elevation](#elevation)
  - [Opacity](#opacity)
- [Usage Patterns](#usage-patterns)
- [CSS Variables vs Direct Values](#css-variables-vs-direct-values)
- [Best Practices](#best-practices)
- [Migration Guide](#migration-guide)

## Quick Start

```tsx
import { spacing, colors, typography, cssVar } from '@ainativekit/ui/tokens';

// ✅ Type-safe, autocomplete-friendly
function MyComponent() {
  return (
    <div
      style={{
        gap: spacing[8],                    // '16px'
        color: colors.light.text.primary,   // '#0D0D0D'
        ...typography.heading1,             // Complete typography style
      }}
    >
      <h1>Hello World</h1>
    </div>
  );
}
```

## Import Options

### Individual Token Imports

```tsx
import { spacing, colors, radius, typography } from '@ainativekit/ui/tokens';
```

### Helper Function Imports

```tsx
import { cssVar, applyTypography, applyElevation } from '@ainativekit/ui/tokens';
```

### Complete Token Object

```tsx
import { tokens } from '@ainativekit/ui/tokens';

const gap = tokens.spacing[16];
const color = tokens.colors.light.text.primary;
const shadow = tokens.elevation[1].shadow;
```

## Token Categories

### Spacing

Access spacing tokens using numeric scale values (0-64).

```tsx
import { spacing, cssVar } from '@ainativekit/ui/tokens';

// Direct values (fixed)
<div style={{
  padding: spacing[16],        // '32px'
  gap: spacing[8],             // '16px'
  margin: spacing[4],          // '8px'
}} />

// CSS variables (theme-aware)
<div style={{
  padding: cssVar.spacing(16), // 'var(--ai-spacing-16)'
  gap: cssVar.spacing(8),      // 'var(--ai-spacing-8)'
}} />

// Available scales: 0, 1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 64
```

**Spacing Scale Reference:**

| Scale | Value | Use Case |
|-------|-------|----------|
| 0     | 0px   | No spacing |
| 1     | 2px   | Minimal spacing, borders |
| 2     | 4px   | Tight spacing |
| 4     | 8px   | Small gaps, icon spacing |
| 6     | 12px  | Medium-small spacing |
| 8     | 16px  | Standard gap, padding |
| 10    | 20px  | Medium spacing |
| 12    | 24px  | Large padding |
| 16    | 32px  | Section spacing |
| 20    | 40px  | Large sections |
| 24    | 48px  | Major spacing |
| 32    | 64px  | Extra large |
| 64    | 128px | Maximum spacing |

### Colors

Access colors with full autocomplete for both light and dark themes.

```tsx
import { colors, cssVar } from '@ainativekit/ui/tokens';

// Direct values (light theme)
<div style={{
  backgroundColor: colors.light.background.primary,  // '#FFFFFF'
  color: colors.light.text.primary,                  // '#0D0D0D'
}} />

// Direct values (dark theme)
<div style={{
  backgroundColor: colors.dark.background.primary,   // '#212121'
  color: colors.dark.text.primary,                   // '#FFFFFF'
}} />

// CSS variables (automatically theme-aware)
<div style={{
  color: cssVar.color('text-primary'),          // Adapts to theme
  backgroundColor: cssVar.color('bg-secondary'), // Adapts to theme
}} />

// Accent colors
<button style={{
  backgroundColor: colors.light.accent.blue,    // '#0285FF'
  borderColor: colors.light.accent.green,       // '#008635'
}} />

// Brand semantic colors
<div style={{
  color: colors.light.brand.primary,   // Same as accent.blue
  borderColor: colors.light.brand.error,   // Same as accent.red
}} />
```

**Color Path Reference:**

```typescript
// Available CSS variable paths:
'text-primary' | 'text-secondary' | 'text-tertiary' | 'text-inverted'
'bg-primary' | 'bg-secondary' | 'bg-tertiary'
'icon-primary' | 'icon-secondary' | 'icon-tertiary' | 'icon-inverted'
'accent-blue' | 'accent-red' | 'accent-orange' | 'accent-green'
'brand-primary' | 'brand-success' | 'brand-warning' | 'brand-error' | 'brand-info'
'outline' | 'border-light' | 'border-default' | 'border-heavy'
```

### Typography

Apply complete typography styles with font size, line height, weight, and letter spacing.

```tsx
import { typography, applyTypography, cssVar } from '@ainativekit/ui/tokens';

// Direct style object
<h1 style={typography.heading1}>
  {/* fontSize: '36px', lineHeight: '40px', fontWeight: 600, letterSpacing: '-0.1px' */}
  Page Title
</h1>

// Using spread operator
<p style={{
  ...typography.body,
  color: colors.light.text.primary,
}}>
  Body text
</p>

// Using helper function
<div style={applyTypography('heading2')}>
  Section Title
</div>

// CSS variables (for dynamic theming)
<div style={cssVar.typography('body')}>
  {/* { fontSize: 'var(--ai-font-size-body)', ... } */}
  Theme-aware text
</div>

// Utility class (recommended for static content)
<h1 className={typography.heading1.className}>
  {/* Uses .ai-heading1 class */}
  Page Title
</h1>
```

**Typography Styles:**

| Style | Font Size | Line Height | Weight | Use Case |
|-------|-----------|-------------|--------|----------|
| heading1 | 36px | 40px | 600 | Page titles |
| heading2 | 24px | 28px | 600 | Section headings |
| heading3 | 18px | 26px | 600 | Subsections |
| body | 16px | 26px | 400 | Main content |
| bodyEmph | 16px | 26px | 600 | Emphasized text |
| bodySmall | 14px | 18px | 400 | Secondary info |
| bodySmallEmph | 14px | 18px | 600 | Emphasized small text |
| caption | 12px | 16px | 400 | Captions, labels |
| captionEmph | 12px | 16px | 600 | Emphasized captions |
| button | 15px | 24px | 500 | Buttons, CTAs |
| badge | 14px | 18px | 600 | Badges, tags |

### Border Radius

Access border radius values for consistent rounded corners.

```tsx
import { radius, cssVar } from '@ainativekit/ui/tokens';

// Direct values
<div style={{
  borderRadius: radius.xl,    // '24px'
}} />

<button style={{
  borderRadius: radius.full,  // '9999px' (pill shape)
}} />

// CSS variables
<div style={{
  borderRadius: cssVar.radius('xl'),
}} />
```

**Radius Scale:**

| Value | Size | Use Case |
|-------|------|----------|
| none  | 0px  | Sharp corners |
| sm    | 4px  | Subtle rounding |
| md    | 8px  | Small elements |
| base  | 12px | Default rounding |
| lg    | 16px | Cards, panels |
| xl    | 24px | Large cards |
| full  | 9999px | Pills, circular |

### Elevation

Apply shadows for depth and hierarchy.

```tsx
import { elevation, applyElevation, cssVar } from '@ainativekit/ui/tokens';

// Using helper function
<div style={applyElevation(2)}>
  {/* { boxShadow: '0px 6px 24px rgba(0,0,0,0.08)' } */}
  Elevated card
</div>

// Direct access
<div style={{
  boxShadow: elevation[3].shadow,
}} />

// CSS variables
<div style={{
  boxShadow: cssVar.elevation(2),
}} />

// Utility class (includes background overlay)
<div className={elevation[2].className}>
  {/* Uses .ai-elevation-2 class */}
  Elevated with overlay
</div>
```

**Elevation Levels:**

| Level | Shadow | Use Case | Z-Index |
|-------|--------|----------|---------|
| 0     | none   | Flat surface | 0 |
| 1     | 4px blur | Subtle lift | 100 |
| 2     | 6px blur | Cards | 200 |
| 3     | 10px blur | Raised cards | 300 |
| 4     | 12px blur | Modals | 400 |
| 5     | 16px blur | Popovers | 500 |

### Opacity

Use predefined opacity values for consistency.

```tsx
import { opacity, cssVar } from '@ainativekit/ui/tokens';

// Direct values
<div style={{
  opacity: opacity.subtle,    // 0.7
}} />

<div style={{
  opacity: opacity.disabled,  // 0.3
}} />

// CSS variables
<div style={{
  opacity: cssVar.opacity('muted'),  // 'var(--ai-opacity-muted)'
}} />
```

**Opacity Presets:**

| Preset | Value | Use Case |
|--------|-------|----------|
| full | 1.0 | Full opacity |
| subtle | 0.7 | Slightly dimmed |
| muted | 0.5 | Half opacity |
| disabled | 0.3 | Disabled state |

## Usage Patterns

### Pattern 1: Component Styling with Direct Values

Best for: Static components, no theme switching needed

```tsx
import { spacing, colors, radius, typography } from '@ainativekit/ui/tokens';

function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      style={{
        padding: `${spacing[4]} ${spacing[12]}`,
        backgroundColor: colors.light.accent.blue,
        color: colors.light.text.inverted,
        borderRadius: radius.full,
        ...typography.button,
      }}
    >
      {children}
    </button>
  );
}
```

### Pattern 2: Theme-Aware Styling with CSS Variables

Best for: Dynamic themes, user preferences

```tsx
import { cssVar, spacing } from '@ainativekit/ui/tokens';

function ThemedCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: spacing[16],
        backgroundColor: cssVar.color('bg-primary'),  // Adapts to theme
        color: cssVar.color('text-primary'),           // Adapts to theme
        borderRadius: cssVar.radius('xl'),
        boxShadow: cssVar.elevation(2),
      }}
    >
      {children}
    </div>
  );
}
```

### Pattern 3: Utility Classes for Static Content

Best for: Content-heavy pages, performance-critical sections

```tsx
import { typography, elevation } from '@ainativekit/ui/tokens';

function Article() {
  return (
    <article className={elevation[1].className}>
      <h1 className={typography.heading1.className}>
        Article Title
      </h1>
      <p className={typography.body.className}>
        Article content goes here.
      </p>
    </article>
  );
}
```

### Pattern 4: Mixed Approach

Best for: Real-world applications

```tsx
import {
  spacing,
  colors,
  typography,
  applyTypography,
  cssVar,
} from '@ainativekit/ui/tokens';

function ProductCard({ theme }: { theme: 'light' | 'dark' }) {
  const themeColors = colors[theme];

  return (
    <div
      style={{
        padding: spacing[16],                    // Direct value
        backgroundColor: themeColors.background.primary,  // Theme-specific
        borderRadius: cssVar.radius('xl'),       // CSS variable
        gap: spacing[8],                         // Direct value
      }}
    >
      <h3 style={applyTypography('heading3')}>Product Name</h3>
      <p style={typography.bodySmall}>Description</p>
    </div>
  );
}
```

## CSS Variables vs Direct Values

### When to Use Direct Values

✅ **Use direct values when:**
- Component doesn't need theme switching
- Building a static site
- Performance is critical (fewer CSS variable lookups)
- You know the exact theme at build time

```tsx
// Good: Static component
<div style={{
  padding: spacing[16],              // '32px'
  color: colors.light.text.primary,  // '#0D0D0D'
}} />
```

### When to Use CSS Variables

✅ **Use CSS variables when:**
- Supporting dynamic theme switching
- Building for ChatGPT Apps (theme changes automatically)
- Want user-controlled themes
- Need runtime theme changes

```tsx
// Good: Dynamic theming
<div style={{
  padding: cssVar.spacing(16),     // 'var(--ai-spacing-16)'
  color: cssVar.color('text-primary'),  // Adapts to theme
}} />
```

## Best Practices

### ✅ Do's

```tsx
// ✅ Use typed scale values
gap: spacing[8]

// ✅ Use color paths with autocomplete
color: colors.light.text.primary

// ✅ Spread typography styles
<h1 style={{ ...typography.heading1, color: colors.light.text.primary }}>

// ✅ Use helper functions
<div style={applyTypography('body')} />

// ✅ Use semantic color names
backgroundColor: colors.light.brand.success

// ✅ Use CSS variables for theme-aware components
color: cssVar.color('text-primary')
```

### ❌ Don'ts

```tsx
// ❌ Hard-coded values
gap: '16px'  // Use spacing[8] instead

// ❌ Magic colors
color: '#0D0D0D'  // Use colors.light.text.primary instead

// ❌ Manual font styles
fontSize: '36px', lineHeight: '40px'  // Use typography.heading1 instead

// ❌ String-based CSS variables (no autocomplete)
gap: 'var(--ai-spacing-8)'  // Use cssVar.spacing(8) instead

// ❌ Typos in variable names
color: 'var(--ai-color-text-primry)'  // Typo! Use cssVar.color('text-primary')
```

## Migration Guide

### Before: String-based CSS Variables

```tsx
// ❌ Before: No autocomplete, typo-prone
<div style={{
  gap: 'var(--ai-spacing-8)',
  fontSize: 'var(--ai-font-size-sm)',
  color: 'var(--ai-color-text-primary)',
}} />
```

### After: Type-Safe Token Helpers

```tsx
// ✅ After: Full autocomplete and type safety
import { cssVar, spacing, typography } from '@ainativekit/ui/tokens';

<div style={{
  gap: cssVar.spacing(8),              // Autocomplete!
  ...typography.bodySmall,              // Complete typography
  color: cssVar.color('text-primary'),  // Type-safe path
}} />

// Or use direct values:
<div style={{
  gap: spacing[8],                     // '16px'
  ...typography.bodySmall,
  color: colors.light.text.primary,    // '#0D0D0D'
}} />
```

## Advanced Usage

### Custom CSS Variables with Fallbacks

```tsx
import { varWithFallback, customVar } from '@ainativekit/ui/tokens';

<div style={{
  color: varWithFallback('custom-color', colors.light.text.primary),
  backgroundColor: customVar('brand-background'),
}} />
```

### Conditional Theming

```tsx
import { colors } from '@ainativekit/ui/tokens';

function ThemedButton({ theme }: { theme: 'light' | 'dark' }) {
  const themeColors = colors[theme];

  return (
    <button
      style={{
        backgroundColor: themeColors.accent.blue,
        color: themeColors.text.inverted,
      }}
    >
      Click me
    </button>
  );
}
```

### Responsive Spacing

```tsx
import { spacing } from '@ainativekit/ui/tokens';

function ResponsiveCard() {
  return (
    <div
      style={{
        padding: spacing[8],
        '@media (min-width: 768px)': {
          padding: spacing[16],
        },
      }}
    >
      Content
    </div>
  );
}
```

## TypeScript Tips

### Type Inference

All token helpers provide full type inference:

```tsx
import type { SpacingScale, ColorPath, TypographyStyle } from '@ainativekit/ui/tokens';

// Autocomplete works automatically
const mySpacing: SpacingScale = 16;  // ✅ Valid
const mySpacing2: SpacingScale = 15; // ❌ Error: not a valid scale

const myColor: ColorPath = 'text-primary';  // ✅ Valid
const myColor2: ColorPath = 'text-primry';  // ❌ Error: typo
```

### Const Assertions

All token objects use `as const` for maximum type safety:

```tsx
// Types are narrowed to literal values
const gap = spacing[8];  // Type: '16px' (not string)
const color = colors.light.text.primary;  // Type: '#0D0D0D' (not string)
```

## Summary

| Feature | Import | Example | When to Use |
|---------|--------|---------|-------------|
| Spacing | `spacing` | `spacing[16]` | Always for spacing |
| Colors | `colors` | `colors.light.text.primary` | Static themes |
| Typography | `typography` | `typography.heading1` | Complete styles |
| CSS Vars | `cssVar` | `cssVar.spacing(16)` | Dynamic themes |
| Helpers | `applyTypography` | `applyTypography('body')` | Inline styles |

**Key Takeaway:** Use token helpers for type safety, autocomplete, and maintainability. Choose between direct values (static) and CSS variables (dynamic) based on your theming needs.
