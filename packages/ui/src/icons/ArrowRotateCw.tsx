import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ArrowRotateCw icon from arrows category
 *
 * @example
 * ```tsx
 * import { ArrowRotateCw } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="arrow-rotate-cw">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="arrow-rotate-cw" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ArrowRotateCw = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="arrow-rotate-cw" {...props} />;
  }
);

ArrowRotateCw.displayName = 'ArrowRotateCw';
