import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ShareScreenOff icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { ShareScreenOff } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="share-screen-off">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="share-screen-off" aria-label="share screen off" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const ShareScreenOff = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="share-screen-off" {...props} />;
  }
);

ShareScreenOff.displayName = 'ShareScreenOff';
