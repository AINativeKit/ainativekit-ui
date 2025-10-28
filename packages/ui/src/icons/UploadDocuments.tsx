import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * UploadDocuments icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { UploadDocuments } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="upload-documents">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="upload-documents" aria-label="upload documents" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const UploadDocuments = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="upload-documents" {...props} />;
  }
);

UploadDocuments.displayName = 'UploadDocuments';
