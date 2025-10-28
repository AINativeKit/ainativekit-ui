import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * FolderSharedOpen icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { FolderSharedOpen } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="folder-shared-open">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="folder-shared-open" aria-label="folder shared open" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const FolderSharedOpen = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="folder-shared-open" {...props} />;
  }
);

FolderSharedOpen.displayName = 'FolderSharedOpen';
