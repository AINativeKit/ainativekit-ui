import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * XCircleFilledCrossedClose icon from interface category
 *
 * @example
 * ```tsx
 * import { XCircleFilledCrossedClose } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="x-circle-filled-crossed-close" aria-label="Close" />

// With interactive state
<Icon name="x-circle-filled-crossed-close" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const XCircleFilledCrossedClose = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="x-circle-filled-crossed-close" {...props} />;
  }
);

XCircleFilledCrossedClose.displayName = 'XCircleFilledCrossedClose';
