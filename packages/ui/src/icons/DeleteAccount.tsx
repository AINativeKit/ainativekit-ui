import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * DeleteAccount icon from account-user category
 *
 * @example
 * ```tsx
 * import { DeleteAccount } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="delete-account">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="delete-account" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const DeleteAccount = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="delete-account" {...props} />;
  }
);

DeleteAccount.displayName = 'DeleteAccount';
