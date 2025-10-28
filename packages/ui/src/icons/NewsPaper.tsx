import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * NewsPaper icon from misc category
 *
 * @example
 * ```tsx
 * import { NewsPaper } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="news-paper">
  Action
</Button>

// Standalone meaningful icon
<Icon name="news-paper" aria-label="news paper" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const NewsPaper = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="news-paper" {...props} />;
  }
);

NewsPaper.displayName = 'NewsPaper';
