import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * KeyboardShortcut icon from settings category
 *
 * @example
 * ```tsx
 * import { KeyboardShortcut } from '@ainativekit/ui/icons';
 *
 * // Settings action
<Button variant="secondary" leftIcon="keyboard-shortcut">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="keyboard-shortcut">
  Configure
</Button>
 * ```
 *
 * @accessibility
 * Settings icons are decorative when accompanied by descriptive text labels.
 */
export const KeyboardShortcut = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="keyboard-shortcut" {...props} />;
  }
);

KeyboardShortcut.displayName = 'KeyboardShortcut';
