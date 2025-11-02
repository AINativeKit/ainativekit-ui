# Alert

Component for building user interfaces.

## Import

```tsx
import { Alert } from '@ainativekit/ui';
import '@ainativekit/ui/styles';
```

## Basic Usage

```tsx
// Default layout (left-aligned)
<Alert
  variant="error"
  title="Failed to load"
  message="Unable to fetch data"
  onAction={handleRetry}
/>

// Success alert
<Alert
  variant="success"
  title="Saved"
  message="Your changes have been saved"
/>

// Center layout (centered without card styling)
<Alert
  variant="info"
  layout="center"
  title="Information"
  message="New features are available"
/>

// Card layout (centered with card styling)
<Alert
  variant="error"
  layout="card"
  title="No results found"
  message="Try adjusting your filters"
  onAction={handleRetry}
/>

// Custom icon
<Alert
  icon={<CustomIcon />}
  title="Custom alert"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `import("/Users/jakelin/dev/ai/ai-native-kit/ainativekit-ui/packages/ui/src/components/Alert/Alert").AlertVariant \| undefined` | `'error'` | Alert severity/type
- 'error': Error state (red)
- 'warning': Warning state (orange)
- 'info': Informational state (blue)
- 'success': Success state (green) |
| `layout` | `import("/Users/jakelin/dev/ai/ai-native-kit/ainativekit-ui/packages/ui/src/components/Alert/Alert").AlertLayout \| undefined` | `'default'` | Layout style
- 'default': Left-aligned layout
- 'center': Center-aligned layout without card styling
- 'card': Centered layout with card container styling (padding, min-height) |
| `title` | `string \| undefined` | `Auto-generated based on variant` | Alert title/heading |
| `message` | `string \| undefined` | - | Detailed alert message or description |
| `onAction` | `(() => void) \| undefined` | - | Optional action handler (typically for retry or dismiss)
When provided, shows an action button |
| `actionLabel` | `string \| undefined` | `'Try Again' for error, 'Dismiss' for others` | Label for the action button |
| `icon` | `React.ReactNode` | - | Custom icon to display instead of default variant icon |
| `hideIcon` | `boolean \| undefined` | `false` | Hide the icon completely |
| `'data-testid'` | `string \| undefined` | - | Optional test ID for testing purposes |
---

_Generated from TypeScript definitions. [View source](../../src/components/Alert/Alert.tsx)_