import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * MemoryFilledSm icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { MemoryFilledSm } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="memory-filled-sm">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="memory-filled-sm" aria-label="memory filled sm" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const MemoryFilledSm = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="memory-filled-sm" {...props} />;
  }
);

MemoryFilledSm.displayName = 'MemoryFilledSm';
