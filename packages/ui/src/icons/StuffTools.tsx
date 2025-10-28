import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * StuffTools icon from misc category
 *
 * @example
 * ```tsx
 * import { StuffTools } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="stuff-tools">
  Action
</Button>

// Standalone meaningful icon
<Icon name="stuff-tools" aria-label="stuff tools" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const StuffTools = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="stuff-tools" {...props} />;
  }
);

StuffTools.displayName = 'StuffTools';
