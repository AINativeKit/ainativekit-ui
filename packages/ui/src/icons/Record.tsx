import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Record icon from misc category
 *
 * @example
 * ```tsx
 * import { Record } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="record">
  Action
</Button>

// Standalone meaningful icon
<Icon name="record" aria-label="record" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Record = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="record" {...props} />;
});

Record.displayName = 'Record';
