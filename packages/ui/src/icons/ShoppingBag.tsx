import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ShoppingBag icon from misc category
 *
 * @example
 * ```tsx
 * import { ShoppingBag } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="shopping-bag">
  Action
</Button>

// Standalone meaningful icon
<Icon name="shopping-bag" aria-label="shopping bag" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const ShoppingBag = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="shopping-bag" {...props} />;
  }
);

ShoppingBag.displayName = 'ShoppingBag';
