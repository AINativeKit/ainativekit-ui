import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Operator icon from misc category
 *
 * @example
 * ```tsx
 * import { Operator } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="operator">
  Action
</Button>

// Standalone meaningful icon
<Icon name="operator" aria-label="operator" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Operator = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="operator" {...props} />;
});

Operator.displayName = 'Operator';
