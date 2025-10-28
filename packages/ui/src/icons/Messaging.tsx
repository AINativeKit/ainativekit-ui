import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Messaging icon from misc category
 *
 * @example
 * ```tsx
 * import { Messaging } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="messaging">
  Action
</Button>

// Standalone meaningful icon
<Icon name="messaging" aria-label="messaging" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Messaging = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="messaging" {...props} />;
  }
);

Messaging.displayName = 'Messaging';
