import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';
import type { ChipVariant, ChipSize } from './Chip';
import { Card } from '../Card';
import { PropsTable } from '../../tokens/PropsTable';

const meta: Meta<typeof Chip> = {
  title: 'Primitive Components/Chips',
  component: Chip,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// Helper component for chip showcase cards
const ChipCard: React.FC<{
  variant: ChipVariant;
  size?: ChipSize;
  children: React.ReactNode;
  label: string;
  description: string;
}> = ({ variant, size = 'md', children, label, description }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    const code = `<Chip variant="${variant}"${size !== 'md' ? ` size="${size}"` : ''}>${typeof children === 'string' ? children : '...'}</Chip>`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card
      elevationLevel={1}
      interactive
      onClick={handleCopy}
      style={{
        cursor: 'pointer',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        minWidth: '180px',
      }}
      title={`Click to copy code`}
    >
      <Chip variant={variant} size={size}>
        {children}
      </Chip>
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            fontSize: '13px',
            fontWeight: 600,
            marginBottom: '4px',
          }}
        >
          {label}
          {copied && (
            <span style={{ marginLeft: '4px', color: 'var(--ai-color-accent-green)' }}>✓</span>
          )}
        </div>
        <div
          style={{
            fontSize: '11px',
            color: 'var(--ai-color-text-secondary)',
            lineHeight: '1.4',
          }}
        >
          {description}
        </div>
      </div>
    </Card>
  );
};

