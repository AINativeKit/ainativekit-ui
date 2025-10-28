import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * PlayCircleFilled icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { PlayCircleFilled } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="play-circle-filled">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="play-circle-filled" aria-label="play circle filled" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const PlayCircleFilled = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="play-circle-filled" {...props} />;
  }
);

PlayCircleFilled.displayName = 'PlayCircleFilled';
