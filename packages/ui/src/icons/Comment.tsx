import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * Comment icon from misc category
 *
 * @example
 * ```tsx
 * import { Comment } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="comment">
  Action
</Button>

// Standalone meaningful icon
<Icon name="comment" aria-label="comment" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const Comment = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="comment" {...props} />;
  }
);

Comment.displayName = 'Comment';
