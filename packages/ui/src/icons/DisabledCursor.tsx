import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * DisabledCursor icon from settings category
 *
 * @example
 * ```tsx
 * import { DisabledCursor } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="disabled-cursor">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="disabled-cursor">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const DisabledCursor = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="disabled-cursor" {...props} />;
  }
);

DisabledCursor.displayName = 'DisabledCursor';
