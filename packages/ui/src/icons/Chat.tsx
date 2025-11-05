import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Chat icon from misc category
 *
 * @example
 * ```tsx
 * import { Chat } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="chat">
  Action
</Button>

// Standalone meaningful icon
<Icon name="chat" aria-label="chat" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Chat = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="chat" {...props} />;
});

Chat.displayName = 'Chat';
