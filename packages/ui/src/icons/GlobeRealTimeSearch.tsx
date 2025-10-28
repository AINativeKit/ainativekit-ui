import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * GlobeRealTimeSearch icon from misc category
 *
 * @example
 * ```tsx
 * import { GlobeRealTimeSearch } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="globe-real-time-search">
  Action
</Button>

// Standalone meaningful icon
<Icon name="globe-real-time-search" aria-label="globe real time search" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const GlobeRealTimeSearch = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="globe-real-time-search" {...props} />;
  }
);

GlobeRealTimeSearch.displayName = 'GlobeRealTimeSearch';
