import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ClipboardCopy icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { ClipboardCopy } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="clipboard-copy">
  Copy
</Button>

// Toolbar icon button
<Button iconOnly="clipboard-copy" aria-label="clipboard copy" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const ClipboardCopy = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="clipboard-copy" {...props} />;
  }
);

ClipboardCopy.displayName = 'ClipboardCopy';
