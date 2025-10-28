import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * FolderOpen icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { FolderOpen } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="folder-open">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="folder-open" aria-label="folder open" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const FolderOpen = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="folder-open" {...props} />;
  }
);

FolderOpen.displayName = 'FolderOpen';
