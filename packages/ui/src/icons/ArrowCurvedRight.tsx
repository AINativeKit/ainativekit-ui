import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ArrowCurvedRight icon from arrows category
 *
 * @example
 * ```tsx
 * import { ArrowCurvedRight } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="arrow-curved-right">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="arrow-curved-right" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ArrowCurvedRight = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="arrow-curved-right" {...props} />;
  }
);

ArrowCurvedRight.displayName = 'ArrowCurvedRight';
