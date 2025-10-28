import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * MicFilledOff icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { MicFilledOff } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="mic-filled-off">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="mic-filled-off" aria-label="mic filled off" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const MicFilledOff = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="mic-filled-off" {...props} />;
  }
);

MicFilledOff.displayName = 'MicFilledOff';
