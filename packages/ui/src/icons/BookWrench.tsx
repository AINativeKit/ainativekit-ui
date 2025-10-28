import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * BookWrench icon from misc category
 *
 * @example
 * ```tsx
 * import { BookWrench } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="book-wrench">
  Action
</Button>

// Standalone meaningful icon
<Icon name="book-wrench" aria-label="book wrench" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const BookWrench = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="book-wrench" {...props} />;
  }
);

BookWrench.displayName = 'BookWrench';
