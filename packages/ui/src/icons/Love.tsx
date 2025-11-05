import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Love icon from misc category
 *
 * @example
 * ```tsx
 * import { Love } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="love">
  Action
</Button>

// Standalone meaningful icon
<Icon name="love" aria-label="love" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Love = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="love" {...props} />;
});

Love.displayName = 'Love';
