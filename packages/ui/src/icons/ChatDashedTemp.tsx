import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ChatDashedTemp icon from misc category
 *
 * @example
 * ```tsx
 * import { ChatDashedTemp } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="chat-dashed-temp">
  Action
</Button>

// Standalone meaningful icon
<Icon name="chat-dashed-temp" aria-label="chat dashed temp" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const ChatDashedTemp = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="chat-dashed-temp" {...props} />;
  }
);

ChatDashedTemp.displayName = 'ChatDashedTemp';
