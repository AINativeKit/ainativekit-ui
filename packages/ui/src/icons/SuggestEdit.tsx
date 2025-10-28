import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * SuggestEdit icon from settings category
 *
 * @example
 * ```tsx
 * import { SuggestEdit } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="suggest-edit">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="suggest-edit">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const SuggestEdit = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="suggest-edit" {...props} />;
  }
);

SuggestEdit.displayName = 'SuggestEdit';
