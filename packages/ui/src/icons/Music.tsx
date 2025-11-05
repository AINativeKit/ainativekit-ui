import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Music icon from misc category
 *
 * @example
 * ```tsx
 * import { Music } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="music">
  Action
</Button>

// Standalone meaningful icon
<Icon name="music" aria-label="music" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Music = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="music" {...props} />;
});

Music.displayName = 'Music';
