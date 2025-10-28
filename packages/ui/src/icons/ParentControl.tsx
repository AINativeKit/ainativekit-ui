import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ParentControl icon from settings category
 *
 * @example
 * ```tsx
 * import { ParentControl } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="parent-control">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="parent-control">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const ParentControl = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="parent-control" {...props} />;
  }
);

ParentControl.displayName = 'ParentControl';
