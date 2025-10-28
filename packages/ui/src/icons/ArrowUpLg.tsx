import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ArrowUpLg icon from arrows category
 *
 * @example
 * ```tsx
 * import { ArrowUpLg } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="arrow-up-lg">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="arrow-up-lg" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ArrowUpLg = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="arrow-up-lg" {...props} />;
  }
);

ArrowUpLg.displayName = 'ArrowUpLg';
