import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Mic icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { Mic } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="mic">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="mic" aria-label="mic" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const Mic = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="mic" {...props} />;
});

Mic.displayName = 'Mic';
