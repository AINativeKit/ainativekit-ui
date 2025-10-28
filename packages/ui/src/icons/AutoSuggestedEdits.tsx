import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * AutoSuggestedEdits icon from settings category
 *
 * @example
 * ```tsx
 * import { AutoSuggestedEdits } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="auto-suggested-edits">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="auto-suggested-edits">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const AutoSuggestedEdits = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="auto-suggested-edits" {...props} />;
  }
);

AutoSuggestedEdits.displayName = 'AutoSuggestedEdits';
