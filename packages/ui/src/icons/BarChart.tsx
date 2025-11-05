import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * BarChart icon from misc category
 *
 * @example
 * ```tsx
 * import { BarChart } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="bar-chart">
  Action
</Button>

// Standalone meaningful icon
<Icon name="bar-chart" aria-label="bar chart" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const BarChart = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="bar-chart" {...props} />;
});

BarChart.displayName = 'BarChart';
