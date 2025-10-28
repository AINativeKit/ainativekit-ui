import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Shortcuts icon from settings category
 *
 * @example
 * ```tsx
 * import { Shortcuts } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="shortcuts">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="shortcuts">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const Shortcuts = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="shortcuts" {...props} />;
  }
);

Shortcuts.displayName = 'Shortcuts';
