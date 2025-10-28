import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * TextShorter icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { TextShorter } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="text-shorter">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="text-shorter" aria-label="text shorter" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const TextShorter = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="text-shorter" {...props} />;
  }
);

TextShorter.displayName = 'TextShorter';
