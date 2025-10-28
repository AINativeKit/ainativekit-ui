import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ProDiamond icon from account-user category
 *
 * @example
 * ```tsx
 * import { ProDiamond } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="pro-diamond">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="pro-diamond" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const ProDiamond = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="pro-diamond" {...props} />;
  }
);

ProDiamond.displayName = 'ProDiamond';
