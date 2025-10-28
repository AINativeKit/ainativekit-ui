import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * MoreCircleMenuDots icon from interface category
 *
 * @example
 * ```tsx
 * import { MoreCircleMenuDots } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="more-circle-menu-dots" aria-label="Open menu" />

// With interactive state
<Icon name="more-circle-menu-dots" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const MoreCircleMenuDots = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="more-circle-menu-dots" {...props} />;
  }
);

MoreCircleMenuDots.displayName = 'MoreCircleMenuDots';
