import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Speak icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { Speak } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="speak">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="speak" aria-label="speak" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const Speak = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="speak" {...props} />;
});

Speak.displayName = 'Speak';
