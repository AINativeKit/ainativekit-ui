import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Headphones icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { Headphones } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="headphones">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="headphones" aria-label="headphones" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const Headphones = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="headphones" {...props} />;
  }
);

Headphones.displayName = 'Headphones';
