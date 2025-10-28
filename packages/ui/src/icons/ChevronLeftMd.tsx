import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ChevronLeftMd icon from arrows category
 *
 * @example
 * ```tsx
 * import { ChevronLeftMd } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="chevron-left-md">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="chevron-left-md" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ChevronLeftMd = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="chevron-left-md" {...props} />;
  }
);

ChevronLeftMd.displayName = 'ChevronLeftMd';
