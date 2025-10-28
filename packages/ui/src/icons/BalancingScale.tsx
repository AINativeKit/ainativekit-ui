import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * BalancingScale icon from misc category
 *
 * @example
 * ```tsx
 * import { BalancingScale } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="balancing-scale">
  Action
</Button>

// Standalone meaningful icon
<Icon name="balancing-scale" aria-label="balancing scale" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const BalancingScale = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="balancing-scale" {...props} />;
  }
);

BalancingScale.displayName = 'BalancingScale';
