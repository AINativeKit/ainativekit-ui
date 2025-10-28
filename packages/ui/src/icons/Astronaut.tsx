import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Astronaut icon from account-user category
 *
 * @example
 * ```tsx
 * import { Astronaut } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="astronaut">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="astronaut" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const Astronaut = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="astronaut" {...props} />;
  }
);

Astronaut.displayName = 'Astronaut';
