import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ChevronRightLg icon from arrows category
 *
 * @example
 * ```tsx
 * import { ChevronRightLg } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="chevron-right-lg">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="chevron-right-lg" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ChevronRightLg = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="chevron-right-lg" {...props} />;
  }
);

ChevronRightLg.displayName = 'ChevronRightLg';
