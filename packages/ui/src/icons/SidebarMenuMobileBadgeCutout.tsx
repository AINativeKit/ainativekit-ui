import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * SidebarMenuMobileBadgeCutout icon from interface category
 *
 * @example
 * ```tsx
 * import { SidebarMenuMobileBadgeCutout } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="sidebar-menu-mobile-badge-cutout" aria-label="Open menu" />

// With interactive state
<Icon name="sidebar-menu-mobile-badge-cutout" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const SidebarMenuMobileBadgeCutout = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="sidebar-menu-mobile-badge-cutout" {...props} />;
  }
);

SidebarMenuMobileBadgeCutout.displayName = 'SidebarMenuMobileBadgeCutout';
