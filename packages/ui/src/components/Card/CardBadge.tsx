import React from 'react';
import { Badge, type BadgeProps } from '../Badge';

export interface CardBadgeProps extends BadgeProps {
  /**
   * Optional test ID for testing purposes
   */
  'data-testid'?: string;
}

/**
 * Card.Badge - Wrapper around the Badge primitive optimized for card usage
 * 
 * @example
 * ```tsx
 * <Card.Header>
 *   <Card.Title>Product Name</Card.Title>
 *   <Card.Badge variant="success">New</Card.Badge>
 * </Card.Header>
 * ```
 */
export const CardBadge = React.forwardRef<HTMLSpanElement, CardBadgeProps>(
  (props, ref) => {
    return <Badge ref={ref} {...props} />;
  }
);

CardBadge.displayName = 'Card.Badge';
