import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * MoonSunSystem icon from settings category
 *
 * @example
 * ```tsx
 * import { MoonSunSystem } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="moon-sun-system">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="moon-sun-system">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const MoonSunSystem = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="moon-sun-system" {...props} />;
  }
);

MoonSunSystem.displayName = 'MoonSunSystem';
