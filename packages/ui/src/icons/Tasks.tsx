import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Tasks icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { Tasks } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="tasks">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="tasks" aria-label="tasks" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const Tasks = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="tasks" {...props} />;
});

Tasks.displayName = 'Tasks';
