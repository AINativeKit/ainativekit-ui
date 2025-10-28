import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Group icon from account-user category
 *
 * @example
 * ```tsx
 * import { Group } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="group">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="group" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const Group = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="group" {...props} />;
  }
);

Group.displayName = 'Group';
