import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * FolderStuffed icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { FolderStuffed } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="folder-stuffed">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="folder-stuffed" aria-label="folder stuffed" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const FolderStuffed = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="folder-stuffed" {...props} />;
  }
);

FolderStuffed.displayName = 'FolderStuffed';
