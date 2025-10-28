import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * MyGptProfileMe icon from account-user category
 *
 * @example
 * ```tsx
 * import { MyGptProfileMe } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="my-gpt-profile-me">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="my-gpt-profile-me" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const MyGptProfileMe = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="my-gpt-profile-me" {...props} />;
  }
);

MyGptProfileMe.displayName = 'MyGptProfileMe';
