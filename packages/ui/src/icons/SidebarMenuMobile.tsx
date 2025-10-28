import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * SidebarMenuMobile icon from interface category
 *
 * @example
 * ```tsx
 * import { SidebarMenuMobile } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="sidebar-menu-mobile" aria-label="Open menu" />

// With interactive state
<Icon name="sidebar-menu-mobile" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const SidebarMenuMobile = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="sidebar-menu-mobile" {...props} />;
  }
);

SidebarMenuMobile.displayName = 'SidebarMenuMobile';
