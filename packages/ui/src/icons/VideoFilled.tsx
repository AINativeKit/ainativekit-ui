import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * VideoFilled icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { VideoFilled } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="video-filled">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="video-filled" aria-label="video filled" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const VideoFilled = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="video-filled" {...props} />;
  }
);

VideoFilled.displayName = 'VideoFilled';
