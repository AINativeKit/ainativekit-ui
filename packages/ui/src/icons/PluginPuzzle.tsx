import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * PluginPuzzle icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { PluginPuzzle } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="plugin-puzzle">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="plugin-puzzle" aria-label="plugin puzzle" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const PluginPuzzle = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="plugin-puzzle" {...props} />;
  }
);

PluginPuzzle.displayName = 'PluginPuzzle';
