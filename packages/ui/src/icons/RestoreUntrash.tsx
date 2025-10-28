import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * RestoreUntrash icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { RestoreUntrash } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="restore-untrash">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="restore-untrash" aria-label="restore untrash" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const RestoreUntrash = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="restore-untrash" {...props} />;
  }
);

RestoreUntrash.displayName = 'RestoreUntrash';
