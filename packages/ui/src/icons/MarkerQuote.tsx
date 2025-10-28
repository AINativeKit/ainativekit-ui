import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * MarkerQuote icon from misc category
 *
 * @example
 * ```tsx
 * import { MarkerQuote } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="marker-quote">
  Action
</Button>

// Standalone meaningful icon
<Icon name="marker-quote" aria-label="marker quote" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const MarkerQuote = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="marker-quote" {...props} />;
  }
);

MarkerQuote.displayName = 'MarkerQuote';
