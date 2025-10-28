import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * PhoneWaves icon from misc category
 *
 * @example
 * ```tsx
 * import { PhoneWaves } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="phone-waves">
  Action
</Button>

// Standalone meaningful icon
<Icon name="phone-waves" aria-label="phone waves" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const PhoneWaves = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="phone-waves" {...props} />;
  }
);

PhoneWaves.displayName = 'PhoneWaves';
