import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Regenerate icon from arrows category
 *
 * @example
 * ```tsx
 * import { Regenerate } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="regenerate">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="regenerate" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const Regenerate = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="regenerate" {...props} />;
  }
);

Regenerate.displayName = 'Regenerate';
