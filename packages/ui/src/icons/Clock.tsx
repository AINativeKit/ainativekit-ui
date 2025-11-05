import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Clock icon from misc category
 *
 * @example
 * ```tsx
 * import { Clock } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="clock">
  Action
</Button>

// Standalone meaningful icon
<Icon name="clock" aria-label="clock" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Clock = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="clock" {...props} />;
});

Clock.displayName = 'Clock';
