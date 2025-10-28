import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ChevronUpMd icon from arrows category
 *
 * @example
 * ```tsx
 * import { ChevronUpMd } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="chevron-up-md">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="chevron-up-md" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ChevronUpMd = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="chevron-up-md" {...props} />;
  }
);

ChevronUpMd.displayName = 'ChevronUpMd';
