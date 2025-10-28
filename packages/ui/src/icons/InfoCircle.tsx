import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * InfoCircle icon from settings category
 *
 * @example
 * ```tsx
 * import { InfoCircle } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="info-circle">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="info-circle">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const InfoCircle = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="info-circle" {...props} />;
  }
);

InfoCircle.displayName = 'InfoCircle';
