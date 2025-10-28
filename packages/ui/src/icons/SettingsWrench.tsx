import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * SettingsWrench icon from settings category
 *
 * @example
 * ```tsx
 * import { SettingsWrench } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="settings-wrench">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="settings-wrench">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const SettingsWrench = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="settings-wrench" {...props} />;
  }
);

SettingsWrench.displayName = 'SettingsWrench';
