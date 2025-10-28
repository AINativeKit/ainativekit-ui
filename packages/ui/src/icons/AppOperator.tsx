import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * AppOperator icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { AppOperator } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="app-operator">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="app-operator" aria-label="app operator" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const AppOperator = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="app-operator" {...props} />;
  }
);

AppOperator.displayName = 'AppOperator';
