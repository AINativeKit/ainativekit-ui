import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Phone icon from misc category
 *
 * @example
 * ```tsx
 * import { Phone } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="phone">
  Action
</Button>

// Standalone meaningful icon
<Icon name="phone" aria-label="phone" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Phone = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="phone" {...props} />;
});

Phone.displayName = 'Phone';
