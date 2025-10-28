import React from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../utils/cn';
import styles from './CardParts.module.css';

export interface CardImageProps extends ComponentPropsWithoutRef<'img'> {
  /**
   * Image source URL
   */
  src: string;
  /**
   * Alt text for accessibility
   */
  alt: string;
  /**
   * Optional test ID for testing purposes
   */
  'data-testid'?: string;
}

export const CardImage = React.forwardRef<HTMLImageElement, CardImageProps>(
  (props, ref) => {
    const { className, src, alt, 'data-testid': testId, ...rest } = props;

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={cn(styles.cardImage, className)}
        data-testid={testId}
        {...rest}
      />
    );
  }
);

CardImage.displayName = 'Card.Image';
