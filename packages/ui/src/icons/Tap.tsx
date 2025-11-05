import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Tap icon from settings category
 *
 * @example
 * ```tsx
 * import { Tap } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="tap">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="tap">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const Tap = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="tap" {...props} />;
});

Tap.displayName = 'Tap';
