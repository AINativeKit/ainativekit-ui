import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * TriangleExclamationErrorWarning icon from settings category
 *
 * @example
 * ```tsx
 * import { TriangleExclamationErrorWarning } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="triangle-exclamation-error-warning">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="triangle-exclamation-error-warning">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const TriangleExclamationErrorWarning = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="triangle-exclamation-error-warning" {...props} />;
  }
);

TriangleExclamationErrorWarning.displayName = 'TriangleExclamationErrorWarning';
