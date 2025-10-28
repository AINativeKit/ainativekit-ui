import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * GlobeFilled icon from misc category
 *
 * @example
 * ```tsx
 * import { GlobeFilled } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="globe-filled">
  Action
</Button>

// Standalone meaningful icon
<Icon name="globe-filled" aria-label="globe filled" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const GlobeFilled = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="globe-filled" {...props} />;
  }
);

GlobeFilled.displayName = 'GlobeFilled';
