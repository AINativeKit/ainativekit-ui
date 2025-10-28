import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Archive icon from misc category
 *
 * @example
 * ```tsx
 * import { Archive } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="archive">
  Action
</Button>

// Standalone meaningful icon
<Icon name="archive" aria-label="archive" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Archive = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="archive" {...props} />;
  }
);

Archive.displayName = 'Archive';
