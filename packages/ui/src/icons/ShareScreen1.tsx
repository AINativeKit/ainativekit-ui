import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ShareScreen1 icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { ShareScreen1 } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="share-screen-1">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="share-screen-1" aria-label="share screen 1" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const ShareScreen1 = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="share-screen-1" {...props} />;
  }
);

ShareScreen1.displayName = 'ShareScreen1';
