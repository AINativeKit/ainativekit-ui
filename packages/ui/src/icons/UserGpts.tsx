import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * UserGpts icon from account-user category
 *
 * @example
 * ```tsx
 * import { UserGpts } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="user-gpts">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="user-gpts" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const UserGpts = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="user-gpts" {...props} />;
});

UserGpts.displayName = 'UserGpts';
