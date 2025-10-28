import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ArrowCurvedLeft icon from arrows category
 *
 * @example
 * ```tsx
 * import { ArrowCurvedLeft } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="arrow-curved-left">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="arrow-curved-left" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ArrowCurvedLeft = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="arrow-curved-left" {...props} />;
  }
);

ArrowCurvedLeft.displayName = 'ArrowCurvedLeft';
