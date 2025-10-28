import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Pulse icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { Pulse } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="pulse">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="pulse" aria-label="pulse" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const Pulse = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="pulse" {...props} />;
  }
);

Pulse.displayName = 'Pulse';
