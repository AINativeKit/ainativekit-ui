import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * CodeSquareSlash icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { CodeSquareSlash } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="code-square-slash">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="code-square-slash" aria-label="code square slash" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const CodeSquareSlash = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="code-square-slash" {...props} />;
  }
);

CodeSquareSlash.displayName = 'CodeSquareSlash';
