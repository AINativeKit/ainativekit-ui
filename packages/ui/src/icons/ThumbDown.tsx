import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ThumbDown icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { ThumbDown } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="thumb-down">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="thumb-down" aria-label="thumb down" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const ThumbDown = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="thumb-down" {...props} />;
  }
);

ThumbDown.displayName = 'ThumbDown';
