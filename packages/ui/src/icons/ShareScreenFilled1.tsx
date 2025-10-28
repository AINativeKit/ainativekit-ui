import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ShareScreenFilled1 icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { ShareScreenFilled1 } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="share-screen-filled-1">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="share-screen-filled-1" aria-label="share screen filled 1" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const ShareScreenFilled1 = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="share-screen-filled-1" {...props} />;
  }
);

ShareScreenFilled1.displayName = 'ShareScreenFilled1';
