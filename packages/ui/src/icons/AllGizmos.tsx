import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * AllGizmos icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { AllGizmos } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="all-gizmos">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="all-gizmos" aria-label="all gizmos" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const AllGizmos = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="all-gizmos" {...props} />;
  }
);

AllGizmos.displayName = 'AllGizmos';
