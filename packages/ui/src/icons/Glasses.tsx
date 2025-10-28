import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Glasses icon from misc category
 *
 * @example
 * ```tsx
 * import { Glasses } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="glasses">
  Action
</Button>

// Standalone meaningful icon
<Icon name="glasses" aria-label="glasses" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Glasses = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="glasses" {...props} />;
  }
);

Glasses.displayName = 'Glasses';
