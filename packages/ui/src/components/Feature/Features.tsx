import React from 'react';
import { Icon } from '../Icon';
import type { IconName } from '../../tokens/icons';
import { cn } from '../../utils/cn';
import styles from './Features.module.css';

export type FeatureItem = string | { icon?: IconName; label: string };

export interface FeaturesProps {
  /**
   * Array of feature items
   * Can be strings or objects with optional icon and label
   * @example
   * ["Feature1", "Feature2"]
   * [{ icon: "star-filled", label: "4.8" }, "Feature2"]
   */
  items: FeatureItem[];

  /**
   * Separator between items (default: "•")
   * @default "•"
   */
  separator?: string;

  /**
   * Icon size (default: 14)
   * @default 14
   */
  iconSize?: number;

  /**
   * Additional className
   */
  className?: string;

  /**
   * Inline styles
   */
  style?: React.CSSProperties;
}

/**
 * Features component - Displays a list of features separated by dots
 *
 * Flexible component that can show simple text items or icon-label pairs
 * Perfect for displaying tags, features, attributes across the design system
 *
 * @example
 * ```tsx
 * // Simple strings
 * <Features items={["Neapolitan", "Wood-fired"]} />
 *
 * // With icons
 * <Features items={[
 *   { icon: "star-filled", label: "4.8" },
 *   "Wood-fired"
 * ]} />
 * ```
 */
export const Features = React.forwardRef<HTMLDivElement, FeaturesProps>(
  (
    { items, separator = '•', iconSize = 14, className, style },
    ref
  ) => {
    return (
      <div ref={ref} className={cn(styles.feature, className)} style={style}>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          const isObject = typeof item === 'object';
          const label = isObject ? item.label : item;
          const icon = isObject ? item.icon : undefined;

          return (
            <React.Fragment key={`${label}-${idx}`}>
              <span className={styles.item}>
                {icon && (
                  <Icon
                    name={icon}
                    size={iconSize}
                    className={styles.icon}
                  />
                )}
                <span>{label}</span>
              </span>
              {!isLast && <span className={styles.separator}>{separator}</span>}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
);

Features.displayName = 'Features';
