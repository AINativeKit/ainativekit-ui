import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * SettingsCog icon from settings category
 *
 * @example
 * ```tsx
 * import { SettingsCog } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="settings-cog">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="settings-cog">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const SettingsCog = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="settings-cog" {...props} />;
  }
);

SettingsCog.displayName = 'SettingsCog';
