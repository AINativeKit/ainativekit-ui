import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * FilePresentation icon from misc category
 *
 * @example
 * ```tsx
 * import { FilePresentation } from '@ainativekit/ui/icons';
 *
 * // Decorative icon with text
<Button leftIcon="file-presentation">
  Action
</Button>

// Standalone meaningful icon
<Icon name="file-presentation" aria-label="file presentation" />
 * ```
 *
 * @accessibility
 * Most misc icons are decorative. Only add aria-label directly to Icon when conveying unique information without text.
 */
export const FilePresentation = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="file-presentation" {...props} />;
  }
);

FilePresentation.displayName = 'FilePresentation';
