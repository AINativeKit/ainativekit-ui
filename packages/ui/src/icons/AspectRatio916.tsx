import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * AspectRatio916 icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { AspectRatio916 } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="aspect-ratio-9-16">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="aspect-ratio-9-16" aria-label="aspect ratio 9 16" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const AspectRatio916 = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="aspect-ratio-9-16" {...props} />;
  }
);

AspectRatio916.displayName = 'AspectRatio916';
