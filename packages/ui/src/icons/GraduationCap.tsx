import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * GraduationCap icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { GraduationCap } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="graduation-cap">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="graduation-cap" aria-label="graduation cap" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const GraduationCap = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="graduation-cap" {...props} />;
  }
);

GraduationCap.displayName = 'GraduationCap';
