import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Plane icon from misc category
 *
 * @example
 * ```tsx
 * import { Plane } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="plane">
  Action
</Button>

// Standalone meaningful icon
<Icon name="plane" aria-label="plane" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Plane = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="plane" {...props} />;
  }
);

Plane.displayName = 'Plane';
