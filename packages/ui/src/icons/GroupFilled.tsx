import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * GroupFilled icon from account-user category
 *
 * @example
 * ```tsx
 * import { GroupFilled } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="group-filled">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="group-filled" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const GroupFilled = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="group-filled" {...props} />;
  }
);

GroupFilled.displayName = 'GroupFilled';
