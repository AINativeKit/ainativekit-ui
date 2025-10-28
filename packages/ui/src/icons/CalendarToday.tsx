import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * CalendarToday icon from misc category
 *
 * @example
 * ```tsx
 * import { CalendarToday } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="calendar-today">
  Action
</Button>

// Standalone meaningful icon
<Icon name="calendar-today" aria-label="calendar today" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const CalendarToday = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="calendar-today" {...props} />;
  }
);

CalendarToday.displayName = 'CalendarToday';
