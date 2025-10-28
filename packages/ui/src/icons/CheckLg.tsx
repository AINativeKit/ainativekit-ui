import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * CheckLg icon from settings category
 *
 * @example
 * ```tsx
 * import { CheckLg } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="check-lg">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="check-lg">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const CheckLg = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="check-lg" {...props} />;
  }
);

CheckLg.displayName = 'CheckLg';
