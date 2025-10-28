import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * MapsDirections icon from misc category
 *
 * @example
 * ```tsx
 * import { MapsDirections } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="maps-directions">
  Action
</Button>

// Standalone meaningful icon
<Icon name="maps-directions" aria-label="maps directions" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const MapsDirections = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="maps-directions" {...props} />;
  }
);

MapsDirections.displayName = 'MapsDirections';
