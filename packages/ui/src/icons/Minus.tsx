import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Minus icon from interface category
 *
 * @example
 * ```tsx
 * import { Minus } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="minus" aria-label="Toggle" />

// With interactive state
<Icon name="minus" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const Minus = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="minus" {...props} />;
});

Minus.displayName = 'Minus';
