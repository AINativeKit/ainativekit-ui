import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ChevronUpLg icon from arrows category
 *
 * @example
 * ```tsx
 * import { ChevronUpLg } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="chevron-up-lg">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="chevron-up-lg" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ChevronUpLg = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="chevron-up-lg" {...props} />;
  }
);

ChevronUpLg.displayName = 'ChevronUpLg';
