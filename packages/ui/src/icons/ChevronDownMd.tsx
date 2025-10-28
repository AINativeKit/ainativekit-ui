import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ChevronDownMd icon from arrows category
 *
 * @example
 * ```tsx
 * import { ChevronDownMd } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="chevron-down-md">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="chevron-down-md" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ChevronDownMd = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="chevron-down-md" {...props} />;
  }
);

ChevronDownMd.displayName = 'ChevronDownMd';
