import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ColorTheme icon from settings category
 *
 * @example
 * ```tsx
 * import { ColorTheme } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="color-theme">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="color-theme">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const ColorTheme = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="color-theme" {...props} />;
  }
);

ColorTheme.displayName = 'ColorTheme';
