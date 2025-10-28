import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Unpin icon from misc category
 *
 * @example
 * ```tsx
 * import { Unpin } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="unpin">
  Action
</Button>

// Standalone meaningful icon
<Icon name="unpin" aria-label="unpin" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Unpin = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="unpin" {...props} />;
  }
);

Unpin.displayName = 'Unpin';
