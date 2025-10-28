import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * BookBookmark icon from misc category
 *
 * @example
 * ```tsx
 * import { BookBookmark } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="book-bookmark">
  Action
</Button>

// Standalone meaningful icon
<Icon name="book-bookmark" aria-label="book bookmark" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const BookBookmark = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="book-bookmark" {...props} />;
  }
);

BookBookmark.displayName = 'BookBookmark';
