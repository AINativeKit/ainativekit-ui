import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * CameraPhoto icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { CameraPhoto } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="camera-photo">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="camera-photo" aria-label="camera photo" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const CameraPhoto = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="camera-photo" {...props} />;
  }
);

CameraPhoto.displayName = 'CameraPhoto';
