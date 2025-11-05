import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * PlaySm icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { PlaySm } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="play-sm">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="play-sm" aria-label="play sm" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const PlaySm = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="play-sm" {...props} />;
});

PlaySm.displayName = 'PlaySm';
