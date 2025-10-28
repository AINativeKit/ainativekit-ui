import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  describe('Rendering', () => {
    it('renders button with text content', () => {
      render(<Button>Click Me</Button>);
      expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument();
    });

    it('renders primary variant by default', () => {
      render(<Button>Primary</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('buttonPrimary');
    });

    it('renders secondary variant when specified', () => {
      render(<Button variant="secondary">Secondary</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('buttonSecondary');
    });

    it('renders tertiary variant when specified', () => {
      render(<Button variant="tertiary">Tertiary</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('buttonTertiary');
    });
  });

  describe('Icons', () => {
    it('renders left icon when provided', () => {
      render(<Button leftIcon="plus-circle-add">Add Item</Button>);
      const button = screen.getByRole('button');
      expect(button.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
    });

    it('renders right icon when provided', () => {
      render(<Button rightIcon="arrow-right-sm">Continue</Button>);
      const button = screen.getByRole('button');
      expect(button.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
    });

  });

  describe('Disabled State', () => {
    it('is disabled when disabled prop is true', () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('does not call onClick when disabled', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(
        <Button disabled onClick={handleClick}>
          Disabled
        </Button>
      );
      const button = screen.getByRole('button');
      await user.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Interaction', () => {
    it('calls onClick when clicked', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click Me</Button>);
      const button = screen.getByRole('button');
      await user.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('can be activated with keyboard', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click Me</Button>);
      const button = screen.getByRole('button');
      button.focus();
      await user.keyboard('{Enter}');
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('has proper button role', () => {
      render(<Button>Accessible Button</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<Button ref={ref}>Button</Button>);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('passes through native button attributes', () => {
      render(
        <Button type="submit" aria-label="Submit form">
          Submit
        </Button>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
      expect(button).toHaveAttribute('aria-label', 'Submit form');
    });
  });

  describe('Custom Styling', () => {
    it('applies custom className', () => {
      render(<Button className="custom-class">Custom</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-class');
    });

    it('merges custom className with default classes', () => {
      render(<Button className="custom-class">Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('button');
      expect(button).toHaveClass('buttonPrimary');
      expect(button).toHaveClass('custom-class');
    });
  });

  describe('Ghost Variant', () => {
    it('renders ghost variant when specified', () => {
      render(<Button variant="ghost">Ghost</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('buttonGhost');
    });
  });

  describe('Icon-Only Buttons', () => {
    it('renders icon-only button', () => {
      const { container } = render(
        <Button iconOnly="plus-circle-add" aria-label="Add">
          This text is ignored
        </Button>
      );
      const button = screen.getByRole('button', { name: 'Add' });
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('buttonIconOnly');
      // Icon should be present
      const icon = container.querySelector('[aria-hidden="true"]');
      expect(icon).toBeInTheDocument();
    });

    it('ignores children when iconOnly is set', () => {
      render(
        <Button iconOnly="settings-cog" aria-label="Settings">
          This text should not appear
        </Button>
      );
      const button = screen.getByRole('button', { name: 'Settings' });
      expect(button).toBeInTheDocument();
      // Text content should not be rendered
      expect(button).not.toHaveTextContent('This text should not appear');
    });

    it('ignores leftIcon and rightIcon when iconOnly is set', () => {
      const { container } = render(
        <Button
          iconOnly="plus-circle-add"
          leftIcon="settings-cog"
          rightIcon="filter"
          aria-label="Add"
        />
      );
      // Only one icon should be present (the iconOnly icon)
      const icons = container.querySelectorAll('[aria-hidden="true"]');
      expect(icons).toHaveLength(1);
    });

    it('warns when iconOnly is used without aria-label', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      render(<Button iconOnly="plus-circle-add">Add</Button>);
      expect(consoleSpy).toHaveBeenCalledWith(
        'Button: iconOnly buttons require an aria-label for accessibility'
      );
      consoleSpy.mockRestore();
    });

    it('does not warn when iconOnly has aria-label', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      render(<Button iconOnly="plus-circle-add" aria-label="Add" />);
      expect(consoleSpy).not.toHaveBeenCalled();
      consoleSpy.mockRestore();
    });

    it('can be clicked when not disabled', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(
        <Button iconOnly="plus-circle-add" aria-label="Add" onClick={handleClick} />
      );
      const button = screen.getByRole('button', { name: 'Add' });
      await user.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('works with all variants', () => {
      const { rerender } = render(
        <Button variant="primary" iconOnly="settings-cog" aria-label="Settings" />
      );
      let button = screen.getByRole('button');
      expect(button).toHaveClass('buttonPrimary');
      expect(button).toHaveClass('buttonIconOnly');

      rerender(<Button variant="secondary" iconOnly="settings-cog" aria-label="Settings" />);
      button = screen.getByRole('button');
      expect(button).toHaveClass('buttonSecondary');
      expect(button).toHaveClass('buttonIconOnly');

      rerender(<Button variant="tertiary" iconOnly="settings-cog" aria-label="Settings" />);
      button = screen.getByRole('button');
      expect(button).toHaveClass('buttonTertiary');
      expect(button).toHaveClass('buttonIconOnly');

      rerender(<Button variant="ghost" iconOnly="settings-cog" aria-label="Settings" />);
      button = screen.getByRole('button');
      expect(button).toHaveClass('buttonGhost');
      expect(button).toHaveClass('buttonIconOnly');
    });
  });
});
