import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * TriangleExclamationFilledErrorWarning icon from settings category
 *
 * @example
 * ```tsx
 * import { TriangleExclamationFilledErrorWarning } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="triangle-exclamation-filled-error-warning">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="triangle-exclamation-filled-error-warning">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const TriangleExclamationFilledErrorWarning = React.forwardRef<
  HTMLSpanElement,
  Omit<IconProps, 'name'>
>((props, ref) => {
  return <Icon ref={ref} name="triangle-exclamation-filled-error-warning" {...props} />;
});

TriangleExclamationFilledErrorWarning.displayName = 'TriangleExclamationFilledErrorWarning';
