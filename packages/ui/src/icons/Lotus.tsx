import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Lotus icon from misc category
 *
 * @example
 * ```tsx
 * import { Lotus } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="lotus">
  Action
</Button>

// Standalone meaningful icon
<Icon name="lotus" aria-label="lotus" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Lotus = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="lotus" {...props} />;
});

Lotus.displayName = 'Lotus';
