import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * PauseSm icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { PauseSm } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="pause-sm">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="pause-sm" aria-label="pause sm" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const PauseSm = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="pause-sm" {...props} />;
  }
);

PauseSm.displayName = 'PauseSm';
