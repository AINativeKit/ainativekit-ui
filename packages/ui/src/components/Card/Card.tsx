import React from 'react';
import type { ComponentPropsWithoutRef, CSSProperties } from 'react';
import { cn } from '../../utils/cn';
import type { ElevationLevel } from '../../tokens/elevation';
import styles from './Card.module.css';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';
import { CardImage } from './CardImage';
import { CardActions, CardActionButton } from './CardActions';
import { CardTitle } from './CardTitle';
import { CardDescription } from './CardDescription';
import { CardBadge } from './CardBadge';
import { CardChip } from './CardChip';
import { Skeleton } from '../Skeleton';
import { Alert } from '../Alert';

export type CardBorder = 'light' | 'default' | 'heavy';

export interface CardProps extends Omit<ComponentPropsWithoutRef<'div'>, 'color'> {
  /**
   * Elevation level for the card.
   * @default '1'
   */
  elevationLevel?: ElevationLevel;
  /**
   * Border weight token.
   * @default 'heavy'
   */
  border?: CardBorder;
  /**
   * Elevation applied on hover when `interactive` is true.
   * Defaults to the next elevation level.
   */
  hoverElevationLevel?: ElevationLevel;
  /**
   * Enables hover affordance.
   * @default false
   */
  interactive?: boolean;
  /**
   * Padding for the card. Can be a CSS value string or number (in px).
   * @default 'var(--ai-spacing-16)'
   */
  padding?: string | number;
  /**
   * Show loading skeleton state
   * @default false
   */
  loading?: boolean;
  /**
   * Custom skeleton content to show when loading
   * If not provided, shows default skeleton layout
   */
  skeleton?: React.ReactNode;
  /**
   * Show error state
   * @default false
   */
  error?: boolean;
  /**
   * Error title to display
   * @default 'Something went wrong'
   */
  errorTitle?: string;
  /**
   * Error message to display
   */
  errorMessage?: string;
  /**
   * Retry handler for error state
   * When provided, shows a retry button
   */
  onErrorRetry?: () => void;
  /**
   * Custom error content to show when error is true
   * If not provided, shows default error message
   */
  errorContent?: React.ReactNode;
  /**
   * Optional test ID for testing purposes
   */
  'data-testid'?: string;
}

const BORDER_TOKENS: Record<CardBorder, string> = {
  light: 'var(--ai-color-border-light)',
  default: 'var(--ai-color-border-default)',
  heavy: 'var(--ai-color-border-heavy)',
};

const clampElevation = (level: number): ElevationLevel => {
  const clamped = Math.max(0, Math.min(5, level));
  return clamped.toString() as ElevationLevel;
};

const CardBase = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    elevationLevel = '1',
    border = 'heavy',
    hoverElevationLevel,
    interactive = false,
    padding = 'var(--ai-spacing-16)',
    loading = false,
    skeleton,
    error = false,
    errorTitle,
    errorMessage,
    onErrorRetry,
    errorContent,
    className,
    style,
    children,
    'data-testid': testId,
    ...rest
  } = props;

  const hoverLevel = hoverElevationLevel ?? clampElevation(Number(elevationLevel) + (interactive ? 1 : 0));
  const elevationShadowVar = `var(--ai-elevation-${elevationLevel}-shadow)`;
  const hoverShadowVar = `var(--ai-elevation-${hoverLevel}-shadow)`;
  const elevationOverlayVar = `var(--ai-elevation-${elevationLevel}-overlay)`;

  const baseStyle: CSSProperties = {
    '--card-border-color': BORDER_TOKENS[border],
    '--card-shadow-value': elevationShadowVar,
    '--card-hover-shadow-value': hoverShadowVar,
    '--card-overlay-light': elevationOverlayVar,
    '--card-overlay-dark': elevationOverlayVar,
    padding: typeof padding === 'number' ? `${padding}px` : padding,
  } as React.CSSProperties;

  const mergedStyle = { ...baseStyle, ...style } as CSSProperties;

  // Default skeleton layout if loading and no custom skeleton provided
  const defaultSkeleton = (
    <>
      <Skeleton height={200} style={{ marginBottom: 12 }} />
      <Skeleton variant="text" width="60%" style={{ marginBottom: 8 }} />
      <Skeleton variant="text" width="80%" />
    </>
  );

  // Default error layout if error and no custom error content provided
  const defaultError = (
    <Alert
      layout="card"
      title={errorTitle}
      message={errorMessage}
      onAction={onErrorRetry}
    />
  );

  // Determine what to render
  let content: React.ReactNode;
  if (loading) {
    content = skeleton ?? defaultSkeleton;
  } else if (error) {
    content = errorContent ?? defaultError;
  } else {
    content = children;
  }

  return (
    <div
      ref={ref}
      className={cn(styles.card, className)}
      style={mergedStyle}
      data-hover={interactive}
      data-interactive={interactive}
      data-testid={testId}
      aria-busy={loading}
      {...rest}
    >
      {content}
    </div>
  );
});

CardBase.displayName = 'Card';

// Compound Components
const CardWithCompounds = Object.assign(CardBase, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
  Image: CardImage,
  Actions: CardActions,
  ActionButton: CardActionButton,
  Title: CardTitle,
  Description: CardDescription,
  Badge: CardBadge,
  Chip: CardChip,
});

export { CardWithCompounds as Card };
