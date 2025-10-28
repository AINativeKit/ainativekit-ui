import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * AutoPairApps icon from settings category
 *
 * @example
 * ```tsx
 * import { AutoPairApps } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="auto-pair-apps">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="auto-pair-apps">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const AutoPairApps = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="auto-pair-apps" {...props} />;
  }
);

AutoPairApps.displayName = 'AutoPairApps';
