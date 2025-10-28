import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * MicOff icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { MicOff } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="mic-off">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="mic-off" aria-label="mic off" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const MicOff = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="mic-off" {...props} />;
  }
);

MicOff.displayName = 'MicOff';
