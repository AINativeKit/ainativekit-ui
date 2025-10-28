import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * VideoFilledOff icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { VideoFilledOff } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="video-filled-off">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="video-filled-off" aria-label="video filled off" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const VideoFilledOff = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="video-filled-off" {...props} />;
  }
);

VideoFilledOff.displayName = 'VideoFilledOff';
