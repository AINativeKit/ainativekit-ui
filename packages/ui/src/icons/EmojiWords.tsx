import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * EmojiWords icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { EmojiWords } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="emoji-words">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="emoji-words" aria-label="emoji words" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const EmojiWords = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="emoji-words" {...props} />;
  }
);

EmojiWords.displayName = 'EmojiWords';
