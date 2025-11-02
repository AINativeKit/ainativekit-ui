# Badge

Component for building user interfaces.

## Import

```tsx
import { Badge } from '@ainativekit/ui';
import '@ainativekit/ui/styles';
```

## Basic Usage

```tsx
<Badge ariaLabel="5 unread messages">5</Badge>
<Badge ariaLabel="Verified" variant="success">✓</Badge>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `import("/Users/jakelin/dev/ai/ai-native-kit/ainativekit-ui/packages/ui/src/components/Badge/Badge").BadgeVariant \| undefined` | `'default'` | Visual variant of the badge. |
| `size` | `import("/Users/jakelin/dev/ai/ai-native-kit/ainativekit-ui/packages/ui/src/components/Badge/Badge").BadgeSize \| undefined` | `'md'` | Size of the badge.
- sm: 32px (--ai-spacing-16)
- md: 40px (--ai-spacing-20) - default
- lg: 48px (--ai-spacing-24) |
| `ariaLabel` | `string \| undefined` | - | Accessible label for screen readers when content is not descriptive.
Use when badge contains only icons, numbers, or abbreviated text. |

## Examples

### Example 1

```tsx
// Counter/Rating (provide ariaLabel for accessibility)
<Badge ariaLabel="Rating 9.2 out of 10">9.2</Badge>

// Notification count
<Badge variant="filled" size="sm" ariaLabel="5 unread messages">5</Badge>
<Badge variant="filled" size="lg" ariaLabel="99+ notifications">99+</Badge>

// Status indicators (always use ariaLabel for icons)
<Badge variant="success" ariaLabel="Verified">✓</Badge>
<Badge variant="warning" ariaLabel="Warning">!</Badge>
<Badge variant="error" ariaLabel="Error">×</Badge>

// Compact labels
<Badge variant="neutral" size="sm">AI</Badge>
```

---

_Generated from TypeScript definitions. [View source](../../src/components/Badge/Badge.tsx)_