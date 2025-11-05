import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Eye icon from settings category
 *
 * @example
 * ```tsx
 * import { Eye } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="eye">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="eye">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const Eye = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="eye" {...props} />;
});

Eye.displayName = 'Eye';
