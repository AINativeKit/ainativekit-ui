import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * BackgroundConversation icon from settings category
 *
 * @example
 * ```tsx
 * import { BackgroundConversation } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="background-conversation">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="background-conversation">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const BackgroundConversation = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="background-conversation" {...props} />;
  }
);

BackgroundConversation.displayName = 'BackgroundConversation';
