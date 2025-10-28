import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * MapsAddress icon from misc category
 *
 * @example
 * ```tsx
 * import { MapsAddress } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="maps-address">
  Action
</Button>

// Standalone meaningful icon
<Icon name="maps-address" aria-label="maps address" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const MapsAddress = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="maps-address" {...props} />;
  }
);

MapsAddress.displayName = 'MapsAddress';
