import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * DeepSearchTelescope icon from misc category
 *
 * @example
 * ```tsx
 * import { DeepSearchTelescope } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="deep-search-telescope">
  Action
</Button>

// Standalone meaningful icon
<Icon name="deep-search-telescope" aria-label="deep search telescope" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const DeepSearchTelescope = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="deep-search-telescope" {...props} />;
  }
);

DeepSearchTelescope.displayName = 'DeepSearchTelescope';
