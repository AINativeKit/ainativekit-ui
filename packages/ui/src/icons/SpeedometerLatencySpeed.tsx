import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * SpeedometerLatencySpeed icon from misc category
 *
 * @example
 * ```tsx
 * import { SpeedometerLatencySpeed } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="speedometer-latency-speed">
  Action
</Button>

// Standalone meaningful icon
<Icon name="speedometer-latency-speed" aria-label="speedometer latency speed" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const SpeedometerLatencySpeed = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="speedometer-latency-speed" {...props} />;
  }
);

SpeedometerLatencySpeed.displayName = 'SpeedometerLatencySpeed';
