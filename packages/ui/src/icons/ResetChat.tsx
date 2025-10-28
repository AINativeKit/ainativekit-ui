import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ResetChat icon from settings category
 *
 * @example
 * ```tsx
 * import { ResetChat } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="reset-chat">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="reset-chat">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const ResetChat = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="reset-chat" {...props} />;
  }
);

ResetChat.displayName = 'ResetChat';
