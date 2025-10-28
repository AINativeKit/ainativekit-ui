import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * EmojiSections icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { EmojiSections } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="emoji-sections">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="emoji-sections" aria-label="emoji sections" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const EmojiSections = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="emoji-sections" {...props} />;
  }
);

EmojiSections.displayName = 'EmojiSections';
