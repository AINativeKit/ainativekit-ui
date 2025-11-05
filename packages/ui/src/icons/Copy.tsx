import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Copy icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { Copy } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="copy">
  Copy
</Button>

// Toolbar icon button
<Button iconOnly="copy" aria-label="copy" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const Copy = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="copy" {...props} />;
});

Copy.displayName = 'Copy';
