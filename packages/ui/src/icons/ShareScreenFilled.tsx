import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ShareScreenFilled icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { ShareScreenFilled } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="share-screen-filled">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="share-screen-filled" aria-label="share screen filled" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const ShareScreenFilled = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="share-screen-filled" {...props} />;
  }
);

ShareScreenFilled.displayName = 'ShareScreenFilled';
