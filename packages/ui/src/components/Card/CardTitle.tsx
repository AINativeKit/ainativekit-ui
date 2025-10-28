import React from 'react';
import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { cn } from '../../utils/cn';
import styles from './CardParts.module.css';

export interface CardTitleProps extends ComponentPropsWithoutRef<'h2'> {
  /**
   * HTML element to render as
   * @default 'h2'
   */
  as?: ElementType;
  /**
   * Optional test ID for testing purposes
   */
  'data-testid'?: string;
}

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  (props, ref) => {
    const { as: Component = 'h2', className, children, 'data-testid': testId, ...rest } = props;

    return (
      <Component
        ref={ref}
        className={cn(styles.cardTitle, className)}
        data-testid={testId}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

CardTitle.displayName = 'Card.Title';
