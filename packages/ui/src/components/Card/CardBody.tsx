import React from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../utils/cn';
import styles from './CardParts.module.css';

export interface CardBodyProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Optional test ID for testing purposes
   */
  'data-testid'?: string;
}

export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  (props, ref) => {
    const { className, children, 'data-testid': testId, ...rest } = props;

    return (
      <div
        ref={ref}
        className={cn(styles.cardBody, className)}
        data-testid={testId}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

CardBody.displayName = 'Card.Body';
