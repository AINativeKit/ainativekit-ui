import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * QuestionMark icon from settings category
 *
 * @example
 * ```tsx
 * import { QuestionMark } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="question-mark">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="question-mark">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const QuestionMark = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="question-mark" {...props} />;
  }
);

QuestionMark.displayName = 'QuestionMark';
