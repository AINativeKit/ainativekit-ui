import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ConnectorsConnectedApps icon from settings category
 *
 * @example
 * ```tsx
 * import { ConnectorsConnectedApps } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="connectors-connected-apps">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="connectors-connected-apps">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const ConnectorsConnectedApps = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="connectors-connected-apps" {...props} />;
  }
);

ConnectorsConnectedApps.displayName = 'ConnectorsConnectedApps';
