import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Go icon from account-user category
 *
 * @example
 * ```tsx
 * import { Go } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="go">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="go" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const Go = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="go" {...props} />;
});

Go.displayName = 'Go';
