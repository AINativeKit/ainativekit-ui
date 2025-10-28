import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Star icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { Star } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="star">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="star" aria-label="star" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const Star = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="star" {...props} />;
  }
);

Star.displayName = 'Star';
