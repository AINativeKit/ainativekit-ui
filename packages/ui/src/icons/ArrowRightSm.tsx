import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ArrowRightSm icon from arrows category
 *
 * @example
 * ```tsx
 * import { ArrowRightSm } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="arrow-right-sm">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="arrow-right-sm" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ArrowRightSm = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="arrow-right-sm" {...props} />;
  }
);

ArrowRightSm.displayName = 'ArrowRightSm';
