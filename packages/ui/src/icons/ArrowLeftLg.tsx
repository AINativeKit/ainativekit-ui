import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ArrowLeftLg icon from arrows category
 *
 * @example
 * ```tsx
 * import { ArrowLeftLg } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="arrow-left-lg">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="arrow-left-lg" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ArrowLeftLg = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="arrow-left-lg" {...props} />;
  }
);

ArrowLeftLg.displayName = 'ArrowLeftLg';
