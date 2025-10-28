import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * BookClock icon from misc category
 *
 * @example
 * ```tsx
 * import { BookClock } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="book-clock">
  Action
</Button>

// Standalone meaningful icon
<Icon name="book-clock" aria-label="book clock" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const BookClock = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="book-clock" {...props} />;
  }
);

BookClock.displayName = 'BookClock';
