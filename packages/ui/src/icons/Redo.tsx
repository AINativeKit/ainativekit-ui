import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Redo icon from arrows category
 *
 * @example
 * ```tsx
 * import { Redo } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="redo">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="redo" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const Redo = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="redo" {...props} />;
  }
);

Redo.displayName = 'Redo';
