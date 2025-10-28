import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ChatTripleDots icon from misc category
 *
 * @example
 * ```tsx
 * import { ChatTripleDots } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="chat-triple-dots">
  Action
</Button>

// Standalone meaningful icon
<Icon name="chat-triple-dots" aria-label="chat triple dots" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const ChatTripleDots = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="chat-triple-dots" {...props} />;
  }
);

ChatTripleDots.displayName = 'ChatTripleDots';
