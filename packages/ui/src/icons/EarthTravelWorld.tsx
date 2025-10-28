import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * EarthTravelWorld icon from misc category
 *
 * @example
 * ```tsx
 * import { EarthTravelWorld } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="earth-travel-world">
  Action
</Button>

// Standalone meaningful icon
<Icon name="earth-travel-world" aria-label="earth travel world" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const EarthTravelWorld = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="earth-travel-world" {...props} />;
  }
);

EarthTravelWorld.displayName = 'EarthTravelWorld';
