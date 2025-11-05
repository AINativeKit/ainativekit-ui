import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Chip } from './Chip';

describe('Chip', () => {
  describe('Basic Rendering', () => {
    it('should render with default props', () => {
      render(<Chip>Label</Chip>);
      expect(screen.getByText('Label')).toBeInTheDocument();
    });

    it('should render as span by default', () => {
      const { container } = render(<Chip>Label</Chip>);
      expect(container.querySelector('span')).toBeInTheDocument();
    });

    it('should accept custom className', () => {
      render(<Chip className="custom-chip">Label</Chip>);
      expect(screen.getByText('Label').parentElement).toHaveClass('custom-chip');
    });

    it('should forward ref to span element', () => {
      const ref = React.createRef<HTMLSpanElement>();
      render(<Chip ref={ref}>Label</Chip>);
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });
  });

  describe('Variants', () => {
    const variants = ['default', 'filled', 'success', 'warning', 'error', 'neutral'] as const;

    variants.forEach((variant) => {
      it(`should render ${variant} variant`, () => {
        render(<Chip variant={variant}>Label</Chip>);
        expect(screen.getByText('Label')).toBeInTheDocument();
      });
    });
  });

  describe('Sizes', () => {
    it('should render small size', () => {
      render(<Chip size="sm">Small</Chip>);
      expect(screen.getByText('Small')).toBeInTheDocument();
    });

    it('should render medium size (default)', () => {
      render(<Chip size="md">Medium</Chip>);
      expect(screen.getByText('Medium')).toBeInTheDocument();
    });

    it('should render large size', () => {
      render(<Chip size="lg">Large</Chip>);
      expect(screen.getByText('Large')).toBeInTheDocument();
    });
  });

  describe('Icons', () => {
    it('should render with left icon', () => {
      const { container } = render(<Chip leftIcon="check-circle">With Icon</Chip>);
      expect(screen.getByText('With Icon')).toBeInTheDocument();
      // Just verify the chip renders - icon is tested separately in Icon tests
      expect(container.querySelector('.chipIcon')).toBeInTheDocument();
    });

    it('should render with right icon', () => {
      const { container } = render(<Chip rightIcon="arrow-right-sm">With Icon</Chip>);
      expect(screen.getByText('With Icon')).toBeInTheDocument();
      expect(container.querySelector('.chipIcon')).toBeInTheDocument();
    });

    it('should render with both left and right icons', () => {
      const { container } = render(
        <Chip leftIcon="check-circle" rightIcon="arrow-right-sm">
          Both Icons
        </Chip>
      );
      expect(screen.getByText('Both Icons')).toBeInTheDocument();
      const icons = container.querySelectorAll('.chipIcon');
      expect(icons.length).toBe(2);
    });

    it('should render custom left element', () => {
      render(<Chip leftElement={<span data-testid="custom-left">●</span>}>Custom Element</Chip>);
      expect(screen.getByTestId('custom-left')).toBeInTheDocument();
    });

    it('should render custom right element', () => {
      render(<Chip rightElement={<span data-testid="custom-right">→</span>}>Custom Element</Chip>);
      expect(screen.getByTestId('custom-right')).toBeInTheDocument();
    });

    it('should prefer leftElement over leftIcon', () => {
      render(
        <Chip leftIcon="check-circle" leftElement={<span data-testid="custom-element">●</span>}>
          Priority Test
        </Chip>
      );
      expect(screen.getByTestId('custom-element')).toBeInTheDocument();
    });
  });

  describe('Interactive Behavior', () => {
    it('should render as button when onClick is provided', () => {
      const handleClick = vi.fn();
      render(<Chip onClick={handleClick}>Clickable</Chip>);
      const chip = screen.getByRole('button', { name: 'Clickable' });
      expect(chip.tagName).toBe('BUTTON');
    });

    it('should call onClick when clicked', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<Chip onClick={handleClick}>Click Me</Chip>);

      await user.click(screen.getByRole('button', { name: 'Click Me' }));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when disabled', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(
        <Chip onClick={handleClick} disabled>
          Disabled
        </Chip>
      );

      const button = screen.getByRole('button', { name: 'Disabled' });
      await user.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Removable Chips', () => {
    it('should render remove button when onRemove is provided', () => {
      const handleRemove = vi.fn();
      render(<Chip onRemove={handleRemove}>Removable</Chip>);

      // Remove button should be present (with aria-label)
      const removeButton = screen.getByRole('button', { name: 'Remove' });
      expect(removeButton).toBeInTheDocument();
    });

    it('should call onRemove when remove button is clicked', async () => {
      const user = userEvent.setup();
      const handleRemove = vi.fn();
      render(<Chip onRemove={handleRemove}>Remove Me</Chip>);

      const removeButton = screen.getByRole('button', { name: 'Remove' });
      await user.click(removeButton);
      expect(handleRemove).toHaveBeenCalledTimes(1);
    });

    it('should not trigger onClick when remove button is clicked', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      const handleRemove = vi.fn();
      render(
        <Chip onClick={handleClick} onRemove={handleRemove}>
          Both Handlers
        </Chip>
      );

      const removeButton = screen.getByRole('button', { name: 'Remove' });
      await user.click(removeButton);

      expect(handleRemove).toHaveBeenCalledTimes(1);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('should handle remove via keyboard (Enter)', async () => {
      const user = userEvent.setup();
      const handleRemove = vi.fn();
      render(<Chip onRemove={handleRemove}>Keyboard Remove</Chip>);

      const removeButton = screen.getByRole('button', { name: 'Remove' });
      removeButton.focus();
      await user.keyboard('{Enter}');

      expect(handleRemove).toHaveBeenCalledTimes(1);
    });

    it('should handle remove via keyboard (Space)', async () => {
      const user = userEvent.setup();
      const handleRemove = vi.fn();
      render(<Chip onRemove={handleRemove}>Keyboard Remove</Chip>);

      const removeButton = screen.getByRole('button', { name: 'Remove' });
      removeButton.focus();
      await user.keyboard(' ');

      expect(handleRemove).toHaveBeenCalledTimes(1);
    });

    it('should not call onRemove when disabled', async () => {
      const user = userEvent.setup();
      const handleRemove = vi.fn();
      render(
        <Chip onRemove={handleRemove} disabled>
          Disabled Remove
        </Chip>
      );

      const removeButton = screen.getByRole('button', { name: 'Remove' });
      await user.click(removeButton);
      expect(handleRemove).not.toHaveBeenCalled();
    });
  });

  describe('Selected State', () => {
    it('should render selected state', () => {
      render(<Chip selected>Selected</Chip>);
      expect(screen.getByText('Selected')).toBeInTheDocument();
    });

    it('should work with onClick and selected state', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(
        <Chip onClick={handleClick} selected>
          Selected & Clickable
        </Chip>
      );

      await user.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Disabled State', () => {
    it('should render disabled state', () => {
      render(<Chip disabled>Disabled</Chip>);
      expect(screen.getByText('Disabled')).toBeInTheDocument();
    });

    it('should apply disabled attribute to button', () => {
      const handleClick = vi.fn();
      render(
        <Chip onClick={handleClick} disabled>
          Disabled Button
        </Chip>
      );

      const button = screen.getByRole('button', { name: 'Disabled Button' });
      expect(button).toBeDisabled();
    });

    it('should render as button when onRemove is provided even if disabled', () => {
      const handleRemove = vi.fn();
      render(
        <Chip onRemove={handleRemove} disabled>
          Disabled Remove
        </Chip>
      );

      // Should still render as interactive structure
      const removeButton = screen.getByRole('button', { name: 'Remove' });
      expect(removeButton).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should accept aria-label', () => {
      render(<Chip ariaLabel="Custom label">Chip</Chip>);
      const chip = screen.getByLabelText('Custom label');
      expect(chip).toBeInTheDocument();
    });

    it('should add role=status when ariaLabel is provided for non-interactive chip', () => {
      render(<Chip ariaLabel="Status label">Status</Chip>);
      const chip = screen.getByRole('status');
      expect(chip).toBeInTheDocument();
    });

    it('should be keyboard accessible when interactive', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<Chip onClick={handleClick}>Keyboard Accessible</Chip>);

      const button = screen.getByRole('button');
      button.focus();
      expect(button).toHaveFocus();

      await user.keyboard('{Enter}');
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should have proper focus management for remove button', () => {
      const handleRemove = vi.fn();
      render(<Chip onRemove={handleRemove}>Focus Test</Chip>);

      const removeButton = screen.getByRole('button', { name: 'Remove' });
      removeButton.focus();
      expect(removeButton).toHaveFocus();
    });

    it('should prevent tab focus on remove button when disabled', () => {
      const handleRemove = vi.fn();
      render(
        <Chip onRemove={handleRemove} disabled>
          Disabled
        </Chip>
      );

      const removeButton = screen.getByRole('button', { name: 'Remove' });
      expect(removeButton).toHaveAttribute('tabIndex', '-1');
    });
  });

  describe('Integration', () => {
    it('should render complete feature chip with all props', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      const handleRemove = vi.fn();

      render(
        <Chip
          variant="success"
          size="lg"
          leftIcon="check-circle"
          onClick={handleClick}
          onRemove={handleRemove}
          ariaLabel="Feature chip"
          data-testid="feature-chip"
        >
          Feature Complete
        </Chip>
      );

      const chip = screen.getByTestId('feature-chip');
      expect(chip).toBeInTheDocument();
      expect(screen.getByText('Feature Complete')).toBeInTheDocument();

      // Test click
      await user.click(chip);
      expect(handleClick).toHaveBeenCalledTimes(1);

      // Test remove
      const removeButton = screen.getByRole('button', { name: 'Remove' });
      await user.click(removeButton);
      expect(handleRemove).toHaveBeenCalledTimes(1);
    });

    it('should work as filter chip with selection toggle', async () => {
      const user = userEvent.setup();
      const FilterChip = () => {
        const [selected, setSelected] = React.useState(false);
        return (
          <Chip
            selected={selected}
            onClick={() => setSelected(!selected)}
            data-testid="filter-chip"
          >
            Filter
          </Chip>
        );
      };

      render(<FilterChip />);
      const chip = screen.getByTestId('filter-chip');

      expect(chip).not.toHaveClass('chipSelected');
      await user.click(chip);
      expect(chip).toHaveClass('chipSelected');
      await user.click(chip);
      expect(chip).not.toHaveClass('chipSelected');
    });
  });
});
