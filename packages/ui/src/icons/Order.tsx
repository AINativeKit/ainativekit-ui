import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Order icon from misc category
 *
 * @example
 * ```tsx
 * import { Order } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="order">
  Action
</Button>

// Standalone meaningful icon
<Icon name="order" aria-label="order" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Order = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="order" {...props} />;
});

Order.displayName = 'Order';
