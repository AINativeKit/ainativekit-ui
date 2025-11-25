import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { SafeBrText } from './SafeBrText';
import styles from './ExpandableText.module.css';

export interface ExpandableTextProps {
  /**
   * Text content to display. Supports HTML <br> tags for line breaks.
   */
  text: string;

  /**
   * Maximum number of lines to show when collapsed
   * @default 5
   */
  maxLines?: number;

  /**
   * Label for expand button
   * @default 'View more'
   */
  expandLabel?: string;

  /**
   * Label for collapse button
   * @default 'View less'
   */
  collapseLabel?: string;

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Force expanded state (controlled component)
   */
  expanded?: boolean;

  /**
   * Callback when expanded state changes
   */
  onExpandChange?: (expanded: boolean) => void;
}

/**
 * ExpandableText - Text component with line-clamp and expand/collapse functionality.
 * Automatically detects if text needs truncation.
 *
 * @example
 * ```tsx
 * <ExpandableText
 *   text="Long description text..."
 *   maxLines={3}
 *   expandLabel="Read more"
 *   collapseLabel="Read less"
 * />
 * ```
 *
 * @example
 * // With HTML line breaks
 * ```tsx
 * <ExpandableText
 *   text="First paragraph<br/><br/>Second paragraph with line breaks"
 *   maxLines={3}
 * />
 * ```
 */
export const ExpandableText: React.FC<ExpandableTextProps> = ({
  text,
  maxLines = 5,
  expandLabel = 'View more',
  collapseLabel = 'View less',
  className,
  expanded: controlledExpanded,
  onExpandChange,
}) => {
  const [internalExpanded, setInternalExpanded] = useState(false);
  const [needsTruncation, setNeedsTruncation] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledExpanded !== undefined;
  const expanded = isControlled ? controlledExpanded : internalExpanded;

  // Detect if text needs truncation
  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // Compare scroll height with client height to determine if text is truncated
    const isOverflowing = element.scrollHeight > element.clientHeight;
    setNeedsTruncation(isOverflowing);
  }, [text, maxLines]);

  const handleToggle = () => {
    if (isControlled) {
      onExpandChange?.(!expanded);
    } else {
      setInternalExpanded(!expanded);
      onExpandChange?.(!expanded);
    }
  };

  return (
    <div className={cn(styles.expandableText, className)}>
      <div
        ref={textRef}
        className={cn(styles.text, !expanded && styles.clamped)}
        style={{
          WebkitLineClamp: expanded ? 'unset' : maxLines,
        }}
      >
        <SafeBrText text={text} />
      </div>
      {needsTruncation && (
        <button
          className={styles.toggleButton}
          onClick={handleToggle}
          type="button"
          aria-expanded={expanded}
        >
          {expanded ? collapseLabel : expandLabel}
        </button>
      )}
    </div>
  );
};

ExpandableText.displayName = 'ExpandableText';
