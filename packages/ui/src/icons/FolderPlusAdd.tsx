import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * FolderPlusAdd icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { FolderPlusAdd } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="folder-plus-add">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="folder-plus-add" aria-label="folder plus add" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const FolderPlusAdd = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="folder-plus-add" {...props} />;
  }
);

FolderPlusAdd.displayName = 'FolderPlusAdd';
