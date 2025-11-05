import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Video icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { Video } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="video">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="video" aria-label="video" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const Video = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="video" {...props} />;
});

Video.displayName = 'Video';
