import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * QuestionMarkCircle icon from settings category
 *
 * @example
 * ```tsx
 * import { QuestionMarkCircle } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="question-mark-circle">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="question-mark-circle">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const QuestionMarkCircle = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="question-mark-circle" {...props} />;
  }
);

QuestionMarkCircle.displayName = 'QuestionMarkCircle';
