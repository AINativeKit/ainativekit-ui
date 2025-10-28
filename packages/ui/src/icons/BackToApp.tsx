import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * BackToApp icon from settings category
 *
 * @example
 * ```tsx
 * import { BackToApp } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="back-to-app">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="back-to-app">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const BackToApp = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="back-to-app" {...props} />;
  }
);

BackToApp.displayName = 'BackToApp';
