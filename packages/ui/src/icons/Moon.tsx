import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Moon icon from settings category
 *
 * @example
 * ```tsx
 * import { Moon } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="moon">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="moon">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const Moon = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="moon" {...props} />;
});

Moon.displayName = 'Moon';
