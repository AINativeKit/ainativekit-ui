import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ImageSquarePictureLibrary icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { ImageSquarePictureLibrary } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="image-square-picture-library">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="image-square-picture-library" aria-label="image square picture library" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const ImageSquarePictureLibrary = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="image-square-picture-library" {...props} />;
  }
);

ImageSquarePictureLibrary.displayName = 'ImageSquarePictureLibrary';
