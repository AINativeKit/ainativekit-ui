import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Cleanup icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { Cleanup } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="cleanup">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="cleanup" aria-label="cleanup" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const Cleanup = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="cleanup" {...props} />;
  }
);

Cleanup.displayName = 'Cleanup';
