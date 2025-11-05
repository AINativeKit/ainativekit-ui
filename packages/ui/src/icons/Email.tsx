import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Email icon from misc category
 *
 * @example
 * ```tsx
 * import { Email } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="email">
  Action
</Button>

// Standalone meaningful icon
<Icon name="email" aria-label="email" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Email = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="email" {...props} />;
});

Email.displayName = 'Email';
