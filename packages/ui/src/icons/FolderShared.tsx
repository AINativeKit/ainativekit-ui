import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * FolderShared icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { FolderShared } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="folder-shared">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="folder-shared" aria-label="folder shared" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const FolderShared = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="folder-shared" {...props} />;
  }
);

FolderShared.displayName = 'FolderShared';
