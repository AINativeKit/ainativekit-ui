import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ConnectApps icon from settings category
 *
 * @example
 * ```tsx
 * import { ConnectApps } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="connect-apps">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="connect-apps">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const ConnectApps = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="connect-apps" {...props} />;
  }
);

ConnectApps.displayName = 'ConnectApps';
