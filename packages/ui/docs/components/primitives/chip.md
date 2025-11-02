# Chip

Component for building user interfaces.

## Import

```tsx
import { Chip } from '@ainativekit/ui';
import '@ainativekit/ui/styles';
```

## Basic Usage

```tsx
// Basic label chips
<Chip>Premium</Chip>
<Chip variant="success">Verified</Chip>
<Chip variant="neutral" size="sm">Beta</Chip>

// With icons
<Chip leftIcon="check-square">Active</Chip>
<Chip variant="filled" leftIcon="star">Featured</Chip>

// Removable chips (tags, filters)
<Chip onRemove={() => removeTag('react')}>React</Chip>
<Chip variant="neutral" onRemove={() => removeFilter()}>TypeScript</Chip>

// Clickable chips
<Chip onClick={() => selectCategory('design')}>Design</Chip>
<Chip variant="filled" onClick={handleClick}>Engineering</Chip>

// Selectable filter chips
<Chip selected onClick={() => toggleFilter('all')}>All</Chip>
<Chip onClick={() => toggleFilter('active')}>Active</Chip>

// Disabled state
<Chip disabled>Unavailable</Chip>
<Chip variant="neutral" disabled onRemove={() => {}}>Can't Remove</Chip>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `import("/Users/jakelin/dev/ai/ai-native-kit/ainativekit-ui/packages/ui/src/components/Chip/Chip").ChipVariant \| undefined` | `'default'` | Visual variant of the chip. |
| `size` | `import("/Users/jakelin/dev/ai/ai-native-kit/ainativekit-ui/packages/ui/src/components/Chip/Chip").ChipSize \| undefined` | `'md'` | Size of the chip.
- sm: 24px height, compact padding
- md: 32px height, comfortable padding (default)
- lg: 40px height, spacious padding |
| `leftIcon` | `import("/Users/jakelin/dev/ai/ai-native-kit/ainativekit-ui/packages/ui/src/tokens/icons").IconName \| undefined` | - | Icon to display before the chip text. |
| `rightIcon` | `import("/Users/jakelin/dev/ai/ai-native-kit/ainativekit-ui/packages/ui/src/tokens/icons").IconName \| undefined` | - | Icon to display after the chip text. |
| `leftElement` | `React.ReactNode` | - | Custom icon element (overrides leftIcon if both provided).
Use for non-icon elements like avatars. |
| `rightElement` | `React.ReactNode` | - | Custom icon element (overrides rightIcon if both provided).
Use for non-icon elements. |
| `onRemove` | `(() => void) \| undefined` | - | Makes the chip removable with a close button.
Callback fires when the close button is clicked. |
| `onClick` | `(() => void) \| undefined` | - | Makes the chip clickable and adds interactive states.
Also makes the chip keyboard accessible (button behavior). |
| `selected` | `boolean \| undefined` | `false` | Shows selected state (typically for filter chips). |
| `ariaLabel` | `string \| undefined` | - | Accessible label for screen readers when content needs clarification.
Required when using only icons or abbreviations. |
| `disabled` | `boolean \| undefined` | `false` | Disabled state - prevents interaction. |
---

_Generated from TypeScript definitions. [View source](../../src/components/Chip/Chip.tsx)_