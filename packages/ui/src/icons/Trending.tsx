import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Trending icon from misc category
 *
 * @example
 * ```tsx
 * import { Trending } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="trending">
  Action
</Button>

// Standalone meaningful icon
<Icon name="trending" aria-label="trending" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Trending = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="trending" {...props} />;
  }
);

Trending.displayName = 'Trending';
