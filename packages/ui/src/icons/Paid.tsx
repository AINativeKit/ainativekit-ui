import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Paid icon from misc category
 *
 * @example
 * ```tsx
 * import { Paid } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="paid">
  Action
</Button>

// Standalone meaningful icon
<Icon name="paid" aria-label="paid" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Paid = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="paid" {...props} />;
});

Paid.displayName = 'Paid';
