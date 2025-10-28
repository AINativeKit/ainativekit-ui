import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * AppPermission icon from settings category
 *
 * @example
 * ```tsx
 * import { AppPermission } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="app-permission">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="app-permission">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const AppPermission = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="app-permission" {...props} />;
  }
);

AppPermission.displayName = 'AppPermission';
