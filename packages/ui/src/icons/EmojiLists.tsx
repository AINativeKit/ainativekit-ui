import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * EmojiLists icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { EmojiLists } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="emoji-lists">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="emoji-lists" aria-label="emoji lists" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const EmojiLists = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="emoji-lists" {...props} />;
  }
);

EmojiLists.displayName = 'EmojiLists';
