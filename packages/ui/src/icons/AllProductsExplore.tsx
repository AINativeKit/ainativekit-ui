import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * AllProductsExplore icon from chat-tools category
 *
 * @example
 * ```tsx
 * import { AllProductsExplore } from '@ainativekit/ui/icons';
 *
 * // Action button with icon
<Button variant="secondary" leftIcon="all-products-explore">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="all-products-explore" aria-label="all products explore" />
 * ```
 *
 * @accessibility
 * Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.
 */
export const AllProductsExplore = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="all-products-explore" {...props} />;
  }
);

AllProductsExplore.displayName = 'AllProductsExplore';
