import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * XSquareCrossed icon from interface category
 *
 * @example
 * ```tsx
 * import { XSquareCrossed } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="x-square-crossed" aria-label="Toggle" />

// With interactive state
<Icon name="x-square-crossed" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const XSquareCrossed = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="x-square-crossed" {...props} />;
  }
);

XSquareCrossed.displayName = 'XSquareCrossed';
