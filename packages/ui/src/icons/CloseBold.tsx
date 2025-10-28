import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * CloseBold icon from interface category
 *
 * @example
 * ```tsx
 * import { CloseBold } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="close-bold" aria-label="Close" />

// With interactive state
<Icon name="close-bold" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const CloseBold = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="close-bold" {...props} />;
  }
);

CloseBold.displayName = 'CloseBold';
