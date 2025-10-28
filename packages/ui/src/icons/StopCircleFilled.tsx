import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * StopCircleFilled icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { StopCircleFilled } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="stop-circle-filled">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="stop-circle-filled" aria-label="stop circle filled" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const StopCircleFilled = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="stop-circle-filled" {...props} />;
  }
);

StopCircleFilled.displayName = 'StopCircleFilled';
