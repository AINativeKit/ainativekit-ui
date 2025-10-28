import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * GoFilled icon from account-user category
 *
 * @example
 * ```tsx
 * import { GoFilled } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="go-filled">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="go-filled" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const GoFilled = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="go-filled" {...props} />;
  }
);

GoFilled.displayName = 'GoFilled';
