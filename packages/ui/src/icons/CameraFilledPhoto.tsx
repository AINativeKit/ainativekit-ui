import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * CameraFilledPhoto icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { CameraFilledPhoto } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="camera-filled-photo">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="camera-filled-photo" aria-label="camera filled photo" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const CameraFilledPhoto = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="camera-filled-photo" {...props} />;
  }
);

CameraFilledPhoto.displayName = 'CameraFilledPhoto';
