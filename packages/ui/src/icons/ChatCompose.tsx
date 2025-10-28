import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ChatCompose icon from misc category
 *
 * @example
 * ```tsx
 * import { ChatCompose } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="chat-compose">
  Action
</Button>

// Standalone meaningful icon
<Icon name="chat-compose" aria-label="chat compose" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const ChatCompose = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="chat-compose" {...props} />;
  }
);

ChatCompose.displayName = 'ChatCompose';
