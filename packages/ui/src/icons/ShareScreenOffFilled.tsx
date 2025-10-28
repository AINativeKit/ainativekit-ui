import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ShareScreenOffFilled icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { ShareScreenOffFilled } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="share-screen-off-filled">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="share-screen-off-filled" aria-label="share screen off filled" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const ShareScreenOffFilled = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="share-screen-off-filled" {...props} />;
  }
);

ShareScreenOffFilled.displayName = 'ShareScreenOffFilled';
