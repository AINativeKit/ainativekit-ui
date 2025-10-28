import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ArrowDownSm icon from arrows category
 *
 * @example
 * ```tsx
 * import { ArrowDownSm } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="arrow-down-sm">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="arrow-down-sm" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ArrowDownSm = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="arrow-down-sm" {...props} />;
  }
);

ArrowDownSm.displayName = 'ArrowDownSm';
