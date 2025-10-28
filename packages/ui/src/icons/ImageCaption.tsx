import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ImageCaption icon from misc category
 *
 * @example
 * ```tsx
 * import { ImageCaption } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="image-caption">
  Action
</Button>

// Standalone meaningful icon
<Icon name="image-caption" aria-label="image caption" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const ImageCaption = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="image-caption" {...props} />;
  }
);

ImageCaption.displayName = 'ImageCaption';
