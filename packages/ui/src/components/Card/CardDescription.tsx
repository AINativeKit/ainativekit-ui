import React from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../utils/cn';
import styles from './CardParts.module.css';

export interface CardDescriptionProps extends ComponentPropsWithoutRef<'p'> {
  /**
   * Optional test ID for testing purposes
   */
  'data-testid'?: string;
}

export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  (props, ref) => {
    const { className, children, 'data-testid': testId, ...rest } = props;

    return (
      <p ref={ref} className={cn(styles.cardDescription, className)} data-testid={testId} {...rest}>
        {children}
      </p>
    );
  }
);

CardDescription.displayName = 'Card.Description';
