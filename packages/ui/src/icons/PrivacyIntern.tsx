import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * PrivacyIntern icon from account-user category
 *
 * @example
 * ```tsx
 * import { PrivacyIntern } from '@ainativekit/ui/icons';
 *
 * // Most common: Decorative in buttons
<Button variant="primary" leftIcon="privacy-intern">
  View Profile
</Button>

// Icon-only button (needs aria-label)
<Button iconOnly="privacy-intern" aria-label="User profile" />
 * ```
 *
 * @accessibility
 * Usually decorative when paired with text. For icon-only buttons, add aria-label to the Button.
 */
export const PrivacyIntern = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="privacy-intern" {...props} />;
  }
);

PrivacyIntern.displayName = 'PrivacyIntern';
