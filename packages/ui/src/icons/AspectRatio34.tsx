import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * AspectRatio34 icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { AspectRatio34 } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="aspect-ratio-3-4">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="aspect-ratio-3-4" aria-label="aspect ratio 3 4" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const AspectRatio34 = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="aspect-ratio-3-4" {...props} />;
  }
);

AspectRatio34.displayName = 'AspectRatio34';
