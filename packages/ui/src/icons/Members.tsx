import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Members icon from account-user category
 *
 * @example
 * ```tsx
 * import { Members } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="members">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="members" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const Members = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="members" {...props} />;
});

Members.displayName = 'Members';
