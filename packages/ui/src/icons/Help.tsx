import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Help icon from settings category
 *
 * @example
 * ```tsx
 * import { Help } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="help">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="help">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const Help = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="help" {...props} />;
});

Help.displayName = 'Help';
