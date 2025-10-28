import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * SimpleRelax icon from account-user category
 *
 * @example
 * ```tsx
 * import { SimpleRelax } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="simple-relax">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="simple-relax" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const SimpleRelax = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="simple-relax" {...props} />;
  }
);

SimpleRelax.displayName = 'SimpleRelax';
