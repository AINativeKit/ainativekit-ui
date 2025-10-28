import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Interactive icon from settings category
 *
 * @example
 * ```tsx
 * import { Interactive } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="interactive">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="interactive">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const Interactive = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="interactive" {...props} />;
  }
);

Interactive.displayName = 'Interactive';
