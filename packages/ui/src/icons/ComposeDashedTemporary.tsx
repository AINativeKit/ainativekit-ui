import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ComposeDashedTemporary icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { ComposeDashedTemporary } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="compose-dashed-temporary">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="compose-dashed-temporary" aria-label="compose dashed temporary" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const ComposeDashedTemporary = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="compose-dashed-temporary" {...props} />;
  }
);

ComposeDashedTemporary.displayName = 'ComposeDashedTemporary';
