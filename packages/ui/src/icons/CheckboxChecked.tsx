import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * CheckboxChecked icon from settings category
 *
 * @example
 * ```tsx
 * import { CheckboxChecked } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="checkbox-checked">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="checkbox-checked">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const CheckboxChecked = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="checkbox-checked" {...props} />;
  }
);

CheckboxChecked.displayName = 'CheckboxChecked';
