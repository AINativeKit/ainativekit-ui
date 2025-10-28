import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ArrowCurvedRightXs icon from arrows category
 *
 * @example
 * ```tsx
 * import { ArrowCurvedRightXs } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="arrow-curved-right-xs">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="arrow-curved-right-xs" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ArrowCurvedRightXs = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="arrow-curved-right-xs" {...props} />;
  }
);

ArrowCurvedRightXs.displayName = 'ArrowCurvedRightXs';
