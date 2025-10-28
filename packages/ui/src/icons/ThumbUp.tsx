import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ThumbUp icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { ThumbUp } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="thumb-up">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="thumb-up" aria-label="thumb up" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const ThumbUp = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="thumb-up" {...props} />;
  }
);

ThumbUp.displayName = 'ThumbUp';
