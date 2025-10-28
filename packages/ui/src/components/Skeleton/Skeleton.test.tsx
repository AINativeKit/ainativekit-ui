import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  describe('Rendering', () => {
    it('should render with default props', () => {
      render(<Skeleton data-testid="skeleton" />);
      const skeleton = screen.getByTestId('skeleton');
      expect(skeleton).toBeInTheDocument();
    });

    it('should apply rectangular variant by default', () => {
      render(<Skeleton data-testid="skeleton" />);
      const skeleton = screen.getByTestId('skeleton');
      expect(skeleton).toHaveClass('skeleton--rectangular');
    });

    it('should apply text variant', () => {
      render(<Skeleton variant="text" data-testid="skeleton" />);
      const skeleton = screen.getByTestId('skeleton');
      expect(skeleton).toHaveClass('skeleton--text');
    });

    it('should apply circular variant', () => {
      render(<Skeleton variant="circular" data-testid="skeleton" />);
      const skeleton = screen.getByTestId('skeleton');
      expect(skeleton).toHaveClass('skeleton--circular');
    });
  });

  describe('Animation', () => {
    it('should be animated by default', () => {
      render(<Skeleton data-testid="skeleton" />);
      const skeleton = screen.getByTestId('skeleton');
      expect(skeleton).toHaveClass('skeleton--animated');
    });

    it('should not be animated when animation is false', () => {
      render(<Skeleton animation={false} data-testid="skeleton" />);
      const skeleton = screen.getByTestId('skeleton');
      expect(skeleton).not.toHaveClass('skeleton--animated');
    });
  });

  describe('Dimensions', () => {
    it('should apply width as number', () => {
      render(<Skeleton width={200} data-testid="skeleton" />);
      const skeleton = screen.getByTestId('skeleton');
      expect(skeleton).toHaveStyle({ width: '200px' });
    });

    it('should apply width as string', () => {
      render(<Skeleton width="80%" data-testid="skeleton" />);
      const skeleton = screen.getByTestId('skeleton');
      expect(skeleton).toHaveStyle({ width: '80%' });
    });

    it('should apply height as number', () => {
      render(<Skeleton height={100} data-testid="skeleton" />);
      const skeleton = screen.getByTestId('skeleton');
      expect(skeleton).toHaveStyle({ height: '100px' });
    });

    it('should apply height as string', () => {
      render(<Skeleton height="50vh" data-testid="skeleton" />);
      const skeleton = screen.getByTestId('skeleton');
      expect(skeleton).toHaveStyle({ height: '50vh' });
    });
  });

  describe('Accessibility', () => {
    it('should have aria-busy attribute', () => {
      render(<Skeleton data-testid="skeleton" />);
      const skeleton = screen.getByTestId('skeleton');
      expect(skeleton).toHaveAttribute('aria-busy', 'true');
    });

    it('should have aria-live attribute', () => {
      render(<Skeleton data-testid="skeleton" />);
      const skeleton = screen.getByTestId('skeleton');
      expect(skeleton).toHaveAttribute('aria-live', 'polite');
    });
  });

  describe('Custom Props', () => {
    it('should apply custom className', () => {
      render(<Skeleton className="custom-class" data-testid="skeleton" />);
      const skeleton = screen.getByTestId('skeleton');
      expect(skeleton).toHaveClass('custom-class');
    });

    it('should apply custom style', () => {
      render(<Skeleton style={{ opacity: 0.5 }} data-testid="skeleton" />);
      const skeleton = screen.getByTestId('skeleton');
      expect(skeleton).toHaveStyle({ opacity: '0.5' });
    });

    it('should forward ref', () => {
      const ref = { current: null };
      render(<Skeleton ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });
});
