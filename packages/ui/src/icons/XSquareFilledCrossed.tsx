import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * XSquareFilledCrossed icon from interface category
 *
 * @example
 * ```tsx
 * import { XSquareFilledCrossed } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="x-square-filled-crossed" aria-label="Toggle" />

// With interactive state
<Icon name="x-square-filled-crossed" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const XSquareFilledCrossed = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="x-square-filled-crossed" {...props} />;
  }
);

XSquareFilledCrossed.displayName = 'XSquareFilledCrossed';
