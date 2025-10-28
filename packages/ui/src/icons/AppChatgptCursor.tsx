import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * AppChatgptCursor icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { AppChatgptCursor } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="app-chatgpt-cursor">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="app-chatgpt-cursor" aria-label="app chatgpt cursor" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const AppChatgptCursor = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="app-chatgpt-cursor" {...props} />;
  }
);

AppChatgptCursor.displayName = 'AppChatgptCursor';
