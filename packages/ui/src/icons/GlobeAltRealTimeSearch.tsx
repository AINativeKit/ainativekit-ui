import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * GlobeAltRealTimeSearch icon from misc category
 *
 * @example
 * ```tsx
 * import { GlobeAltRealTimeSearch } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="globe-alt-real-time-search">
  Action
</Button>

// Standalone meaningful icon
<Icon name="globe-alt-real-time-search" aria-label="globe alt real time search" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const GlobeAltRealTimeSearch = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="globe-alt-real-time-search" {...props} />;
  }
);

GlobeAltRealTimeSearch.displayName = 'GlobeAltRealTimeSearch';
