import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Play icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { Play } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="play">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="play" aria-label="play" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const Play = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="play" {...props} />;
});

Play.displayName = 'Play';
