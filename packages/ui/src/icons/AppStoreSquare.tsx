import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * AppStoreSquare icon from settings category
 *
 * @example
 * ```tsx
 * import { AppStoreSquare } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="app-store-square">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="app-store-square">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const AppStoreSquare = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="app-store-square" {...props} />;
  }
);

AppStoreSquare.displayName = 'AppStoreSquare';
