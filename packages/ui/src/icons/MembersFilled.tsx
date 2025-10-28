import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * MembersFilled icon from account-user category
 *
 * @example
 * ```tsx
 * import { MembersFilled } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="members-filled">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="members-filled" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const MembersFilled = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="members-filled" {...props} />;
  }
);

MembersFilled.displayName = 'MembersFilled';
