import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * AspectRatio1691 icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { AspectRatio1691 } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="aspect-ratio-16-9-1">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="aspect-ratio-16-9-1" aria-label="aspect ratio 16 9 1" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const AspectRatio1691 = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="aspect-ratio-16-9-1" {...props} />;
  }
);

AspectRatio1691.displayName = 'AspectRatio1691';
