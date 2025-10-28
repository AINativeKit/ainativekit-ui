import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ExpandLg icon from arrows category
 *
 * @example
 * ```tsx
 * import { ExpandLg } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="expand-lg">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="expand-lg" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ExpandLg = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="expand-lg" {...props} />;
  }
);

ExpandLg.displayName = 'ExpandLg';
