import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Bug icon from settings category
 *
 * @example
 * ```tsx
 * import { Bug } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="bug">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="bug">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const Bug = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="bug" {...props} />;
});

Bug.displayName = 'Bug';
