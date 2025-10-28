import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * HandRaisedHey icon from account-user category
 *
 * @example
 * ```tsx
 * import { HandRaisedHey } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="hand-raised-hey">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="hand-raised-hey" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const HandRaisedHey = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="hand-raised-hey" {...props} />;
  }
);

HandRaisedHey.displayName = 'HandRaisedHey';
