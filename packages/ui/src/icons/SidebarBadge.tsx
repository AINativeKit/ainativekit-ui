import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * SidebarBadge icon from interface category
 *
 * @example
 * ```tsx
 * import { SidebarBadge } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="sidebar-badge" aria-label="Toggle" />

// With interactive state
<Icon name="sidebar-badge" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const SidebarBadge = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="sidebar-badge" {...props} />;
  }
);

SidebarBadge.displayName = 'SidebarBadge';
