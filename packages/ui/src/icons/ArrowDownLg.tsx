import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ArrowDownLg icon from arrows category
 *
 * @example
 * ```tsx
 * import { ArrowDownLg } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="arrow-down-lg">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="arrow-down-lg" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ArrowDownLg = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="arrow-down-lg" {...props} />;
  }
);

ArrowDownLg.displayName = 'ArrowDownLg';
