import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Invoice icon from misc category
 *
 * @example
 * ```tsx
 * import { Invoice } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="invoice">
  Action
</Button>

// Standalone meaningful icon
<Icon name="invoice" aria-label="invoice" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Invoice = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="invoice" {...props} />;
  }
);

Invoice.displayName = 'Invoice';
