import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * FistBump icon from account-user category
 *
 * @example
 * ```tsx
 * import { FistBump } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="fist-bump">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="fist-bump" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const FistBump = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="fist-bump" {...props} />;
  }
);

FistBump.displayName = 'FistBump';
