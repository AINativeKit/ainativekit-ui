import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * AvatarProfile icon from account-user category
 *
 * @example
 * ```tsx
 * import { AvatarProfile } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="avatar-profile">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="avatar-profile" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const AvatarProfile = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="avatar-profile" {...props} />;
  }
);

AvatarProfile.displayName = 'AvatarProfile';
