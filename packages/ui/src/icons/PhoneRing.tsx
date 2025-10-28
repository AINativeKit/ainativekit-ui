import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * PhoneRing icon from misc category
 *
 * @example
 * ```tsx
 * import { PhoneRing } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="phone-ring">
  Action
</Button>

// Standalone meaningful icon
<Icon name="phone-ring" aria-label="phone ring" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const PhoneRing = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="phone-ring" {...props} />;
  }
);

PhoneRing.displayName = 'PhoneRing';
