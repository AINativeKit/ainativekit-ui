import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ArrowUpSm icon from arrows category
 *
 * @example
 * ```tsx
 * import { ArrowUpSm } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="arrow-up-sm">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="arrow-up-sm" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ArrowUpSm = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="arrow-up-sm" {...props} />;
  }
);

ArrowUpSm.displayName = 'ArrowUpSm';
