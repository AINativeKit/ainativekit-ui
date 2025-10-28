import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * LockKeyHole icon from settings category
 *
 * @example
 * ```tsx
 * import { LockKeyHole } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="lock-key-hole">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="lock-key-hole">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const LockKeyHole = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="lock-key-hole" {...props} />;
  }
);

LockKeyHole.displayName = 'LockKeyHole';
