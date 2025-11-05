import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Book icon from misc category
 *
 * @example
 * ```tsx
 * import { Book } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="book">
  Action
</Button>

// Standalone meaningful icon
<Icon name="book" aria-label="book" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Book = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="book" {...props} />;
});

Book.displayName = 'Book';
