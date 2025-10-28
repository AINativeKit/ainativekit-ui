import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * CheckMd icon from settings category
 *
 * @example
 * ```tsx
 * import { CheckMd } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="check-md">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="check-md">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const CheckMd = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="check-md" {...props} />;
  }
);

CheckMd.displayName = 'CheckMd';
