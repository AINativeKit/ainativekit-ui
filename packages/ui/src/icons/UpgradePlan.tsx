import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * UpgradePlan icon from account-user category
 *
 * @example
 * ```tsx
 * import { UpgradePlan } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="upgrade-plan">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="upgrade-plan" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const UpgradePlan = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="upgrade-plan" {...props} />;
  }
);

UpgradePlan.displayName = 'UpgradePlan';
