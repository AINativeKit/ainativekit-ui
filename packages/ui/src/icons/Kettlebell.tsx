import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Kettlebell icon from misc category
 *
 * @example
 * ```tsx
 * import { Kettlebell } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="kettlebell">
  Action
</Button>

// Standalone meaningful icon
<Icon name="kettlebell" aria-label="kettlebell" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Kettlebell = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="kettlebell" {...props} />;
  }
);

Kettlebell.displayName = 'Kettlebell';
