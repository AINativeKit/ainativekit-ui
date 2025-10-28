import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Maps icon from misc category
 *
 * @example
 * ```tsx
 * import { Maps } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="maps">
  Action
</Button>

// Standalone meaningful icon
<Icon name="maps" aria-label="maps" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Maps = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="maps" {...props} />;
  }
);

Maps.displayName = 'Maps';
