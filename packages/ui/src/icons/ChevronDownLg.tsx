import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ChevronDownLg icon from arrows category
 *
 * @example
 * ```tsx
 * import { ChevronDownLg } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="chevron-down-lg">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="chevron-down-lg" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ChevronDownLg = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="chevron-down-lg" {...props} />;
  }
);

ChevronDownLg.displayName = 'ChevronDownLg';
