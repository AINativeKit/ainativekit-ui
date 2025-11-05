import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Equal icon from interface category
 *
 * @example
 * ```tsx
 * import { Equal } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="equal" aria-label="Toggle" />

// With interactive state
<Icon name="equal" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const Equal = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => {
  return <Icon ref={ref} name="equal" {...props} />;
});

Equal.displayName = 'Equal';
