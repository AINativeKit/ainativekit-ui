import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * CheckboxUnchecked icon from settings category
 *
 * @example
 * ```tsx
 * import { CheckboxUnchecked } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="checkbox-unchecked">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="checkbox-unchecked">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const CheckboxUnchecked = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="checkbox-unchecked" {...props} />;
  }
);

CheckboxUnchecked.displayName = 'CheckboxUnchecked';
