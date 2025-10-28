import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * CollapseLg icon from arrows category
 *
 * @example
 * ```tsx
 * import { CollapseLg } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="collapse-lg">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="collapse-lg" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const CollapseLg = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="collapse-lg" {...props} />;
  }
);

CollapseLg.displayName = 'CollapseLg';
