import React from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../utils/cn';
import styles from './CardParts.module.css';

export interface CardFooterProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Optional test ID for testing purposes
   */
  'data-testid'?: string;
}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>((props, ref) => {
  const { className, children, 'data-testid': testId, ...rest } = props;

  return (
    <div ref={ref} className={cn(styles.cardFooter, className)} data-testid={testId} {...rest}>
      {children}
    </div>
  );
});

CardFooter.displayName = 'Card.Footer';
