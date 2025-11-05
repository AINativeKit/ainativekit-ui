import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Followup icon from misc category
 *
 * @example
 * ```tsx
 * import { Followup } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="followup">
  Action
</Button>

// Standalone meaningful icon
<Icon name="followup" aria-label="followup" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Followup = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="followup" {...props} />;
});

Followup.displayName = 'Followup';
