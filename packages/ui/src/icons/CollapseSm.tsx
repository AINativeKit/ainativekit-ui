import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * CollapseSm icon from arrows category
 *
 * @example
 * ```tsx
 * import { CollapseSm } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="collapse-sm">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="collapse-sm" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const CollapseSm = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="collapse-sm" {...props} />;
  }
);

CollapseSm.displayName = 'CollapseSm';
