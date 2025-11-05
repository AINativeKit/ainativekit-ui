import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Icon } from './Icon';

// Mock the icon data with inline SVG paths
vi.mock('../../tokens/icon-data', () => ({
  iconData: {
    'plus-circle-add': {
      viewBox: '0 0 24 24',
      paths: [
        'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z',
      ],
    },
  },
}));

describe('Icon', () => {
  it('renders with correct attributes', () => {
    render(<Icon name="plus-circle-add" aria-label="Add" />);

    const icon = screen.getByRole('img');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('iconSvg');
    expect(icon).toHaveClass('iconMd'); // default size
    expect(icon).toHaveAttribute('aria-label', 'Add');
  });

  it('applies correct size classes', () => {
    const { rerender } = render(<Icon name="plus-circle-add" size="xs" aria-label="Add" />);
    expect(screen.getByRole('img')).toHaveClass('iconXs');

    rerender(<Icon name="plus-circle-add" size="sm" aria-label="Add" />);
    expect(screen.getByRole('img')).toHaveClass('iconSm');

    rerender(<Icon name="plus-circle-add" size="lg" aria-label="Add" />);
    expect(screen.getByRole('img')).toHaveClass('iconLg');

    rerender(<Icon name="plus-circle-add" size="xl" aria-label="Add" />);
    expect(screen.getByRole('img')).toHaveClass('iconXl');
  });

  it('applies custom className', () => {
    render(<Icon name="plus-circle-add" className="custom-class" aria-label="Add" />);

    const icon = screen.getByRole('img');
    expect(icon).toHaveClass('iconSvg');
    expect(icon).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<Icon name="plus-circle-add" ref={ref} />);

    expect(ref.current).toBeInTheDocument();
    expect(ref.current?.tagName).toBe('SPAN');
  });

  it('passes through additional props', () => {
    render(<Icon name="plus-circle-add" data-testid="test-icon" />);

    const icon = screen.getByTestId('test-icon');
    expect(icon).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<Icon name="plus-circle-add" onClick={handleClick} aria-label="Add" />);

    const icon = screen.getByRole('img');
    await user.click(icon);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders inline SVG with correct structure', () => {
    render(<Icon name="plus-circle-add" aria-label="Add" />);

    const icon = screen.getByRole('img');
    const svg = icon.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    expect(svg).toHaveAttribute('fill', 'none');

    // Check that path elements are rendered
    const paths = svg?.querySelectorAll('path');
    expect(paths?.length).toBeGreaterThan(0);
    expect(paths?.[0]).toHaveAttribute('fill', 'currentColor');
  });

  it('applies default size when not specified', () => {
    render(<Icon name="plus-circle-add" aria-label="Add" />);

    const icon = screen.getByRole('img');
    expect(icon).toHaveClass('iconMd');
  });

  it('uses custom aria-label when provided', () => {
    render(<Icon name="plus-circle-add" aria-label="Custom add icon" />);
    const icon = screen.getByRole('img');
    expect(icon).toHaveAttribute('aria-label', 'Custom add icon');
  });

  it('applies tone class with default primary', () => {
    render(<Icon name="plus-circle-add" aria-label="Add" />);
    const icon = screen.getByRole('img');
    expect(icon).toHaveClass('iconPrimary');
  });

  it('supports secondary tone', () => {
    render(<Icon name="plus-circle-add" tone="secondary" aria-label="Add" />);
    const icon = screen.getByRole('img');
    expect(icon).toHaveClass('iconSecondary');
  });
});
