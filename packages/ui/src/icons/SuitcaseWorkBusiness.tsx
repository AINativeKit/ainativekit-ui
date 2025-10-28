import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * SuitcaseWorkBusiness icon from account-user category
 *
 * @example
 * ```tsx
 * import { SuitcaseWorkBusiness } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="suitcase-work-business">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="suitcase-work-business" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const SuitcaseWorkBusiness = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="suitcase-work-business" {...props} />;
  }
);

SuitcaseWorkBusiness.displayName = 'SuitcaseWorkBusiness';
