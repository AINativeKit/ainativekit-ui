import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Writing icon from misc category
 *
 * @example
 * ```tsx
 * import { Writing } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="writing">
  Action
</Button>

// Standalone meaningful icon
<Icon name="writing" aria-label="writing" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Writing = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="writing" {...props} />;
});

Writing.displayName = 'Writing';
