import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * TrashRemove icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { TrashRemove } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="trash-remove">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="trash-remove" aria-label="trash remove" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const TrashRemove = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="trash-remove" {...props} />;
  }
);

TrashRemove.displayName = 'TrashRemove';
