import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * CheckboxCheckedFilled icon from settings category
 *
 * @example
 * ```tsx
 * import { CheckboxCheckedFilled } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="checkbox-checked-filled">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="checkbox-checked-filled">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const CheckboxCheckedFilled = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="checkbox-checked-filled" {...props} />;
  }
);

CheckboxCheckedFilled.displayName = 'CheckboxCheckedFilled';
