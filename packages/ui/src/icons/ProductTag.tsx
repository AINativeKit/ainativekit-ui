import React from 'react';
import { Icon } from '../components/Icon';
import type { IconProps } from '../components/Icon';

/**
 * ProductTag icon from interface category
 *
 * @example
 * ```tsx
 * import { ProductTag } from '@ainativekit/ui/icons';
 *
 * // Common UI controls
<Button variant="ghost" iconOnly="product-tag" aria-label="Toggle" />

// With interactive state
<Icon name="product-tag" interactive onClick={handleClick} />
 * ```
 *
 * @accessibility
 * Interface icons often appear alone. Always provide aria-label on the parent button or interactive element.
 */
export const ProductTag = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>(
  (props, ref) => {
    return <Icon ref={ref} name="product-tag" {...props} />;
  }
);

ProductTag.displayName = 'ProductTag';
