import { render, screen } from '@testing-library/react';
import React from 'react';
import { Badge } from './Badge';

describe('Badge', () => {
  describe('Rendering', () => {
    it('renders badge with text content', () => {
      render(<Badge>9.2</Badge>);
      expect(screen.getByText('9.2')).toBeInTheDocument();
    });

    it('renders default variant by default', () => {
      const { container } = render(<Badge>Test</Badge>);
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('badgeDefault');
    });

    it('renders filled variant when specified', () => {
      const { container } = render(<Badge variant="filled">5</Badge>);
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('badgeFilled');
    });

    it('renders success variant when specified', () => {
      const { container } = render(<Badge variant="success">✓</Badge>);
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('badgeSuccess');
    });

    it('renders warning variant when specified', () => {
      const { container } = render(<Badge variant="warning">!</Badge>);
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('badgeWarning');
    });

    it('renders error variant when specified', () => {
      const { container } = render(<Badge variant="error">×</Badge>);
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('badgeError');
    });

    it('renders neutral variant when specified', () => {
      const { container } = render(<Badge variant="neutral">AI</Badge>);
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('badgeNeutral');
    });
  });

  describe('Content', () => {
    it('renders number content', () => {
      render(<Badge>99+</Badge>);
      expect(screen.getByText('99+')).toBeInTheDocument();
    });

    it('renders text content', () => {
      render(<Badge>Pro</Badge>);
      expect(screen.getByText('Pro')).toBeInTheDocument();
    });

    it('renders symbol content', () => {
      render(<Badge>✓</Badge>);
      expect(screen.getByText('✓')).toBeInTheDocument();
    });

    it('renders single letter content', () => {
      render(<Badge>A</Badge>);
      expect(screen.getByText('A')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('renders as a span element', () => {
      const { container } = render(<Badge>Test</Badge>);
      const badge = container.firstChild as HTMLElement;
      expect(badge.tagName).toBe('SPAN');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLSpanElement>();
      render(<Badge ref={ref}>Badge</Badge>);
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });

    it('passes through native div attributes', () => {
      render(
        <Badge role="status" aria-label="Rating">
          9.2
        </Badge>
      );
      const badge = screen.getByRole('status');
      expect(badge).toHaveAttribute('aria-label', 'Rating');
    });
  });

  describe('Custom Styling', () => {
    it('applies custom className', () => {
      const { container } = render(<Badge className="custom-class">Test</Badge>);
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('custom-class');
    });

    it('merges custom className with default classes', () => {
      const { container } = render(<Badge className="custom-class">Test</Badge>);
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('badge');
      expect(badge).toHaveClass('badgeDefault');
      expect(badge).toHaveClass('custom-class');
    });

    it('applies custom styles', () => {
      const { container } = render(<Badge style={{ marginLeft: '10px' }}>Test</Badge>);
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveStyle({ marginLeft: '10px' });
    });
  });

  describe('Variants', () => {
    it('applies correct class for each variant', () => {
      const variants: Array<{
        variant: 'default' | 'filled' | 'success' | 'warning' | 'error' | 'neutral';
        expectedClass: string;
      }> = [
        { variant: 'default', expectedClass: 'badgeDefault' },
        { variant: 'filled', expectedClass: 'badgeFilled' },
        { variant: 'success', expectedClass: 'badgeSuccess' },
        { variant: 'warning', expectedClass: 'badgeWarning' },
        { variant: 'error', expectedClass: 'badgeError' },
        { variant: 'neutral', expectedClass: 'badgeNeutral' },
      ];

      variants.forEach(({ variant, expectedClass }) => {
        const { container } = render(<Badge variant={variant}>Test</Badge>);
        const badge = container.firstChild as HTMLElement;
        expect(badge).toHaveClass(expectedClass);
      });
    });
  });

  describe('Base Styling', () => {
    it('always applies base badge class', () => {
      const { container } = render(<Badge>Test</Badge>);
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('badge');
    });

    it('applies base badge class with all variants', () => {
      const variants = ['default', 'filled', 'success', 'warning', 'error', 'neutral'] as const;

      variants.forEach((variant) => {
        const { container } = render(<Badge variant={variant}>Test</Badge>);
        const badge = container.firstChild as HTMLElement;
        expect(badge).toHaveClass('badge');
      });
    });
  });
});
