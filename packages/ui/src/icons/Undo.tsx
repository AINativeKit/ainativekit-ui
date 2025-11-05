import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Undo icon from arrows category
 *
 * @example
 * ```tsx
 * import { Undo } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="undo">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="undo" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const Undo = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="undo" {...props} />;
});

Undo.displayName = 'Undo';
