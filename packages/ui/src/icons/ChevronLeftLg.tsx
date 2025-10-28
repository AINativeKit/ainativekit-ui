import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ChevronLeftLg icon from arrows category
 *
 * @example
 * ```tsx
 * import { ChevronLeftLg } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="chevron-left-lg">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="chevron-left-lg" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ChevronLeftLg = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="chevron-left-lg" {...props} />;
  }
);

ChevronLeftLg.displayName = 'ChevronLeftLg';
