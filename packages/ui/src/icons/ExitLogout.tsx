import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ExitLogout icon from interface category
 *
 * @example
 * ```tsx
 * import { ExitLogout } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="exit-logout" aria-label="Toggle" />

// With interactive state
<Icon name="exit-logout" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const ExitLogout = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="exit-logout" {...props} />;
  }
);

ExitLogout.displayName = 'ExitLogout';
