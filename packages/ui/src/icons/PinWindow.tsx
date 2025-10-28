import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * PinWindow icon from settings category
 *
 * @example
 * ```tsx
 * import { PinWindow } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="pin-window">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="pin-window">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const PinWindow = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="pin-window" {...props} />;
  }
);

PinWindow.displayName = 'PinWindow';
