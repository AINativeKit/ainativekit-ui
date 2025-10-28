import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * RegenerateOff icon from arrows category
 *
 * @example
 * ```tsx
 * import { RegenerateOff } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="regenerate-off">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="regenerate-off" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const RegenerateOff = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="regenerate-off" {...props} />;
  }
);

RegenerateOff.displayName = 'RegenerateOff';
