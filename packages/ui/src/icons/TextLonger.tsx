import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * TextLonger icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { TextLonger } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="text-longer">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="text-longer" aria-label="text longer" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const TextLonger = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="text-longer" {...props} />;
  }
);

TextLonger.displayName = 'TextLonger';
