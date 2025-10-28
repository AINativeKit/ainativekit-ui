import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * NotificationBell icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { NotificationBell } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="notification-bell">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="notification-bell" aria-label="notification bell" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const NotificationBell = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="notification-bell" {...props} />;
  }
);

NotificationBell.displayName = 'NotificationBell';
