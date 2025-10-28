import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ThumbDownFilled icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { ThumbDownFilled } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="thumb-down-filled">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="thumb-down-filled" aria-label="thumb down filled" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const ThumbDownFilled = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="thumb-down-filled" {...props} />;
  }
);

ThumbDownFilled.displayName = 'ThumbDownFilled';
