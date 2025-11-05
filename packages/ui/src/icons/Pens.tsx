import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Pens icon from misc category
 *
 * @example
 * ```tsx
 * import { Pens } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="pens">
  Action
</Button>

// Standalone meaningful icon
<Icon name="pens" aria-label="pens" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Pens = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="pens" {...props} />;
});

Pens.displayName = 'Pens';
