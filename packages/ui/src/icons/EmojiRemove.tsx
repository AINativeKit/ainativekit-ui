import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * EmojiRemove icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { EmojiRemove } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="emoji-remove">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="emoji-remove" aria-label="emoji remove" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const EmojiRemove = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="emoji-remove" {...props} />;
  }
);

EmojiRemove.displayName = 'EmojiRemove';
