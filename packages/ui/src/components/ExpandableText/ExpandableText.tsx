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
   * @default 'view more'
   */
  expandLabel?: string;

  /**
   * Label for collapse button
   * @default 'view less'
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
  expandLabel = 'view more',
  collapseLabel = 'view less',
  className,
  expanded: controlledExpanded,
  onExpandChange,
}) => {
  const [internalExpanded, setInternalExpanded] = useState(false);
  const [needsTruncation, setNeedsTruncation] = useState(false);
  const [truncatedText, setTruncatedText] = useState(text);
  const textRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledExpanded !== undefined;
  const expanded = isControlled ? controlledExpanded : internalExpanded;

  // JavaScript-based truncation to insert button inline
  useEffect(() => {
    const element = textRef.current;
    if (!element || expanded) return;

    const checkAndTruncate = () => {
      // Get line height
      const styles = getComputedStyle(element);
      const lineHeight = parseFloat(styles.lineHeight);
      const maxHeight = lineHeight * maxLines;

      // Create a temporary element to measure
      const tempElement = element.cloneNode(true) as HTMLDivElement;
      tempElement.style.position = 'absolute';
      tempElement.style.visibility = 'hidden';
      tempElement.style.width = element.offsetWidth + 'px';
      tempElement.style.whiteSpace = 'pre-wrap';
      tempElement.style.wordWrap = 'break-word';
      document.body.appendChild(tempElement);

      // Check if full text fits
      tempElement.innerHTML = '';
      tempElement.appendChild(document.createTextNode(text));

      if (tempElement.scrollHeight <= maxHeight) {
        setNeedsTruncation(false);
        setTruncatedText(text);
        document.body.removeChild(tempElement);
        return;
      }

      // Binary search for truncation point
      let low = 0;
      let high = text.length;
      let bestFit = text.substring(0, 50); // Default fallback

      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const testText = text.substring(0, mid);

        tempElement.innerHTML = '';
        tempElement.textContent = testText + '... ' + expandLabel;

        if (tempElement.scrollHeight <= maxHeight) {
          bestFit = testText;
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }

      document.body.removeChild(tempElement);
      setTruncatedText(bestFit);
      setNeedsTruncation(true);
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(checkAndTruncate);
    });
  }, [text, maxLines, expanded, expandLabel]);

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
      <div ref={textRef} className={styles.text}>
        {!expanded && needsTruncation ? (
          <>
            <SafeBrText text={truncatedText} />
            ...{' '}
            <button
              className={styles.toggleButton}
              onClick={handleToggle}
              type="button"
              aria-expanded={expanded}
            >
              {expandLabel}
            </button>
          </>
        ) : (
          <>
            <SafeBrText text={text} />
            {needsTruncation && expanded && (
              <>
                {' '}
                <button
                  className={styles.toggleButton}
                  onClick={handleToggle}
                  type="button"
                  aria-expanded={expanded}
                >
                  {collapseLabel}
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

ExpandableText.displayName = 'ExpandableText';
