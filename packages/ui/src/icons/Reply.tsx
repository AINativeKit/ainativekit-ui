import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Reply icon from arrows category
 *
 * @example
 * ```tsx
 * import { Reply } from '@ainativekit/ui/icons';
 *
 * // Navigation with text
<Button variant="ghost" rightIcon="reply">
  Next Step
</Button>

// Icon-only navigation
<Button iconOnly="reply" aria-label="Go back" />
 * ```
 *
 * @accessibility
 * Arrows are decorative when showing direction alongside text. Icon-only navigation buttons need descriptive aria-label.
 */
export const Reply = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="reply" {...props} />;
  }
);

Reply.displayName = 'Reply';
