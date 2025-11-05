import React from 'react';
import { Button } from '../Button';
import { Chip } from '../Chip';
import { Features } from '../Feature';
import type { FeatureItem } from '../Feature';
import type { IconName } from '../../tokens/icons';
import { typography } from '../../tokens/typography';
import { cn } from '../../utils/cn';
import styles from './DiscoveryCard.module.css';

export interface DiscoveryCardProps {
  /**
   * Card image URL
   */
  image: string;

  /**
   * Alt text for image (accessibility)
   */
  imageAlt?: string;

  /**
   * Main heading/title
   */
  title: string;

  /**
   * Location or subtitle text (e.g., address, location)
   */
  subtitle: string;

  /**
   * Rating or badge content (e.g., "4.8" or "9.2")
   */
  badge: string;

  /**
   * Icon to display in the badge (e.g., 'star', 'star-filled')
   * @default undefined
   */
  badgeIcon?: IconName;

  /**
   * Array of feature items (strings or icon-label pairs)
   * @example
   * ["Neapolitan", "Wood-fired"]
   * [{ icon: "star-filled", label: "4.8" }, "Wood-fired"]
   */
  features: FeatureItem[];

  /**
   * Short description (typically 1-2 lines)
   */
  description: string;

  /**
   * Primary button text (e.g., "Order now", "Book", "View")
   * @default "Order now"
   */
  buttonText?: string;

  /**
   * Callback when primary button is clicked
   */
  onButtonClick?: () => void;

  /**
   * Optional className for styling
   */
  className?: string;

  /**
   * Optional inline styles
   */
  style?: React.CSSProperties;

  /**
   * Card width (default: "220px" for carousel use)
   * @default "220px"
   */
  width?: string;
}

/**
 * DiscoveryCard - A discovery/browsing card optimized for carousels and discovery interfaces.
 *
 * Perfect for:
 * - Restaurant discovery (OpenAI Pizzaz style)
 * - Product catalogs
 * - Hotel/travel search
 * - Content discovery
 *
 * Features:
 * - 4:3 aspect ratio images (natural, balanced)
 * - Flexible badge with icon support
 * - Flexible features display with dot separator (text or icon+label)
 * - Compact, scannable layout
 * - Single call-to-action button
 * - Full design token integration (typography, spacing, colors)
 *
 * @example
 * ```tsx
 * <DiscoveryCard
 *   image="https://example.com/pizza.jpg"
 *   imageAlt="Pizza"
 *   title="Tony's Pizzeria"
 *   subtitle="123 Main St"
 *   badge="4.8"
 *   badgeIcon="star"
 *   features={["Neapolitan", "Wood-fired"]}
 *   description="Award-winning pizza since 1985"
 *   buttonText="Order now"
 *   onButtonClick={() => handleOrder()}
 * />
 * ```
 */
export const DiscoveryCard = React.forwardRef<HTMLDivElement, DiscoveryCardProps>((props, ref) => {
  const {
    image,
    imageAlt = '',
    title,
    subtitle,
    badge,
    badgeIcon,
    features,
    description,
    buttonText = 'Order now',
    onButtonClick,
    className,
    style,
    width = '220px',
  } = props;

  return (
    <div
      ref={ref}
      className={cn(styles.card, className)}
      style={{
        width,
        ...style,
      }}
    >
      {/* Image Container */}
      <div className={styles.imageContainer}>
        <img src={image} alt={imageAlt || title} className={styles.image} />
      </div>

      {/* Content Container */}
      <div className={styles.contentContainer}>
        {/* Title + Badge Header */}
        <div className={styles.header}>
          <h3
            className={styles.title}
            style={{
              fontSize: typography.bodyEmph.fontSize,
              fontWeight: typography.bodyEmph.fontWeight,
              letterSpacing: typography.bodyEmph.letterSpacing,
            }}
          >
            {title}
          </h3>
          <div className={styles.badge}>
            <Chip variant="neutral" size="sm" leftIcon={badgeIcon}>
              {badge}
            </Chip>
          </div>
        </div>

        {/* Location/Subtitle */}
        <p
          className={styles.subtitle}
          style={{
            fontSize: typography.caption.fontSize,
            fontWeight: typography.caption.fontWeight,
            letterSpacing: typography.caption.letterSpacing,
          }}
        >
          {subtitle}
        </p>

        {/* Features */}
        {features && features.length > 0 && (
          <div
            style={{
              marginBottom: 'var(--ai-spacing-4)',
              fontSize: typography.caption.fontSize,
              fontWeight: typography.caption.fontWeight,
              letterSpacing: typography.caption.letterSpacing,
            }}
          >
            <Features items={features} />
          </div>
        )}

        {/* Description */}
        <p
          className={styles.description}
          style={{
            fontSize: typography.caption.fontSize,
            fontWeight: typography.caption.fontWeight,
            letterSpacing: typography.caption.letterSpacing,
          }}
        >
          {description}
        </p>

        {/* Action Button */}
        <Button className={styles.button} variant="primary" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
});

DiscoveryCard.displayName = 'DiscoveryCard';
