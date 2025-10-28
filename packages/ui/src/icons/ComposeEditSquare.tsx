import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ComposeEditSquare icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { ComposeEditSquare } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="compose-edit-square">
  Edit
</Button>

// Toolbar icon button
<Button iconOnly="compose-edit-square" aria-label="compose edit square" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const ComposeEditSquare = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="compose-edit-square" {...props} />;
  }
);

ComposeEditSquare.displayName = 'ComposeEditSquare';
