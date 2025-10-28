import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * EmptyCircle icon from settings category
 *
 * @example
 * ```tsx
 * import { EmptyCircle } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="empty-circle">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="empty-circle">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const EmptyCircle = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="empty-circle" {...props} />;
  }
);

EmptyCircle.displayName = 'EmptyCircle';
