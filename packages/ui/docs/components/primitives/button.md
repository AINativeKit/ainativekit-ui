# Button

Component for building user interfaces.

## Import

```tsx
import { Button } from '@ainativekit/ui';
import '@ainativekit/ui/styles';
```

## Basic Usage

```tsx
// Primary button for main actions
<Button variant="primary">Get Started</Button>

// Secondary button for alternative actions
<Button variant="secondary">Learn More</Button>

// With icons for visual clarity
<Button variant="primary" leftIcon="plus-circle-add">Add Item</Button>
<Button variant="primary" rightIcon="arrow-right-sm">Continue</Button>

// Icon-only buttons (MUST have aria-label)
<Button variant="ghost" iconOnly="edit-pencil" aria-label="Edit document" />
<Button variant="tertiary" iconOnly="plus-circle-add" aria-label="Add item" />

// Disabled state
<Button variant="primary" disabled>Cannot Click</Button>

// Form submission
<Button variant="primary" type="submit">Submit Form</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `import("/Users/jakelin/dev/ai/ai-native-kit/ainativekit-ui/packages/ui/src/components/Button/Button").ButtonVariant \| undefined` | `'primary'` | Visual variant of the button. |
| `leftIcon` | `import("/Users/jakelin/dev/ai/ai-native-kit/ainativekit-ui/packages/ui/src/tokens/icons").IconName \| undefined` | - | Icon to display before the button text. |
| `rightIcon` | `import("/Users/jakelin/dev/ai/ai-native-kit/ainativekit-ui/packages/ui/src/tokens/icons").IconName \| undefined` | - | Icon to display after the button text. |
| `iconOnly` | `import("/Users/jakelin/dev/ai/ai-native-kit/ainativekit-ui/packages/ui/src/tokens/icons").IconName \| undefined` | - | Render as icon-only button (circular, 44x44).
When set, children are ignored and aria-label is required. |
| `disabled` | `boolean \| undefined` | `false` | Disabled state - prevents interaction. |
---

_Generated from TypeScript definitions. [View source](../../src/components/Button/Button.tsx)_