import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Flag icon from misc category
 *
 * @example
 * ```tsx
 * import { Flag } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="flag">
  Action
</Button>

// Standalone meaningful icon
<Icon name="flag" aria-label="flag" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Flag = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="flag" {...props} />;
  }
);

Flag.displayName = 'Flag';
