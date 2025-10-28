import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ArrowBottomLeftSm icon from arrows category
 *
 * @example
 * ```tsx
 * import { ArrowBottomLeftSm } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="arrow-bottom-left-sm">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="arrow-bottom-left-sm" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ArrowBottomLeftSm = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="arrow-bottom-left-sm" {...props} />;
  }
);

ArrowBottomLeftSm.displayName = 'ArrowBottomLeftSm';
