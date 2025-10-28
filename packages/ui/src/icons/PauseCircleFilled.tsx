import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * PauseCircleFilled icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { PauseCircleFilled } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="pause-circle-filled">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="pause-circle-filled" aria-label="pause circle filled" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const PauseCircleFilled = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="pause-circle-filled" {...props} />;
  }
);

PauseCircleFilled.displayName = 'PauseCircleFilled';
