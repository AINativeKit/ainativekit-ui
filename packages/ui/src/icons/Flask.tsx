import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Flask icon from misc category
 *
 * @example
 * ```tsx
 * import { Flask } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="flask">
  Action
</Button>

// Standalone meaningful icon
<Icon name="flask" aria-label="flask" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Flask = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="flask" {...props} />;
});

Flask.displayName = 'Flask';
