import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * AddMember icon from account-user category
 *
 * @example
 * ```tsx
 * import { AddMember } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="add-member">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="add-member" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const AddMember = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="add-member" {...props} />;
  }
);

AddMember.displayName = 'AddMember';
