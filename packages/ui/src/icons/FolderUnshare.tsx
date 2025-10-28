import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * FolderUnshare icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { FolderUnshare } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="folder-unshare">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="folder-unshare" aria-label="folder unshare" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const FolderUnshare = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="folder-unshare" {...props} />;
  }
);

FolderUnshare.displayName = 'FolderUnshare';
