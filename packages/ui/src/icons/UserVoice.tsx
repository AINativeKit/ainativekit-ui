import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * UserVoice icon from account-user category
 *
 * @example
 * ```tsx
 * import { UserVoice } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="user-voice">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="user-voice" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const UserVoice = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="user-voice" {...props} />;
  }
);

UserVoice.displayName = 'UserVoice';
