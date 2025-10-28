import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Chats icon from misc category
 *
 * @example
 * ```tsx
 * import { Chats } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="chats">
  Action
</Button>

// Standalone meaningful icon
<Icon name="chats" aria-label="chats" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Chats = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="chats" {...props} />;
  }
);

Chats.displayName = 'Chats';
