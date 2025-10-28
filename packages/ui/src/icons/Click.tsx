import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Click icon from settings category
 *
 * @example
 * ```tsx
 * import { Click } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="click">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="click">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const Click = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="click" {...props} />;
  }
);

Click.displayName = 'Click';
