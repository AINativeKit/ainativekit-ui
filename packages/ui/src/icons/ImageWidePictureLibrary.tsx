import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ImageWidePictureLibrary icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { ImageWidePictureLibrary } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="image-wide-picture-library">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="image-wide-picture-library" aria-label="image wide picture library" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const ImageWidePictureLibrary = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="image-wide-picture-library" {...props} />;
  }
);

ImageWidePictureLibrary.displayName = 'ImageWidePictureLibrary';
