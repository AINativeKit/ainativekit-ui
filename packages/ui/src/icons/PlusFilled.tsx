import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * PlusFilled icon from account-user category
 *
 * @example
 * ```tsx
 * import { PlusFilled } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="plus-filled">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="plus-filled" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const PlusFilled = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="plus-filled" {...props} />;
  }
);

PlusFilled.displayName = 'PlusFilled';
