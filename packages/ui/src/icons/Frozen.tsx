import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Frozen icon from settings category
 *
 * @example
 * ```tsx
 * import { Frozen } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="frozen">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="frozen">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const Frozen = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="frozen" {...props} />;
});

Frozen.displayName = 'Frozen';
