import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * NotificationOffBell icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { NotificationOffBell } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="notification-off-bell">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="notification-off-bell" aria-label="notification off bell" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const NotificationOffBell = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="notification-off-bell" {...props} />;
  }
);

NotificationOffBell.displayName = 'NotificationOffBell';
