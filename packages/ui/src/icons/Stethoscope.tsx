import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Stethoscope icon from misc category
 *
 * @example
 * ```tsx
 * import { Stethoscope } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="stethoscope">
  Action
</Button>

// Standalone meaningful icon
<Icon name="stethoscope" aria-label="stethoscope" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Stethoscope = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="stethoscope" {...props} />;
  }
);

Stethoscope.displayName = 'Stethoscope';
