import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * TuningFork icon from settings category
 *
 * @example
 * ```tsx
 * import { TuningFork } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="tuning-fork">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="tuning-fork">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const TuningFork = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="tuning-fork" {...props} />;
  }
);

TuningFork.displayName = 'TuningFork';
