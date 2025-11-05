import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * AppStore icon from settings category
 *
 * @example
 * ```tsx
 * import { AppStore } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="app-store">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="app-store">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const AppStore = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="app-store" {...props} />;
});

AppStore.displayName = 'AppStore';
