import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ChatDashedCheckedTemp icon from misc category
 *
 * @example
 * ```tsx
 * import { ChatDashedCheckedTemp } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="chat-dashed-checked-temp">
  Action
</Button>

// Standalone meaningful icon
<Icon name="chat-dashed-checked-temp" aria-label="chat dashed checked temp" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const ChatDashedCheckedTemp = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="chat-dashed-checked-temp" {...props} />;
  }
);

ChatDashedCheckedTemp.displayName = 'ChatDashedCheckedTemp';
