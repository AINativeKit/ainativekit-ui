import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * MarkerMultiple icon from misc category
 *
 * @example
 * ```tsx
 * import { MarkerMultiple } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="marker-multiple">
  Action
</Button>

// Standalone meaningful icon
<Icon name="marker-multiple" aria-label="marker multiple" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const MarkerMultiple = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="marker-multiple" {...props} />;
  }
);

MarkerMultiple.displayName = 'MarkerMultiple';
