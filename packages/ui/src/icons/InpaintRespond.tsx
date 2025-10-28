import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * InpaintRespond icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { InpaintRespond } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="inpaint-respond">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="inpaint-respond" aria-label="inpaint respond" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const InpaintRespond = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="inpaint-respond" {...props} />;
  }
);

InpaintRespond.displayName = 'InpaintRespond';
