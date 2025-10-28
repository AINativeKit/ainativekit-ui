import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ArrowTopLeftSm icon from arrows category
 *
 * @example
 * ```tsx
 * import { ArrowTopLeftSm } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="arrow-top-left-sm">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="arrow-top-left-sm" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ArrowTopLeftSm = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="arrow-top-left-sm" {...props} />;
  }
);

ArrowTopLeftSm.displayName = 'ArrowTopLeftSm';
