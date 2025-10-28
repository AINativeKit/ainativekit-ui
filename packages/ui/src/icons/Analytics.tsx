import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Analytics icon from misc category
 *
 * @example
 * ```tsx
 * import { Analytics } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="analytics">
  Action
</Button>

// Standalone meaningful icon
<Icon name="analytics" aria-label="analytics" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Analytics = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="analytics" {...props} />;
  }
);

Analytics.displayName = 'Analytics';
