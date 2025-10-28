import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ArrowLeftSm icon from arrows category
 *
 * @example
 * ```tsx
 * import { ArrowLeftSm } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="arrow-left-sm">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="arrow-left-sm" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ArrowLeftSm = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="arrow-left-sm" {...props} />;
  }
);

ArrowLeftSm.displayName = 'ArrowLeftSm';
