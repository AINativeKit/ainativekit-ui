import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * FolderDocumentsFinder icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { FolderDocumentsFinder } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="folder-documents-finder">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="folder-documents-finder" aria-label="folder documents finder" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const FolderDocumentsFinder = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="folder-documents-finder" {...props} />;
  }
);

FolderDocumentsFinder.displayName = 'FolderDocumentsFinder';
