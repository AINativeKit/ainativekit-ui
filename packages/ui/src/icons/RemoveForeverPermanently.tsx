import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * RemoveForeverPermanently icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { RemoveForeverPermanently } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="remove-forever-permanently">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="remove-forever-permanently" aria-label="remove forever permanently" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const RemoveForeverPermanently = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="remove-forever-permanently" {...props} />;
  }
);

RemoveForeverPermanently.displayName = 'RemoveForeverPermanently';
