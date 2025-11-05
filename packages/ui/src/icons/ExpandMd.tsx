import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ExpandMd icon from arrows category
 *
 * @example
 * ```tsx
 * import { ExpandMd } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="expand-md">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="expand-md" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const ExpandMd = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="expand-md" {...props} />;
});

ExpandMd.displayName = 'ExpandMd';
