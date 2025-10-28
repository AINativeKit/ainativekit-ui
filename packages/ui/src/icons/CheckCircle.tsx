import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * CheckCircle icon from settings category
 *
 * @example
 * ```tsx
 * import { CheckCircle } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="check-circle">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="check-circle">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const CheckCircle = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="check-circle" {...props} />;
  }
);

CheckCircle.displayName = 'CheckCircle';
