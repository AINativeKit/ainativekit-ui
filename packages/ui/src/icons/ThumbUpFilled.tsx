import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ThumbUpFilled icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { ThumbUpFilled } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="thumb-up-filled">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="thumb-up-filled" aria-label="thumb up filled" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const ThumbUpFilled = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="thumb-up-filled" {...props} />;
  }
);

ThumbUpFilled.displayName = 'ThumbUpFilled';
