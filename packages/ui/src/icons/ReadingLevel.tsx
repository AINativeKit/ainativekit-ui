import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ReadingLevel icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { ReadingLevel } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="reading-level">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="reading-level" aria-label="reading level" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const ReadingLevel = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="reading-level" {...props} />;
  }
);

ReadingLevel.displayName = 'ReadingLevel';
