import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * HandWavingBye icon from account-user category
 *
 * @example
 * ```tsx
 * import { HandWavingBye } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="hand-waving-bye">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="hand-waving-bye" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const HandWavingBye = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="hand-waving-bye" {...props} />;
  }
);

HandWavingBye.displayName = 'HandWavingBye';
