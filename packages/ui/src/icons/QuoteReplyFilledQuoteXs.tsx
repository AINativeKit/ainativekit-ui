import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * QuoteReplyFilledQuoteXs icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { QuoteReplyFilledQuoteXs } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="quote-reply-filled-quote-xs">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="quote-reply-filled-quote-xs" aria-label="quote reply filled quote xs" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const QuoteReplyFilledQuoteXs = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="quote-reply-filled-quote-xs" {...props} />;
  }
);

QuoteReplyFilledQuoteXs.displayName = 'QuoteReplyFilledQuoteXs';
