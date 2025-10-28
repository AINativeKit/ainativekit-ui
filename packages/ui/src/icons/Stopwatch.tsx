import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Stopwatch icon from settings category
 *
 * @example
 * ```tsx
 * import { Stopwatch } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="stopwatch">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="stopwatch">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const Stopwatch = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="stopwatch" {...props} />;
  }
);

Stopwatch.displayName = 'Stopwatch';
