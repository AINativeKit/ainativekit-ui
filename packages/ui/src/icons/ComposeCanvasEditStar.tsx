import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ComposeCanvasEditStar icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { ComposeCanvasEditStar } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="compose-canvas-edit-star">
  Edit
</Button>

// Toolbar icon button
<Button iconOnly="compose-canvas-edit-star" aria-label="compose canvas edit star" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const ComposeCanvasEditStar = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="compose-canvas-edit-star" {...props} />;
  }
);

ComposeCanvasEditStar.displayName = 'ComposeCanvasEditStar';
