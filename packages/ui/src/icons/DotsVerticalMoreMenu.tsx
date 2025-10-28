import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * DotsVerticalMoreMenu icon from interface category
 *
 * @example
 * ```tsx
 * import { DotsVerticalMoreMenu } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="dots-vertical-more-menu" aria-label="Open menu" />

// With interactive state
<Icon name="dots-vertical-more-menu" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const DotsVerticalMoreMenu = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="dots-vertical-more-menu" {...props} />;
  }
);

DotsVerticalMoreMenu.displayName = 'DotsVerticalMoreMenu';
