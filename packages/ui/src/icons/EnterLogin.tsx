import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * EnterLogin icon from interface category
 *
 * @example
 * ```tsx
 * import { EnterLogin } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="enter-login" aria-label="Toggle" />

// With interactive state
<Icon name="enter-login" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const EnterLogin = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="enter-login" {...props} />;
  }
);

EnterLogin.displayName = 'EnterLogin';
