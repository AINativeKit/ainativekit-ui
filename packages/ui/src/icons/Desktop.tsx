import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Desktop icon from settings category
 *
 * @example
 * ```tsx
 * import { Desktop } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="desktop">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="desktop">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const Desktop = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="desktop" {...props} />;
  }
);

Desktop.displayName = 'Desktop';
