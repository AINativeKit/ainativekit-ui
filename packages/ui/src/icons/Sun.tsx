import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Sun icon from settings category
 *
 * @example
 * ```tsx
 * import { Sun } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="sun">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="sun">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const Sun = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="sun" {...props} />;
});

Sun.displayName = 'Sun';
