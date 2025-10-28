import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Back15s icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { Back15s } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="back-15s">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="back-15s" aria-label="back 15s" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const Back15s = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="back-15s" {...props} />;
  }
);

Back15s.displayName = 'Back15s';
