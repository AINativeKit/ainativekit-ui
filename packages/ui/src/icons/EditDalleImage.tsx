import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * EditDalleImage icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { EditDalleImage } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="edit-dalle-image">
  Edit
</Button>

// Toolbar icon button
<Button iconOnly="edit-dalle-image" aria-label="edit dalle image" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const EditDalleImage = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="edit-dalle-image" {...props} />;
  }
);

EditDalleImage.displayName = 'EditDalleImage';
