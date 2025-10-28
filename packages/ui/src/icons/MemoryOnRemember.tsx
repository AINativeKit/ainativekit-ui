import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * MemoryOnRemember icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { MemoryOnRemember } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="memory-on-remember">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="memory-on-remember" aria-label="memory on remember" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const MemoryOnRemember = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="memory-on-remember" {...props} />;
  }
);

MemoryOnRemember.displayName = 'MemoryOnRemember';
