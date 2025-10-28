import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ArrowRotateCcw icon from arrows category
 *
 * @example
 * ```tsx
 * import { ArrowRotateCcw } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="arrow-rotate-ccw">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="arrow-rotate-ccw" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ArrowRotateCcw = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="arrow-rotate-ccw" {...props} />;
  }
);

ArrowRotateCcw.displayName = 'ArrowRotateCcw';
