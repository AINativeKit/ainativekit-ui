import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Brain icon from misc category
 *
 * @example
 * ```tsx
 * import { Brain } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="brain">
  Action
</Button>

// Standalone meaningful icon
<Icon name="brain" aria-label="brain" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Brain = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="brain" {...props} />;
  }
);

Brain.displayName = 'Brain';
