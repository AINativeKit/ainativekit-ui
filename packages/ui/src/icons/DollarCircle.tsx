import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * DollarCircle icon from misc category
 *
 * @example
 * ```tsx
 * import { DollarCircle } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="dollar-circle">
  Action
</Button>

// Standalone meaningful icon
<Icon name="dollar-circle" aria-label="dollar circle" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const DollarCircle = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="dollar-circle" {...props} />;
  }
);

DollarCircle.displayName = 'DollarCircle';
