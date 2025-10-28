import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * StarFilled icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { StarFilled } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="star-filled">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="star-filled" aria-label="star filled" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const StarFilled = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="star-filled" {...props} />;
  }
);

StarFilled.displayName = 'StarFilled';
