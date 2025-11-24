import React from 'react';

export interface SafeBrTextProps {
  /**
   * Text content that may contain HTML <br> tags
   */
  text: string;
}

/**
 * SafeBrText - Safely renders text with <br> tags converted to actual line breaks.
 * Only processes <br>, <br/>, and <br /> tags (case-insensitive).
 * All other HTML is rendered as plain text.
 *
 * @example
 * ```tsx
 * <SafeBrText text="Line 1<br>Line 2<br/>Line 3" />
 * // Renders:
 * // Line 1
 * // Line 2
 * // Line 3
 * ```
 */
export const SafeBrText: React.FC<SafeBrTextProps> = ({ text }) => {
  // Split on <br> variants (case-insensitive), trimming spaces
  const parts = text.split(/<br\s*\/?>/i);

  return (
    <>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < parts.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
};

SafeBrText.displayName = 'SafeBrText';
