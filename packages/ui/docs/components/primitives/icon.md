# Icon

Component for building user interfaces.

## Import

```tsx
import { Icon } from '@ainativekit/ui';
import '@ainativekit/ui/styles';
```

## Basic Usage

```tsx
<Icon name="settings-cog" interactive onClick={() => console.log('clicked')} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `import("/Users/jakelin/dev/ai/ai-native-kit/ainativekit-ui/packages/ui/src/tokens/icons").IconName` | - | Icon name |
| `size` | `import("/Users/jakelin/dev/ai/ai-native-kit/ainativekit-ui/packages/ui/src/components/Icon/Icon").IconSize \| undefined` | `'md'` | Icon size - semantic token ('xs', 'sm', 'md', 'lg', 'xl') or pixel value (24, 32, etc.) |
| `tone` | `import("/Users/jakelin/dev/ai/ai-native-kit/ainativekit-ui/packages/ui/src/components/Icon/Icon").IconTone \| undefined` | `'primary'` | Icon tone mapped to design token colors |
| `className` | `string \| undefined` | - | Additional CSS classes |
| `interactive` | `boolean \| undefined` | `false` | Makes the icon interactive with hover/active states |
| `disabled` | `boolean \| undefined` | `false` | Disables the icon (reduces opacity, prevents interaction) |
| `'aria-label'` | `string \| undefined` | - | Accessibility label for screen readers.

**Icon Accessibility Patterns:**

1. **Decorative (default)**: No aria-label → Icon is aria-hidden
2. **Meaningful**: Provide aria-label → Icon gets role="img"

Most icons are decorative and should not have aria-label.
Only provide aria-label when the icon conveys unique information. |

## Examples

### Example 1

```tsx
<Icon name="settings-cog" disabled />
```

### Example 2

```tsx
// ✅ Decorative icon (default - no aria-label)
<button>
  <Icon name="plus-circle-add" />
  Add Item
</button>

// ✅ Icon-only button (aria-label on parent)
<button aria-label="Close dialog">
  <Icon name="close-bold" />
</button>

// ✅ Meaningful standalone icon
<Icon name="warning" aria-label="Warning: Action required" />
```

### Example 3

```tsx
// Semantic sizes
<Icon name="settings-cog" size="xs" />  // 12px
<Icon name="settings-cog" size="sm" />  // 16px
<Icon name="settings-cog" size="md" />  // 20px (default)
<Icon name="settings-cog" size="lg" />  // 24px
<Icon name="settings-cog" size="xl" />  // 32px

// Pixel sizes
<Icon name="settings-cog" size={24} />
<Icon name="settings-cog" size={32} />

// Accessibility: Decorative (default - most common)
<button>
  <Icon name="plus-circle-add" />
  Add Item
</button>

// Accessibility: Meaningful standalone
<Icon name="warning" aria-label="Warning: Action required" />
```

---

_Generated from TypeScript definitions. [View source](../../src/components/Icon/Icon.tsx)_