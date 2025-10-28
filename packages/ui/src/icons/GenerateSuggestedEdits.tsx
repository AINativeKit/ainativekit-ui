import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * GenerateSuggestedEdits icon from settings category
 *
 * @example
 * ```tsx
 * import { GenerateSuggestedEdits } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="generate-suggested-edits">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="generate-suggested-edits">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const GenerateSuggestedEdits = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="generate-suggested-edits" {...props} />;
  }
);

GenerateSuggestedEdits.displayName = 'GenerateSuggestedEdits';
