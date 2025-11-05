import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ExpandSm icon from arrows category
 *
 * @example
 * ```tsx
 * import { ExpandSm } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="expand-sm">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="expand-sm" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ExpandSm = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="expand-sm" {...props} />;
});

ExpandSm.displayName = 'ExpandSm';
