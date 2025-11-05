import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Pause icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { Pause } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="pause">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="pause" aria-label="pause" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const Pause = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="pause" {...props} />;
});

Pause.displayName = 'Pause';
