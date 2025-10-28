import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * PinFilled icon from misc category
 *
 * @example
 * ```tsx
 * import { PinFilled } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="pin-filled">
  Action
</Button>

// Standalone meaningful icon
<Icon name="pin-filled" aria-label="pin filled" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const PinFilled = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="pin-filled" {...props} />;
  }
);

PinFilled.displayName = 'PinFilled';
