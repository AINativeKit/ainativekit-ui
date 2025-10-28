import React from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../utils/cn';
import styles from './Skeleton.module.css';

export type SkeletonVariant = 'text' | 'rectangular' | 'circular';

export interface SkeletonProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * The shape variant of the skeleton
   * @default 'rectangular'
   */
  variant?: SkeletonVariant;

  /**
   * Width of the skeleton. Can be a number (px) or CSS string
   */
  width?: number | string;

  /**
   * Height of the skeleton. Can be a number (px) or CSS string
   */
  height?: number | string;

  /**
   * Border radius of the skeleton. Can be a number (px) or CSS string
   */
  borderRadius?: number | string;

  /**
   * Whether to animate the skeleton
   * @default true
   */
  animation?: boolean;

  /**
   * Optional test ID for testing purposes
   */
  'data-testid'?: string;
}

/**
 * Skeleton component for loading states
 * 
 * @example
 * ```tsx
 * // Text skeleton
 * <Skeleton variant="text" width="80%" />
 * 
 * // Rectangular skeleton (default)
 * <Skeleton width={200} height={100} />
 * 
 * // Circular skeleton (avatar)
 * <Skeleton variant="circular" width={40} height={40} />
 * 
 * // Without animation
 * <Skeleton animation={false} />
 * ```
 */
export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>((props, ref) => {
  const {
    variant = 'rectangular',
    width,
    height,
    borderRadius,
    animation = true,
    className,
    style,
    'data-testid': testId,
    ...rest
  } = props;

  const normalizedWidth = typeof width === 'number' ? `${width}px` : width;
  const normalizedHeight = typeof height === 'number' ? `${height}px` : height;
  const normalizedBorderRadius = typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius;

  const inlineStyle = {
    ...(normalizedWidth && { width: normalizedWidth }),
    ...(normalizedHeight && { height: normalizedHeight }),
    ...(normalizedBorderRadius && { borderRadius: normalizedBorderRadius }),
    ...style,
  };

  return (
    <div
      ref={ref}
      className={cn(
        styles.skeleton,
        styles[`skeleton--${variant}`],
        animation && styles['skeleton--animated'],
        className
      )}
      style={inlineStyle}
      data-testid={testId}
      aria-busy="true"
      aria-live="polite"
      {...rest}
    />
  );
});

Skeleton.displayName = 'Skeleton';
