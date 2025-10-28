import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * SelectText icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { SelectText } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="select-text">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="select-text" aria-label="select text" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const SelectText = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="select-text" {...props} />;
  }
);

SelectText.displayName = 'SelectText';
