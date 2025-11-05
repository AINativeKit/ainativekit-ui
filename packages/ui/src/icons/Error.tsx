import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Error icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { Error } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="error">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="error" aria-label="error" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const Error = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="error" {...props} />;
});

Error.displayName = 'Error';
