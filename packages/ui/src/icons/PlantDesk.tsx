import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * PlantDesk icon from account-user category
 *
 * @example
 * ```tsx
 * import { PlantDesk } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="plant-desk">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="plant-desk" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const PlantDesk = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="plant-desk" {...props} />;
  }
);

PlantDesk.displayName = 'PlantDesk';
