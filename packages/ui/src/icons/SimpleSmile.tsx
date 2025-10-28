import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * SimpleSmile icon from account-user category
 *
 * @example
 * ```tsx
 * import { SimpleSmile } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="simple-smile">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="simple-smile" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const SimpleSmile = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="simple-smile" {...props} />;
  }
);

SimpleSmile.displayName = 'SimpleSmile';
