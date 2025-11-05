import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Whisk icon from misc category
 *
 * @example
 * ```tsx
 * import { Whisk } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="whisk">
  Action
</Button>

// Standalone meaningful icon
<Icon name="whisk" aria-label="whisk" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Whisk = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="whisk" {...props} />;
});

Whisk.displayName = 'Whisk';
