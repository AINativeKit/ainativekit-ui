import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * AspectRatio11 icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { AspectRatio11 } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="aspect-ratio-1-1">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="aspect-ratio-1-1" aria-label="aspect ratio 1 1" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const AspectRatio11 = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="aspect-ratio-1-1" {...props} />;
  }
);

AspectRatio11.displayName = 'AspectRatio11';
