import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ThumbMixed icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { ThumbMixed } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="thumb-mixed">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="thumb-mixed" aria-label="thumb mixed" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const ThumbMixed = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="thumb-mixed" {...props} />;
  }
);

ThumbMixed.displayName = 'ThumbMixed';
