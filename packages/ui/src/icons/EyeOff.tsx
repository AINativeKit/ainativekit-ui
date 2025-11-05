import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * EyeOff icon from settings category
 *
 * @example
 * ```tsx
 * import { EyeOff } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="eye-off">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="eye-off">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const EyeOff = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="eye-off" {...props} />;
});

EyeOff.displayName = 'EyeOff';