// Main unified Chip showcase component
const ChipsComponent: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = React.useState<string[]>(['all']);
  const [tags, setTags] = React.useState(['React', 'TypeScript', 'Node.js', 'Design']);

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const removeTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ marginBottom: '32px' }}>Chip System</h1>

      {/* Chip Gallery */}
      <section style={{ marginBottom: '64px' }}>
        <p style={{ marginBottom: '24px', color: 'var(--ai-color-text-secondary)' }}>
          Pill-shaped components for labels, tags, filters, and categories. Auto-width design adapts to content length. Click any chip to copy its code.
        </p>

        {/* Variants Section */}
        <div style={{ marginBottom: '48px' }}>
          <header style={{ marginBottom: '24px' }}>
            <h2 style={{ marginBottom: '8px' }}>Chip Variants</h2>
            <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
              6 variants available, matching Badge for consistency
            </p>
          </header>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: '16px',
            }}
          >
            <ChipCard
              variant="default"
              label="Default"
              description="General labels"
            >
              Premium
            </ChipCard>
            <ChipCard
              variant="filled"
              label="Filled"
              description="Emphasis"
            >
              Featured
            </ChipCard>
            <ChipCard
              variant="success"
              label="Success"
              description="Positive state"
            >
              Verified
            </ChipCard>
            <ChipCard
              variant="warning"
              label="Warning"
              description="Attention"
            >
              Beta
            </ChipCard>
            <ChipCard
              variant="error"
              label="Error"
              description="Critical state"
            >
              Deprecated
            </ChipCard>
            <ChipCard
              variant="neutral"
              label="Neutral"
              description="Subtle labels"
            >
              Documentation
            </ChipCard>
          </div>
        </div>

        {/* Common Use Cases */}
        <div style={{ display: 'grid', gap: '48px' }}>
          {/* Text Labels */}
          <section>
            <header style={{ marginBottom: '24px' }}>
              <h3 style={{ marginBottom: '8px' }}>Text Labels</h3>
              <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
                Multi-character labels for features, categories, and status
              </p>
            </header>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Chip variant="default">Premium</Chip>
              <Chip variant="filled">New Feature</Chip>
              <Chip variant="success">Active</Chip>
              <Chip variant="warning">In Progress</Chip>
              <Chip variant="error">Unavailable</Chip>
              <Chip variant="neutral">Documentation</Chip>
            </div>
          </section>

          {/* With Icons */}
          <section>
            <header style={{ marginBottom: '24px' }}>
              <h3 style={{ marginBottom: '8px' }}>With Icons</h3>
              <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
                Add visual context with left or right icons
              </p>
            </header>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Chip variant="success" leftIcon="check-circle">Verified</Chip>
              <Chip variant="filled" leftIcon="star">Featured</Chip>
              <Chip variant="default" leftIcon="lock-key-hole">Secure</Chip>
              <Chip variant="warning" leftIcon="warning-wrap-centered-for-circle">Warning</Chip>
              <Chip variant="neutral" leftIcon="info-circle">Info</Chip>
            </div>
          </section>

          {/* Removable Tags */}
          <section>
            <header style={{ marginBottom: '24px' }}>
              <h3 style={{ marginBottom: '8px' }}>Removable Tags</h3>
              <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
                Interactive chips with close buttons for dynamic tag lists
              </p>
            </header>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {tags.map((tag) => (
                <Chip
                  key={tag}
                  variant="neutral"
                  onRemove={() => removeTag(tag)}
                >
                  {tag}
                </Chip>
              ))}
              {tags.length === 0 && (
                <span style={{ color: 'var(--ai-color-text-secondary)', fontSize: '14px' }}>
                  All tags removed! Refresh to reset.
                </span>
              )}
            </div>
          </section>

          {/* Filter Chips */}
          <section>
            <header style={{ marginBottom: '24px' }}>
              <h3 style={{ marginBottom: '8px' }}>Filter Chips (Selectable)</h3>
              <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
                Chips with selection state for filtering and categorization
              </p>
            </header>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Chip
                selected={selectedFilters.includes('all')}
                onClick={() => toggleFilter('all')}
              >
                All
              </Chip>
              <Chip
                selected={selectedFilters.includes('active')}
                onClick={() => toggleFilter('active')}
              >
                Active
              </Chip>
              <Chip
                selected={selectedFilters.includes('completed')}
                onClick={() => toggleFilter('completed')}
              >
                Completed
              </Chip>
              <Chip
                selected={selectedFilters.includes('archived')}
                onClick={() => toggleFilter('archived')}
              >
                Archived
              </Chip>
            </div>
            <p style={{ marginTop: '12px', fontSize: '12px', color: 'var(--ai-color-text-tertiary)' }}>
              Selected: {selectedFilters.join(', ')}
            </p>
          </section>

          {/* Clickable Chips */}
          <section>
            <header style={{ marginBottom: '24px' }}>
              <h3 style={{ marginBottom: '8px' }}>Clickable Chips</h3>
              <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
                Interactive chips for navigation or actions
              </p>
            </header>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Chip variant="default" onClick={() => alert('Design clicked')}>Design</Chip>
              <Chip variant="filled" onClick={() => alert('Engineering clicked')}>Engineering</Chip>
              <Chip variant="success" onClick={() => alert('Product clicked')}>Product</Chip>
              <Chip variant="neutral" onClick={() => alert('Marketing clicked')}>Marketing</Chip>
            </div>
          </section>
        </div>
      </section>

      {/* Sizes */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Sizes</h2>
        <p style={{ marginBottom: '24px', color: 'var(--ai-color-text-secondary)' }}>
          Three sizes available: Small (24px), Medium (32px), and Large (40px).
        </p>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Chip size="sm">Small Chip</Chip>
            <code style={{ fontSize: '12px', color: 'var(--ai-color-text-secondary)' }}>
              size="sm"
            </code>
            <span style={{ fontSize: '11px', color: 'var(--ai-color-text-tertiary)' }}>
              24px height
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Chip size="md">Medium Chip</Chip>
            <code style={{ fontSize: '12px', color: 'var(--ai-color-text-secondary)' }}>
              size="md"
            </code>
            <span style={{ fontSize: '11px', color: 'var(--ai-color-text-tertiary)' }}>
              32px (default)
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Chip size="lg">Large Chip</Chip>
            <code style={{ fontSize: '12px', color: 'var(--ai-color-text-secondary)' }}>
              size="lg"
            </code>
            <span style={{ fontSize: '11px', color: 'var(--ai-color-text-tertiary)' }}>
              40px height
            </span>
          </div>
        </div>
      </section>

      {/* Chip vs Badge */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Chip vs Badge</h2>
        <p style={{ marginBottom: '24px', color: 'var(--ai-color-text-secondary)' }}>
          Understanding when to use each component:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '12px', color: 'var(--ai-color-accent-green)' }}>
              ✅ Use Chip For
            </h3>
            <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--ai-color-text-secondary)', fontSize: '14px', lineHeight: '1.8' }}>
              <li>Text labels (3+ characters)</li>
              <li>Category tags</li>
              <li>Filter selections</li>
              <li>Removable items</li>
              <li>Clickable labels</li>
              <li>Status with text</li>
            </ul>
            <div style={{ marginTop: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Chip variant="default">Premium</Chip>
              <Chip variant="neutral">TypeScript</Chip>
              <Chip variant="success">Active</Chip>
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '12px', color: 'var(--ai-color-accent-blue)' }}>
              ✅ Use Badge For
            </h3>
            <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--ai-color-text-secondary)', fontSize: '14px', lineHeight: '1.8' }}>
              <li>Counts (1-3 characters)</li>
              <li>Ratings/scores</li>
              <li>Status dots</li>
              <li>Icon indicators</li>
              <li>Compact labels</li>
              <li>Overlay indicators</li>
            </ul>
            <div style={{ marginTop: '16px', display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', backgroundColor: 'var(--ai-color-bg-secondary)', borderRadius: '8px' }}>
                <span style={{ fontSize: '14px' }}>Badge examples:</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--ai-color-accent-blue)', color: 'white', fontSize: '12px', fontWeight: 600 }}>5</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', background: 'color-mix(in srgb, var(--ai-color-accent-blue) 10%, transparent)', color: 'var(--ai-color-accent-blue)', fontSize: '12px', fontWeight: 600 }}>9.2</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', background: 'var(--ai-color-bg-tertiary)', color: 'var(--ai-color-text-secondary)', fontSize: '12px', fontWeight: 600 }}>AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* States */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>States</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Selected State</h3>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Chip selected>Selected</Chip>
              <Chip>Unselected</Chip>
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Disabled State</h3>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Chip disabled>Disabled</Chip>
              <Chip disabled onClick={() => {}}>Disabled Clickable</Chip>
              <Chip disabled onRemove={() => {}}>Disabled Removable</Chip>
            </div>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Usage</h2>

        <h3 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>
          Basic Usage
        </h3>
        <div
          style={{
            backgroundColor: 'var(--ai-color-bg-secondary)',
            padding: '16px',
            borderRadius: '8px',
            fontSize: '14px',
            overflow: 'auto',
            marginBottom: '24px',
            fontFamily: 'monospace',
            whiteSpace: 'pre',
          }}
        >
          <code>{`import { Chip } from '@ainativekit/ui';

// Basic label
<Chip variant="default">Premium</Chip>

// With icon
<Chip variant="success" leftIcon="check-circle">Verified</Chip>

// Removable tag
<Chip variant="neutral" onRemove={() => removeTag()}>TypeScript</Chip>

// Clickable chip
<Chip onClick={() => selectCategory()}>Design</Chip>

// Filter chip with selection
<Chip selected onClick={() => toggleFilter()}>Active</Chip>

// Different sizes
<Chip size="sm">Small</Chip>
<Chip size="lg">Large</Chip>`}</code>
        </div>

        <h3 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>
          Accessibility
        </h3>
        <p style={{ marginBottom: '12px', color: 'var(--ai-color-text-secondary)' }}>
          Chips are accessible by default with proper ARIA attributes and keyboard support:
        </p>
        <ul style={{ color: 'var(--ai-color-text-secondary)', fontSize: '14px', lineHeight: '1.8' }}>
          <li>Interactive chips render as {'<button>'} elements</li>
          <li>Remove buttons are keyboard accessible (Enter/Space)</li>
          <li>Proper focus indicators</li>
          <li>Disabled state prevents interaction</li>
        </ul>
      </section>

      {/* Props */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Props</h2>
        <PropsTable
          hideThemeColumn
          rows={[
            {
              name: 'variant',
              description: 'Visual style variant. Options: "default", "filled", "success", "warning", "error", "neutral". Default: "default"',
            },
            {
              name: 'size',
              description: 'Chip size. Options: "sm" (24px), "md" (32px), "lg" (40px). Default: "md"',
            },
            {
              name: 'leftIcon',
              description: 'Icon name to display before text. From icon system.',
            },
            {
              name: 'rightIcon',
              description: 'Icon name to display after text. From icon system.',
            },
            {
              name: 'leftElement',
              description: 'Custom element before text (overrides leftIcon). Use for avatars, custom icons.',
            },
            {
              name: 'rightElement',
              description: 'Custom element after text (overrides rightIcon).',
            },
            {
              name: 'onRemove',
              description: 'Callback when remove button is clicked. Makes chip removable.',
            },
            {
              name: 'onClick',
              description: 'Callback when chip is clicked. Makes chip interactive (renders as button).',
            },
            {
              name: 'selected',
              description: 'Shows selected state (border ring). Use for filter chips. Default: false',
            },
            {
              name: 'disabled',
              description: 'Disabled state - prevents all interaction. Default: false',
            },
            {
              name: 'ariaLabel',
              description: 'Accessible label for screen readers. Required when content needs clarification.',
            },
            {
              name: 'className',
              description: 'Additional CSS classes for custom styling.',
            },
          ]}
        />
      </section>
    </div>
  );
};

export const Chips: StoryObj = {
  render: () => <ChipsComponent />,
};
