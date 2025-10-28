import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ArrowTopRightSm icon from arrows category
 *
 * @example
 * ```tsx
 * import { ArrowTopRightSm } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="arrow-top-right-sm">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="arrow-top-right-sm" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ArrowTopRightSm = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="arrow-top-right-sm" {...props} />;
  }
);

ArrowTopRightSm.displayName = 'ArrowTopRightSm';
