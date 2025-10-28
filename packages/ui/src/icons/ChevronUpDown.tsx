import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ChevronUpDown icon from arrows category
 *
 * @example
 * ```tsx
 * import { ChevronUpDown } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="chevron-up-down">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="chevron-up-down" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ChevronUpDown = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="chevron-up-down" {...props} />;
  }
);

ChevronUpDown.displayName = 'ChevronUpDown';
