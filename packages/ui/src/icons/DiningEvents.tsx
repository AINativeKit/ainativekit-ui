import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * DiningEvents icon from misc category
 *
 * @example
 * ```tsx
 * import { DiningEvents } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="dining-events">
  Action
</Button>

// Standalone meaningful icon
<Icon name="dining-events" aria-label="dining events" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const DiningEvents = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="dining-events" {...props} />;
  }
);

DiningEvents.displayName = 'DiningEvents';
