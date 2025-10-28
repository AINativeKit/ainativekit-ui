import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * MenuSidebar icon from interface category
 *
 * @example
 * ```tsx
 * import { MenuSidebar } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="menu-sidebar" aria-label="Open menu" />

// With interactive state
<Icon name="menu-sidebar" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const MenuSidebar = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="menu-sidebar" {...props} />;
  }
);

MenuSidebar.displayName = 'MenuSidebar';
