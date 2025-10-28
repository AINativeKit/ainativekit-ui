import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * MemoryOffRemember icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { MemoryOffRemember } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="memory-off-remember">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="memory-off-remember" aria-label="memory off remember" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const MemoryOffRemember = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="memory-off-remember" {...props} />;
  }
);

MemoryOffRemember.displayName = 'MemoryOffRemember';
