import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * PhoneMissed icon from misc category
 *
 * @example
 * ```tsx
 * import { PhoneMissed } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="phone-missed">
  Action
</Button>

// Standalone meaningful icon
<Icon name="phone-missed" aria-label="phone missed" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const PhoneMissed = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="phone-missed" {...props} />;
  }
);

PhoneMissed.displayName = 'PhoneMissed';
