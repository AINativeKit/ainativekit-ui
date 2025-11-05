import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Compass icon from misc category
 *
 * @example
 * ```tsx
 * import { Compass } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="compass">
  Action
</Button>

// Standalone meaningful icon
<Icon name="compass" aria-label="compass" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Compass = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="compass" {...props} />;
});

Compass.displayName = 'Compass';
