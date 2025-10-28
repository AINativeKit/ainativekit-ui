import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * MarkerCode icon from misc category
 *
 * @example
 * ```tsx
 * import { MarkerCode } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="marker-code">
  Action
</Button>

// Standalone meaningful icon
<Icon name="marker-code" aria-label="marker code" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const MarkerCode = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="marker-code" {...props} />;
  }
);

MarkerCode.displayName = 'MarkerCode';
