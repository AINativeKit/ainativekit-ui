import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Pin icon from misc category
 *
 * @example
 * ```tsx
 * import { Pin } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="pin">
  Action
</Button>

// Standalone meaningful icon
<Icon name="pin" aria-label="pin" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Pin = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="pin" {...props} />;
});

Pin.displayName = 'Pin';
