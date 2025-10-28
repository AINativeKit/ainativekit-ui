import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { SummaryCard } from './SummaryCard';

describe('SummaryCard', () => {
  it('renders without crashing', () => {
    render(<SummaryCard />);
  });

  it('renders with all props provided', () => {
    const handleClick = vi.fn();
    render(
      <SummaryCard
        images="test.jpg"
        title="Test Title"
        subtitle="Test Subtitle"
        badge="9.2"
        description="Test description text"
        buttonText="Click me"
        onButtonClick={handleClick}
      />
    );

    const image = screen.getByRole('presentation');
    expect(image).toHaveAttribute('src', 'test.jpg');
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByText('9.2')).toBeInTheDocument();
    expect(screen.getByText('Test description text')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('renders single image correctly', () => {
    render(<SummaryCard images={{ src: 'image.jpg', alt: 'Test image' }} />);
    const img = screen.getByAltText('Test image');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'image.jpg');
  });

  it('renders 2-image grid correctly', () => {
    render(
      <SummaryCard
        images={[
          { src: 'img1.jpg', alt: 'Image 1' },
          { src: 'img2.jpg', alt: 'Image 2' },
        ]}
      />
    );

    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
    expect(screen.getByAltText('Image 2')).toBeInTheDocument();
    
    // Verify grid layout is applied
    const grid = screen.getByAltText('Image 1').parentElement;
    expect(grid).toHaveAttribute('data-image-count', '2');
  });

  it('renders 3-image grid correctly', () => {
    render(
      <SummaryCard
        images={[
          { src: 'img1.jpg', alt: 'Image 1' },
          { src: 'img2.jpg', alt: 'Image 2' },
          { src: 'img3.jpg', alt: 'Image 3' },
        ]}
      />
    );

    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
    expect(screen.getByAltText('Image 2')).toBeInTheDocument();
    expect(screen.getByAltText('Image 3')).toBeInTheDocument();
    
    // Verify grid layout is applied
    const grid = screen.getByAltText('Image 1').parentElement;
    expect(grid).toHaveAttribute('data-image-count', '3');
  });

  it('renders 4-image grid correctly', () => {
    render(
      <SummaryCard
        images={[
          { src: 'img1.jpg', alt: 'Image 1' },
          { src: 'img2.jpg', alt: 'Image 2' },
          { src: 'img3.jpg', alt: 'Image 3' },
          { src: 'img4.jpg', alt: 'Image 4' },
        ]}
      />
    );

    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
    expect(screen.getByAltText('Image 2')).toBeInTheDocument();
    expect(screen.getByAltText('Image 3')).toBeInTheDocument();
    expect(screen.getByAltText('Image 4')).toBeInTheDocument();
    
    // Verify grid layout is applied
    const grid = screen.getByAltText('Image 1').parentElement;
    expect(grid).toHaveAttribute('data-image-count', '4');
  });

  it('limits to 4 images when 5 are provided', () => {
    render(
      <SummaryCard
        images={[
          { src: 'img1.jpg', alt: 'Image 1' },
          { src: 'img2.jpg', alt: 'Image 2' },
          { src: 'img3.jpg', alt: 'Image 3' },
          { src: 'img4.jpg', alt: 'Image 4' },
          { src: 'img5.jpg', alt: 'Image 5' },
        ]}
      />
    );

    // Only first 4 images should render
    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
    expect(screen.getByAltText('Image 2')).toBeInTheDocument();
    expect(screen.getByAltText('Image 3')).toBeInTheDocument();
    expect(screen.getByAltText('Image 4')).toBeInTheDocument();
    expect(screen.queryByAltText('Image 5')).not.toBeInTheDocument();
  });

  it('shows overflow indicator for 5+ images', () => {
    render(
      <SummaryCard
        images={[
          { src: 'img1.jpg', alt: 'Image 1' },
          { src: 'img2.jpg', alt: 'Image 2' },
          { src: 'img3.jpg', alt: 'Image 3' },
          { src: 'img4.jpg', alt: 'Image 4' },
          { src: 'img5.jpg', alt: 'Image 5' },
        ]}
      />
    );

    // Should show "+1" indicator
    expect(screen.getByText('+1')).toBeInTheDocument();
  });

  it('shows correct overflow count for many images', () => {
    render(
      <SummaryCard
        images={Array.from({ length: 10 }, (_, i) => ({
          src: `img${i + 1}.jpg`,
          alt: `Image ${i + 1}`,
        }))}
      />
    );

    // Should show "+6" indicator (10 - 4 = 6)
    expect(screen.getByText('+6')).toBeInTheDocument();
  });

  it('handles empty image array', () => {
    const { container } = render(<SummaryCard images={[]} />);
    expect(container.querySelector('img')).not.toBeInTheDocument();
  });

  it('does not render image section when images not provided', () => {
    const { container } = render(<SummaryCard title="No images" />);
    expect(container.querySelector('img')).not.toBeInTheDocument();
  });

  it('does not render header when no title, subtitle, or badge', () => {
    const { container } = render(<SummaryCard description="Just description" />);
    expect(container.querySelector('h3')).not.toBeInTheDocument();
  });

  it('renders title without subtitle', () => {
    render(<SummaryCard title="Just Title" />);
    expect(screen.getByText('Just Title')).toBeInTheDocument();
  });

  it('renders badge with different variants', () => {
    const { rerender } = render(<SummaryCard badge="5" badgeVariant="filled" />);
    expect(screen.getByText('5')).toBeInTheDocument();

    rerender(<SummaryCard badge="99+" badgeVariant="error" />);
    expect(screen.getByText('99+')).toBeInTheDocument();
  });

  it('does not render description when not provided', () => {
    render(<SummaryCard title="Title only" />);
    expect(screen.queryByText(/description/i)).not.toBeInTheDocument();
  });

  it('does not render button when buttonText not provided', () => {
    const { container } = render(<SummaryCard title="No button" />);
    expect(container.querySelector('button')).not.toBeInTheDocument();
  });

  it('handles button click', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<SummaryCard buttonText="Click" onButtonClick={handleClick} />);

    const button = screen.getByRole('button', { name: 'Click' });
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disables button when buttonDisabled is true', () => {
    render(<SummaryCard buttonText="Disabled" buttonDisabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<SummaryCard ref={ref} title="Ref test" />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('applies custom className', () => {
    const { container } = render(<SummaryCard className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('passes Card props through', () => {
    const { container } = render(
      <SummaryCard elevationLevel="3" border="light" data-testid="card" />
    );
    expect(container.querySelector('[data-testid="card"]')).toBeInTheDocument();
  });

  it('normalizes string images to image objects', () => {
    render(<SummaryCard images="simple.jpg" />);
    const image = screen.getByRole('presentation');
    expect(image).toHaveAttribute('src', 'simple.jpg');
  });

  it('renders numeric badge correctly', () => {
    render(<SummaryCard badge={42} />);
    expect(screen.getByText('42')).toBeInTheDocument();
  });

  it('renders complete restaurant card example', () => {
    const handleClick = vi.fn();
    render(
      <SummaryCard
        images="restaurant.jpg"
        title="Little Nona's"
        subtitle="1427 Via Campania"
        badge="9.2"
        description="A tiny, brick-walled trattoria tucked down a side street near Washington Square Park."
        buttonText="Add to order"
        onButtonClick={handleClick}
      />
    );

    expect(screen.getByText("Little Nona's")).toBeInTheDocument();
    expect(screen.getByText('1427 Via Campania')).toBeInTheDocument();
    expect(screen.getByText('9.2')).toBeInTheDocument();
    expect(screen.getByText(/tiny, brick-walled trattoria/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add to order' })).toBeInTheDocument();
  });

  describe('Loading States', () => {
    it('shows loading state with skeleton UI', () => {
      const { container } = render(<SummaryCard loading />);
      expect(container.querySelector('[role="status"]')).toBeInTheDocument();
      expect(container.querySelector('[aria-live="polite"]')).toBeInTheDocument();
    });

    it('shows single image skeleton when loading with single image', () => {
      render(<SummaryCard loading images="test.jpg" title="Test" />);
      // Should show skeleton, not actual image
      expect(screen.queryByRole('img')).not.toBeInTheDocument();
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('shows grid skeleton when loading with multiple images', () => {
      render(
        <SummaryCard
          loading
          images={[
            { src: 'img1.jpg', alt: 'Image 1' },
            { src: 'img2.jpg', alt: 'Image 2' },
            { src: 'img3.jpg', alt: 'Image 3' },
          ]}
          title="Test"
        />
      );
      // Should show skeleton, not actual images
      expect(screen.queryByAltText('Image 1')).not.toBeInTheDocument();
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('shows no-image skeleton when loading without images', () => {
      render(<SummaryCard loading title="Test" description="Description" buttonText="Click" />);
      expect(screen.getByRole('status')).toBeInTheDocument();
      // Content should not be visible
      expect(screen.queryByText('Test')).not.toBeInTheDocument();
      expect(screen.queryByText('Description')).not.toBeInTheDocument();
    });

    it('uses custom loadingImageCount for grid skeleton', () => {
      const { container } = render(
        <SummaryCard
          loading
          loadingImageCount={2}
          images={[
            { src: 'img1.jpg', alt: 'Image 1' },
            { src: 'img2.jpg', alt: 'Image 2' },
          ]}
        />
      );
      expect(container.querySelector('[data-image-count="2"]')).toBeInTheDocument();
    });

    it('defaults to 1 skeleton for single image mode', () => {
      render(<SummaryCard loading images="test.jpg" />);
      // Single image skeleton doesn't use data-image-count
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('defaults to 3 skeletons for grid mode', () => {
      const { container } = render(
        <SummaryCard
          loading
          images={[
            { src: 'img1.jpg', alt: 'Image 1' },
            { src: 'img2.jpg', alt: 'Image 2' },
          ]}
        />
      );
      expect(container.querySelector('[data-image-count="3"]')).toBeInTheDocument();
    });

    it('shows loading state with aria-live for screen readers', () => {
      const { container } = render(<SummaryCard loading />);
      const loadingContainer = container.querySelector('[role="status"]');
      expect(loadingContainer).toHaveAttribute('aria-live', 'polite');
    });
  });

  describe('Error States', () => {
    it('shows error message when error prop is true', () => {
      render(<SummaryCard error />);
      expect(screen.getByTestId('summary-card-error')).toBeInTheDocument();
    });

    it('shows custom error title and message', () => {
      render(
        <SummaryCard
          error
          errorTitle="Custom Error"
          errorMessage="Something went wrong"
        />
      );
      expect(screen.getByText('Custom Error')).toBeInTheDocument();
      expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    });

    it('shows retry button when onErrorRetry provided', () => {
      const handleRetry = vi.fn();
      render(<SummaryCard error onErrorRetry={handleRetry} />);
      const retryButton = screen.getByRole('button', { name: /try again/i });
      expect(retryButton).toBeInTheDocument();
    });

    it('calls onErrorRetry when retry button clicked', async () => {
      const user = userEvent.setup();
      const handleRetry = vi.fn();
      render(<SummaryCard error onErrorRetry={handleRetry} />);
      
      const retryButton = screen.getByRole('button', { name: /try again/i });
      await user.click(retryButton);
      
      expect(handleRetry).toHaveBeenCalledTimes(1);
    });

    it('hides normal content when error is true', () => {
      render(
        <SummaryCard
          error
          images="test.jpg"
          title="Test"
          description="Description"
        />
      );
      // Normal content should not be visible
      expect(screen.queryByText('Test')).not.toBeInTheDocument();
      expect(screen.queryByText('Description')).not.toBeInTheDocument();
    });

    it('prioritizes loading over error', () => {
      const { container } = render(<SummaryCard loading error />);
      // Should show loading, not error
      const status = container.querySelector('[role="status"]');
      expect(status).toBeInTheDocument();
      expect(screen.queryByTestId('summary-card-error')).not.toBeInTheDocument();
    });
  });

  describe('Empty States', () => {
    it('shows empty state when no content provided', () => {
      render(<SummaryCard />);
      expect(screen.getByText('No content')).toBeInTheDocument();
    });

    it('shows custom empty title and message', () => {
      render(
        <SummaryCard
          emptyTitle="No data available"
          emptyMessage="Please add some content"
        />
      );
      expect(screen.getByText('No data available')).toBeInTheDocument();
      expect(screen.getByText('Please add some content')).toBeInTheDocument();
    });

    it('does not show empty state when images provided', () => {
      render(<SummaryCard images="test.jpg" />);
      expect(screen.queryByText('No content')).not.toBeInTheDocument();
    });

    it('does not show empty state when title provided', () => {
      render(<SummaryCard title="Test" />);
      expect(screen.queryByText('No content')).not.toBeInTheDocument();
    });

    it('does not show empty state when description provided', () => {
      render(<SummaryCard description="Test description" />);
      expect(screen.queryByText('No content')).not.toBeInTheDocument();
    });

    it('does not show empty state when button provided', () => {
      render(<SummaryCard buttonText="Click" />);
      expect(screen.queryByText('No content')).not.toBeInTheDocument();
    });

    it('keeps header visible in empty state if provided', () => {
      render(<SummaryCard title="Test Title" subtitle="Subtitle" badge="9.2" />);
      // Header should be visible even though content is minimal
      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Subtitle')).toBeInTheDocument();
      expect(screen.getByText('9.2')).toBeInTheDocument();
    });

    it('does not show empty state during loading', () => {
      render(<SummaryCard loading />);
      expect(screen.queryByText('No content')).not.toBeInTheDocument();
    });

    it('does not show empty state during error', () => {
      render(<SummaryCard error />);
      expect(screen.queryByText('No content')).not.toBeInTheDocument();
    });
  });

  describe('State Transitions', () => {
    it('transitions from loading to normal content', () => {
      const { rerender } = render(<SummaryCard loading title="Test" />);
      expect(screen.getByRole('status')).toBeInTheDocument();
      
      rerender(<SummaryCard title="Test" />);
      expect(screen.queryByRole('status')).not.toBeInTheDocument();
      expect(screen.getByText('Test')).toBeInTheDocument();
    });

    it('transitions from loading to error', () => {
      const { rerender } = render(<SummaryCard loading />);
      expect(screen.getByRole('status')).toBeInTheDocument();
      
      rerender(<SummaryCard error errorTitle="Failed" />);
      expect(screen.queryByRole('status')).not.toBeInTheDocument();
      expect(screen.getByText('Failed')).toBeInTheDocument();
    });

    it('transitions from error to normal content', () => {
      const { rerender } = render(<SummaryCard error title="Test" />);
      expect(screen.getByTestId('summary-card-error')).toBeInTheDocument();
      
      rerender(<SummaryCard title="Test" />);
      expect(screen.queryByTestId('summary-card-error')).not.toBeInTheDocument();
      expect(screen.getByText('Test')).toBeInTheDocument();
    });
  });

  describe('Lazy Loading', () => {
    it('enables lazy loading by default for single image', () => {
      render(<SummaryCard images={{ src: 'test.jpg', alt: 'Test' }} />);
      const img = screen.getByRole('img');
      expect(img).toHaveAttribute('loading', 'lazy');
    });

    it('enables lazy loading by default for grid images', () => {
      const { container } = render(
        <SummaryCard
          images={[
            { src: 'img1.jpg', alt: 'Image 1' },
            { src: 'img2.jpg', alt: 'Image 2' },
          ]}
        />
      );
      const images = container.querySelectorAll('img');
      expect(images).toHaveLength(2);
      images.forEach((img) => {
        expect(img).toHaveAttribute('loading', 'lazy');
      });
    });

    it('disables lazy loading when imageLazy is false', () => {
      render(<SummaryCard images={{ src: 'test.jpg', alt: 'Test' }} imageLazy={false} />);
      const img = screen.getByRole('img');
      expect(img).toHaveAttribute('loading', 'eager');
    });

    it('respects per-image lazy setting', () => {
      const { container } = render(
        <SummaryCard
          images={[
            { src: 'img1.jpg', alt: 'Image 1', lazy: false },
            { src: 'img2.jpg', alt: 'Image 2', lazy: true },
          ]}
        />
      );
      const images = container.querySelectorAll('img');
      expect(images[0]).toHaveAttribute('loading', 'eager');
      expect(images[1]).toHaveAttribute('loading', 'lazy');
    });

    it('per-image lazy=false overrides imageLazy=true', () => {
      render(
        <SummaryCard
          images={{ src: 'test.jpg', alt: 'Test', lazy: false }}
          imageLazy={true}
        />
      );
      const img = screen.getByRole('img');
      expect(img).toHaveAttribute('loading', 'eager');
    });

    it('applies lazy loading to all grid images when imageLazy=true', () => {
      const { container } = render(
        <SummaryCard
          images={[
            { src: 'img1.jpg', alt: 'Image 1' },
            { src: 'img2.jpg', alt: 'Image 2' },
            { src: 'img3.jpg', alt: 'Image 3' },
          ]}
          imageLazy={true}
        />
      );
      const images = container.querySelectorAll('img');
      expect(images).toHaveLength(3);
      images.forEach((img) => {
        expect(img).toHaveAttribute('loading', 'lazy');
      });
    });
  });

  describe('Image Callbacks', () => {
    it('calls onImageLoad when single image loads', () => {
      const handleLoad = vi.fn();
      render(<SummaryCard images={{ src: 'test.jpg', alt: 'Test' }} onImageLoad={handleLoad} />);
      
      const img = screen.getByRole('img');
      img.dispatchEvent(new Event('load'));
      
      expect(handleLoad).toHaveBeenCalledTimes(1);
    });

    it('calls onImageError when single image fails', () => {
      const handleError = vi.fn();
      render(<SummaryCard images={{ src: 'test.jpg', alt: 'Test' }} onImageError={handleError} />);
      
      const img = screen.getByRole('img');
      img.dispatchEvent(new Event('error'));
      
      expect(handleError).toHaveBeenCalledTimes(1);
    });

    it('calls onImagesLoad with correct index for grid images', () => {
      const handleLoad = vi.fn();
      const { container } = render(
        <SummaryCard
          images={[
            { src: 'img1.jpg', alt: 'Image 1' },
            { src: 'img2.jpg', alt: 'Image 2' },
          ]}
          onImagesLoad={handleLoad}
        />
      );
      
      const images = container.querySelectorAll('img');
      images[0].dispatchEvent(new Event('load'));
      images[1].dispatchEvent(new Event('load'));
      
      expect(handleLoad).toHaveBeenCalledTimes(2);
      expect(handleLoad).toHaveBeenNthCalledWith(1, 0, expect.any(Object));
      expect(handleLoad).toHaveBeenNthCalledWith(2, 1, expect.any(Object));
    });

    it('calls onImagesError with correct index for grid images', () => {
      const handleError = vi.fn();
      const { container } = render(
        <SummaryCard
          images={[
            { src: 'img1.jpg', alt: 'Image 1' },
            { src: 'img2.jpg', alt: 'Image 2' },
            { src: 'img3.jpg', alt: 'Image 3' },
          ]}
          onImagesError={handleError}
        />
      );
      
      const images = container.querySelectorAll('img');
      images[0].dispatchEvent(new Event('error'));
      images[2].dispatchEvent(new Event('error'));
      
      expect(handleError).toHaveBeenCalledTimes(2);
      expect(handleError).toHaveBeenNthCalledWith(1, 0, expect.any(Object));
      expect(handleError).toHaveBeenNthCalledWith(2, 2, expect.any(Object));
    });

    it('does not call grid callbacks when using single image', () => {
      const handleGridLoad = vi.fn();
      render(
        <SummaryCard images={{ src: 'test.jpg', alt: 'Test' }} onImagesLoad={handleGridLoad} />
      );
      
      const img = screen.getByRole('img');
      img.dispatchEvent(new Event('load'));
      
      expect(handleGridLoad).not.toHaveBeenCalled();
    });

    it('does not call single callbacks when using grid images', () => {
      const handleSingleLoad = vi.fn();
      const { container } = render(
        <SummaryCard
          images={[
            { src: 'img1.jpg', alt: 'Image 1' },
            { src: 'img2.jpg', alt: 'Image 2' },
          ]}
          onImageLoad={handleSingleLoad}
        />
      );
      
      const images = container.querySelectorAll('img');
      images[0].dispatchEvent(new Event('load'));
      
      expect(handleSingleLoad).not.toHaveBeenCalled();
    });
  });
});
