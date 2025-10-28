import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ArrowBottomRightSm icon from arrows category
 *
 * @example
 * ```tsx
 * import { ArrowBottomRightSm } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="arrow-bottom-right-sm">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="arrow-bottom-right-sm" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ArrowBottomRightSm = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="arrow-bottom-right-sm" {...props} />;
  }
);

ArrowBottomRightSm.displayName = 'ArrowBottomRightSm';
