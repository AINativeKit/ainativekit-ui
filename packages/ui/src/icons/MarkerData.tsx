import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * MarkerData icon from misc category
 *
 * @example
 * ```tsx
 * import { MarkerData } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="marker-data">
  Action
</Button>

// Standalone meaningful icon
<Icon name="marker-data" aria-label="marker data" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const MarkerData = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="marker-data" {...props} />;
  }
);

MarkerData.displayName = 'MarkerData';
