import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * MicFilled icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { MicFilled } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="mic-filled">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="mic-filled" aria-label="mic filled" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const MicFilled = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="mic-filled" {...props} />;
  }
);

MicFilled.displayName = 'MicFilled';
