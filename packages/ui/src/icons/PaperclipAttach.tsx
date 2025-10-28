import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * PaperclipAttach icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { PaperclipAttach } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="paperclip-attach">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="paperclip-attach" aria-label="paperclip attach" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const PaperclipAttach = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="paperclip-attach" {...props} />;
  }
);

PaperclipAttach.displayName = 'PaperclipAttach';
