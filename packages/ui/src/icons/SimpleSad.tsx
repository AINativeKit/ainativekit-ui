import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * SimpleSad icon from account-user category
 *
 * @example
 * ```tsx
 * import { SimpleSad } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="simple-sad">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="simple-sad" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const SimpleSad = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="simple-sad" {...props} />;
  }
);

SimpleSad.displayName = 'SimpleSad';
