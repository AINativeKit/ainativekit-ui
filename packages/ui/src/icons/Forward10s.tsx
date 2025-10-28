import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Forward10s icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { Forward10s } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="forward-10s">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="forward-10s" aria-label="forward 10s" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const Forward10s = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="forward-10s" {...props} />;
  }
);

Forward10s.displayName = 'Forward10s';
