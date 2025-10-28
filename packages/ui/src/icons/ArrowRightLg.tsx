import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ArrowRightLg icon from arrows category
 *
 * @example
 * ```tsx
 * import { ArrowRightLg } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="arrow-right-lg">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="arrow-right-lg" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ArrowRightLg = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="arrow-right-lg" {...props} />;
  }
);

ArrowRightLg.displayName = 'ArrowRightLg';
