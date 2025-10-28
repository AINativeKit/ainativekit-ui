import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ManageHistory icon from misc category
 *
 * @example
 * ```tsx
 * import { ManageHistory } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="manage-history">
  Action
</Button>

// Standalone meaningful icon
<Icon name="manage-history" aria-label="manage history" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const ManageHistory = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="manage-history" {...props} />;
  }
);

ManageHistory.displayName = 'ManageHistory';
