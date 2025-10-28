import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * HandPeace icon from account-user category
 *
 * @example
 * ```tsx
 * import { HandPeace } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="hand-peace">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="hand-peace" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const HandPeace = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="hand-peace" {...props} />;
  }
);

HandPeace.displayName = 'HandPeace';
