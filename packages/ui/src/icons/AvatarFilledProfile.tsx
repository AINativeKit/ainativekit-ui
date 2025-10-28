import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * AvatarFilledProfile icon from account-user category
 *
 * @example
 * ```tsx
 * import { AvatarFilledProfile } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="avatar-filled-profile">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="avatar-filled-profile" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const AvatarFilledProfile = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="avatar-filled-profile" {...props} />;
  }
);

AvatarFilledProfile.displayName = 'AvatarFilledProfile';
