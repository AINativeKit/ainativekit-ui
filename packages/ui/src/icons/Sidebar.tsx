import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Sidebar icon from interface category
 *
 * @example
 * ```tsx
 * import { Sidebar } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="sidebar" aria-label="Toggle" />

// With interactive state
<Icon name="sidebar" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const Sidebar = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="sidebar" {...props} />;
});

Sidebar.displayName = 'Sidebar';
