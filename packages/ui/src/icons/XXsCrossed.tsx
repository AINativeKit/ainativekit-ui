import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * XXsCrossed icon from interface category
 *
 * @example
 * ```tsx
 * import { XXsCrossed } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="x-xs-crossed" aria-label="Toggle" />

// With interactive state
<Icon name="x-xs-crossed" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const XXsCrossed = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="x-xs-crossed" {...props} />;
  }
);

XXsCrossed.displayName = 'XXsCrossed';
