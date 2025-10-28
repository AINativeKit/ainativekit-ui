import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Unarchive icon from misc category
 *
 * @example
 * ```tsx
 * import { Unarchive } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="unarchive">
  Action
</Button>

// Standalone meaningful icon
<Icon name="unarchive" aria-label="unarchive" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Unarchive = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="unarchive" {...props} />;
  }
);

Unarchive.displayName = 'Unarchive';
