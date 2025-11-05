import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Health icon from misc category
 *
 * @example
 * ```tsx
 * import { Health } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="health">
  Action
</Button>

// Standalone meaningful icon
<Icon name="health" aria-label="health" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Health = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="health" {...props} />;
});

Health.displayName = 'Health';
