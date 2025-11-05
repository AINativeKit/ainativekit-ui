import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Shuffle icon from arrows category
 *
 * @example
 * ```tsx
 * import { Shuffle } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="shuffle">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="shuffle" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const Shuffle = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="shuffle" {...props} />;
});

Shuffle.displayName = 'Shuffle';
