import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * CreditCard icon from misc category
 *
 * @example
 * ```tsx
 * import { CreditCard } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="credit-card">
  Action
</Button>

// Standalone meaningful icon
<Icon name="credit-card" aria-label="credit card" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const CreditCard = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="credit-card" {...props} />;
  }
);

CreditCard.displayName = 'CreditCard';
