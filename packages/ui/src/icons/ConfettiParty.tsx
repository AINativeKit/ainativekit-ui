import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ConfettiParty icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { ConfettiParty } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="confetti-party">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="confetti-party" aria-label="confetti party" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const ConfettiParty = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="confetti-party" {...props} />;
  }
);

ConfettiParty.displayName = 'ConfettiParty';
