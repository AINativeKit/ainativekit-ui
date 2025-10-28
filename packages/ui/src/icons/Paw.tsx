import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Paw icon from misc category
 *
 * @example
 * ```tsx
 * import { Paw } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="paw">
  Action
</Button>

// Standalone meaningful icon
<Icon name="paw" aria-label="paw" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Paw = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="paw" {...props} />;
  }
);

Paw.displayName = 'Paw';
