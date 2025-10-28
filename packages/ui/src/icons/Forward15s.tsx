import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Forward15s icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { Forward15s } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="forward-15s">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="forward-15s" aria-label="forward 15s" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const Forward15s = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="forward-15s" {...props} />;
  }
);

Forward15s.displayName = 'Forward15s';
