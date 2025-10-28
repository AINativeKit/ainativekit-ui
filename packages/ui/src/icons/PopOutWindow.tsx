import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * PopOutWindow icon from settings category
 *
 * @example
 * ```tsx
 * import { PopOutWindow } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="pop-out-window">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="pop-out-window">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const PopOutWindow = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="pop-out-window" {...props} />;
  }
);

PopOutWindow.displayName = 'PopOutWindow';
