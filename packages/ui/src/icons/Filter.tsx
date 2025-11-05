import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Filter icon from settings category
 *
 * @example
 * ```tsx
 * import { Filter } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="filter">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="filter">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const Filter = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="filter" {...props} />;
});

Filter.displayName = 'Filter';
