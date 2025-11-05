import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * UserAdd icon from account-user category
 *
 * @example
 * ```tsx
 * import { UserAdd } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="user-add">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="user-add" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const UserAdd = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="user-add" {...props} />;
});

UserAdd.displayName = 'UserAdd';
