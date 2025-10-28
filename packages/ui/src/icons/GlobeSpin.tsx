import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * GlobeSpin icon from misc category
 *
 * @example
 * ```tsx
 * import { GlobeSpin } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="globe-spin">
  Action
</Button>

// Standalone meaningful icon
<Icon name="globe-spin" aria-label="globe spin" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const GlobeSpin = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="globe-spin" {...props} />;
  }
);

GlobeSpin.displayName = 'GlobeSpin';
