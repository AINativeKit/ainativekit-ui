import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * StopSm icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { StopSm } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="stop-sm">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="stop-sm" aria-label="stop sm" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const StopSm = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="stop-sm" {...props} />;
  }
);

StopSm.displayName = 'StopSm';
