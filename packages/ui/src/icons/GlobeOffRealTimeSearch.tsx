import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * GlobeOffRealTimeSearch icon from misc category
 *
 * @example
 * ```tsx
 * import { GlobeOffRealTimeSearch } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="globe-off-real-time-search">
  Action
</Button>

// Standalone meaningful icon
<Icon name="globe-off-real-time-search" aria-label="globe off real time search" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const GlobeOffRealTimeSearch = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="globe-off-real-time-search" {...props} />;
  }
);

GlobeOffRealTimeSearch.displayName = 'GlobeOffRealTimeSearch';
