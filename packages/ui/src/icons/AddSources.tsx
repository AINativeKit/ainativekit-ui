import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * AddSources icon from settings category
 *
 * @example
 * ```tsx
 * import { AddSources } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="add-sources">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="add-sources">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const AddSources = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="add-sources" {...props} />;
  }
);

AddSources.displayName = 'AddSources';
