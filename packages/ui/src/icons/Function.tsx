import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Function icon from misc category
 *
 * @example
 * ```tsx
 * import { Function } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="function">
  Action
</Button>

// Standalone meaningful icon
<Icon name="function" aria-label="function" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Function = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="function" {...props} />;
});

Function.displayName = 'Function';
