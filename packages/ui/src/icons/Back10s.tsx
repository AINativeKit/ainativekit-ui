import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Back10s icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { Back10s } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="back-10s">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="back-10s" aria-label="back 10s" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const Back10s = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="back-10s" {...props} />;
});

Back10s.displayName = 'Back10s';
