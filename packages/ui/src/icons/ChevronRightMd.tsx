import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ChevronRightMd icon from arrows category
 *
 * @example
 * ```tsx
 * import { ChevronRightMd } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="chevron-right-md">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="chevron-right-md" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ChevronRightMd = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="chevron-right-md" {...props} />;
  }
);

ChevronRightMd.displayName = 'ChevronRightMd';
