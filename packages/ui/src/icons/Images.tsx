import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Images icon from misc category
 *
 * @example
 * ```tsx
 * import { Images } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="images">
  Action
</Button>

// Standalone meaningful icon
<Icon name="images" aria-label="images" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Images = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="images" {...props} />;
});

Images.displayName = 'Images';
