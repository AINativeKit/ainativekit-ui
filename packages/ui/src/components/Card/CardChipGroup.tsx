import React from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../utils/cn';
import styles from './CardParts.module.css';

export interface CardChipGroupProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Optional test ID for testing purposes
   */
  'data-testid'?: string;
}

export const CardChipGroup = React.forwardRef<HTMLDivElement, CardChipGroupProps>((props, ref) => {
  const { className, children, 'data-testid': testId, ...rest } = props;

  return (
    <div ref={ref} className={cn(styles.cardChipGroup, className)} data-testid={testId} {...rest}>
      {children}
    </div>
  );
});

CardChipGroup.displayName = 'Card.ChipGroup';
