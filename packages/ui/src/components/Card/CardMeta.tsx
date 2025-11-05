import React from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../utils/cn';
import styles from './CardParts.module.css';

export interface CardMetaProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Optional test ID for testing purposes
   */
  'data-testid'?: string;
}

export const CardMeta = React.forwardRef<HTMLDivElement, CardMetaProps>((props, ref) => {
  const { className, children, 'data-testid': testId, ...rest } = props;

  return (
    <div ref={ref} className={cn(styles.cardMeta, className)} data-testid={testId} {...rest}>
      {children}
    </div>
  );
});

CardMeta.displayName = 'Card.Meta';
