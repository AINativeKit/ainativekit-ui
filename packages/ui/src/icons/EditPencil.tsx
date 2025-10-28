import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * EditPencil icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { EditPencil } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="edit-pencil">
  Edit
</Button>

// Toolbar icon button
<Button iconOnly="edit-pencil" aria-label="edit pencil" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const EditPencil = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="edit-pencil" {...props} />;
  }
);

EditPencil.displayName = 'EditPencil';
