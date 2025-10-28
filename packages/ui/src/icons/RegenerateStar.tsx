import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * RegenerateStar icon from arrows category
 *
 * @example
 * ```tsx
 * import { RegenerateStar } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="regenerate-star">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="regenerate-star" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const RegenerateStar = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="regenerate-star" {...props} />;
  }
);

RegenerateStar.displayName = 'RegenerateStar';
