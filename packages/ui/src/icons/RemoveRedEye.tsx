import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * RemoveRedEye icon from settings category
 *
 * @example
 * ```tsx
 * import { RemoveRedEye } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="remove-red-eye">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="remove-red-eye">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const RemoveRedEye = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="remove-red-eye" {...props} />;
  }
);

RemoveRedEye.displayName = 'RemoveRedEye';
