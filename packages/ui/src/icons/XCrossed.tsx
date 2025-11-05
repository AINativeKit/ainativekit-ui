import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * XCrossed icon from interface category
 *
 * @example
 * ```tsx
 * import { XCrossed } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="x-crossed" aria-label="Toggle" />

// With interactive state
<Icon name="x-crossed" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const XCrossed = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="x-crossed" {...props} />;
});

XCrossed.displayName = 'XCrossed';
