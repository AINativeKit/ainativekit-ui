import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * NoTraining icon from settings category
 *
 * @example
 * ```tsx
 * import { NoTraining } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="no-training">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="no-training">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const NoTraining = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="no-training" {...props} />;
  }
);

NoTraining.displayName = 'NoTraining';
