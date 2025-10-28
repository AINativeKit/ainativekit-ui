import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ChevronDownUp icon from arrows category
 *
 * @example
 * ```tsx
 * import { ChevronDownUp } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="chevron-down-up">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="chevron-down-up" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ChevronDownUp = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="chevron-down-up" {...props} />;
  }
);

ChevronDownUp.displayName = 'ChevronDownUp';
