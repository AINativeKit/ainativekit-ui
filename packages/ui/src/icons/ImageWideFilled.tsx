import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ImageWideFilled icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { ImageWideFilled } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="image-wide-filled">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="image-wide-filled" aria-label="image wide filled" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const ImageWideFilled = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="image-wide-filled" {...props} />;
  }
);

ImageWideFilled.displayName = 'ImageWideFilled';
