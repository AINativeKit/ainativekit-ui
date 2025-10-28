import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * SuitcaseFilledWorkBusiness icon from account-user category
 *
 * @example
 * ```tsx
 * import { SuitcaseFilledWorkBusiness } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="suitcase-filled-work-business">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="suitcase-filled-work-business" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const SuitcaseFilledWorkBusiness = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="suitcase-filled-work-business" {...props} />;
  }
);

SuitcaseFilledWorkBusiness.displayName = 'SuitcaseFilledWorkBusiness';
