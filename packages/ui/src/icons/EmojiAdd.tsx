import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * EmojiAdd icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { EmojiAdd } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="emoji-add">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="emoji-add" aria-label="emoji add" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const EmojiAdd = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="emoji-add" {...props} />;
});

EmojiAdd.displayName = 'EmojiAdd';
