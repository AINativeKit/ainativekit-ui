import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * DotsHorizontalMoreMenu icon from interface category
 *
 * @example
 * ```tsx
 * import { DotsHorizontalMoreMenu } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="dots-horizontal-more-menu" aria-label="Open menu" />

// With interactive state
<Icon name="dots-horizontal-more-menu" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const DotsHorizontalMoreMenu = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="dots-horizontal-more-menu" {...props} />;
  }
);

DotsHorizontalMoreMenu.displayName = 'DotsHorizontalMoreMenu';
