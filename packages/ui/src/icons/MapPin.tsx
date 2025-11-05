import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * MapPin icon from platform category
 *
 * @example
 * ```tsx
 * import { MapPin } from '@ainativekit/ui/icons';
 *
 * // Platform identifier (decorative)
<div className="platform-badge">
  <Icon name="map-pin" size="sm" />
  <span>Platform</span>
</div>
 * ```
 *
 * @accessibility
 * Platform icons are typically decorative, paired with visible text identifying the platform.
 */
export const MapPin = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="map-pin" {...props} />;
});

MapPin.displayName = 'MapPin';
