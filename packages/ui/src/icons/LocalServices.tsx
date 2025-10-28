import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * LocalServices icon from misc category
 *
 * @example
 * ```tsx
 * import { LocalServices } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="local-services">
  Action
</Button>

// Standalone meaningful icon
<Icon name="local-services" aria-label="local services" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const LocalServices = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="local-services" {...props} />;
  }
);

LocalServices.displayName = 'LocalServices';
