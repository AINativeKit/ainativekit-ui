import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * CheckCircleDashed icon from settings category
 *
 * @example
 * ```tsx
 * import { CheckCircleDashed } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="check-circle-dashed">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="check-circle-dashed">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const CheckCircleDashed = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="check-circle-dashed" {...props} />;
  }
);

CheckCircleDashed.displayName = 'CheckCircleDashed';
