import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Upgrade icon from settings category
 *
 * @example
 * ```tsx
 * import { Upgrade } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="upgrade">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="upgrade">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const Upgrade = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="upgrade" {...props} />;
  }
);

Upgrade.displayName = 'Upgrade';
