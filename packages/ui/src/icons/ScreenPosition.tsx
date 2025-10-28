import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ScreenPosition icon from settings category
 *
 * @example
 * ```tsx
 * import { ScreenPosition } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="screen-position">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="screen-position">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const ScreenPosition = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="screen-position" {...props} />;
  }
);

ScreenPosition.displayName = 'ScreenPosition';
