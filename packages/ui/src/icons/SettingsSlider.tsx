import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * SettingsSlider icon from settings category
 *
 * @example
 * ```tsx
 * import { SettingsSlider } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="settings-slider">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="settings-slider">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const SettingsSlider = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="settings-slider" {...props} />;
  }
);

SettingsSlider.displayName = 'SettingsSlider';
