import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Folders icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { Folders } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="folders">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="folders" aria-label="folders" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const Folders = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="folders" {...props} />;
  }
);

Folders.displayName = 'Folders';
