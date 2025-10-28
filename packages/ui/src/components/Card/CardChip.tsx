import React from 'react';
import { Chip, type ChipProps } from '../Chip';

export interface CardChipProps extends ChipProps {
  /**
   * Optional test ID for testing purposes
   */
  'data-testid'?: string;
}

/**
 * Card.Chip - Wrapper around the Chip primitive optimized for card usage
 * 
 * Use Chip for text labels, tags, and categories (vs Badge for counts/dots).
 * 
 * @example
 * ```tsx
 * <Card.Body>
 *   <div style={{ display: 'flex', gap: '8px' }}>
 *     <Card.Chip variant="neutral" size="sm">Design</Card.Chip>
 *     <Card.Chip variant="neutral" size="sm">Systems</Card.Chip>
 *   </div>
 * </Card.Body>
 * ```
 * 
 * @example
 * ```tsx
 * <Card.Header>
 *   <Card.Title>Product Name</Card.Title>
 *   <Card.Chip variant="success" size="sm">New</Card.Chip>
 * </Card.Header>
 * ```
 */
export const CardChip = React.forwardRef<HTMLSpanElement | HTMLButtonElement, CardChipProps>(
  (props, ref) => {
    return <Chip ref={ref} {...props} />;
  }
);

CardChip.displayName = 'Card.Chip';
