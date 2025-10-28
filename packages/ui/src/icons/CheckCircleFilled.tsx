import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * CheckCircleFilled icon from settings category
 *
 * @example
 * ```tsx
 * import { CheckCircleFilled } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="check-circle-filled">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="check-circle-filled">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const CheckCircleFilled = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="check-circle-filled" {...props} />;
  }
);

CheckCircleFilled.displayName = 'CheckCircleFilled';
