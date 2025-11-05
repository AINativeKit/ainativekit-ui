import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Stop icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { Stop } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="stop">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="stop" aria-label="stop" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const Stop = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="stop" {...props} />;
});

Stop.displayName = 'Stop';
