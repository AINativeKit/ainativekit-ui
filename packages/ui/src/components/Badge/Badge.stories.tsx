import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import type { BadgeVariant, BadgeSize } from './Badge';
import { Card } from '../Card';
import { PropsTable } from '../../tokens/PropsTable';

const meta: Meta<typeof Badge> = {
  title: 'Primitive Components/Badges',
  component: Badge,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// Helper component for badge showcase cards
const BadgeCard: React.FC<{
  variant: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
  label: string;
  description: string;
}> = ({ variant, size = 'md', children, label, description }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    const code = `<Badge variant="${variant}"${size !== 'md' ? ` size="${size}"` : ''}>${typeof children === 'string' ? children : '...'}</Badge>`;
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
        minWidth: '140px',
      }}
      title={`Click to copy code`}
    >
      <Badge variant={variant} size={size}>
        {children}
      </Badge>
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

// Main unified Badge showcase component
const BadgesComponent: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ marginBottom: '32px' }}>Badge System</h1>

      {/* Badge Gallery */}
      <section style={{ marginBottom: '64px' }}>
        <p style={{ marginBottom: '24px', color: 'var(--ai-color-text-secondary)' }}>
          Compact, circular indicators for ratings, counters, status, and tags. Click any badge to
          copy its code.
        </p>

        {/* Variants Section */}
        <div style={{ marginBottom: '48px' }}>
          <header style={{ marginBottom: '24px' }}>
            <h2 style={{ marginBottom: '8px' }}>Badge Variants</h2>
            <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
              6 variants available for different use cases
            </p>
          </header>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
              gap: '16px',
            }}
          >
            <BadgeCard variant="default" label="Default" description="Ratings & counters">
              9.2
            </BadgeCard>
            <BadgeCard variant="filled" label="Filled" description="Notifications">
              5
            </BadgeCard>
            <BadgeCard variant="success" label="Success" description="Positive status">
              ✓
            </BadgeCard>
            <BadgeCard variant="warning" label="Warning" description="Attention needed">
              !
            </BadgeCard>
            <BadgeCard variant="error" label="Error" description="Critical states">
              ×
            </BadgeCard>
            <BadgeCard variant="neutral" label="Neutral" description="Tags & categories">
              AI
            </BadgeCard>
          </div>
        </div>

        {/* Common Use Cases */}
        <div style={{ display: 'grid', gap: '48px' }}>
          {/* Rating Badges */}
          <section>
            <header style={{ marginBottom: '24px' }}>
              <h3 style={{ marginBottom: '8px' }}>Rating & Score Badges</h3>
              <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
                Perfect for displaying ratings, scores, and grades
              </p>
            </header>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Badge variant="default" ariaLabel="Rating 9.2 out of 10">
                9.2
              </Badge>
              <Badge variant="default" ariaLabel="Rating 8.5 out of 10">
                8.5
              </Badge>
              <Badge variant="default" ariaLabel="Grade A+">
                A+
              </Badge>
              <Badge variant="default" ariaLabel="Score 95">
                95
              </Badge>
              <Badge variant="default" ariaLabel="4.5 stars">
                4.5★
              </Badge>
            </div>
          </section>

          {/* Counter Badges */}
          <section>
            <header style={{ marginBottom: '24px' }}>
              <h3 style={{ marginBottom: '8px' }}>Notification Counters</h3>
              <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
                Filled variant for notification counts and updates
              </p>
            </header>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Badge variant="filled" ariaLabel="1 notification">
                1
              </Badge>
              <Badge variant="filled" ariaLabel="5 notifications">
                5
              </Badge>
              <Badge variant="filled" ariaLabel="12 notifications">
                12
              </Badge>
              <Badge variant="filled" ariaLabel="99 or more notifications">
                99+
              </Badge>
              <Badge variant="filled" ariaLabel="3 new messages">
                3
              </Badge>
            </div>
          </section>

          {/* Status Indicators */}
          <section>
            <header style={{ marginBottom: '24px' }}>
              <h3 style={{ marginBottom: '8px' }}>Status Indicators</h3>
              <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
                Use semantic colors for system states
              </p>
            </header>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Badge variant="success" ariaLabel="Verified">
                  ✓
                </Badge>
                <span style={{ fontSize: '14px' }}>Verified</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Badge variant="warning" ariaLabel="Warning">
                  !
                </Badge>
                <span style={{ fontSize: '14px' }}>Warning</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Badge variant="error" ariaLabel="Error">
                  ×
                </Badge>
                <span style={{ fontSize: '14px' }}>Error</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Badge variant="success" ariaLabel="Online">
                  ●
                </Badge>
                <span style={{ fontSize: '14px' }}>Online</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Badge variant="neutral" ariaLabel="Offline">
                  ●
                </Badge>
                <span style={{ fontSize: '14px' }}>Offline</span>
              </div>
            </div>
          </section>

          {/* Text Labels */}
          <section>
            <header style={{ marginBottom: '24px' }}>
              <h3 style={{ marginBottom: '8px' }}>Text Labels & Tags</h3>
              <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
                Short text labels for features and categories
              </p>
            </header>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Badge variant="default">Pro</Badge>
              <Badge variant="filled">New</Badge>
              <Badge variant="success">On</Badge>
              <Badge variant="warning">Beta</Badge>
              <Badge variant="error">Off</Badge>
              <Badge variant="neutral">AI</Badge>
              <Badge variant="neutral">ML</Badge>
              <Badge variant="neutral">API</Badge>
            </div>
          </section>
        </div>
      </section>

      {/* Sizes */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Sizes</h2>
        <p style={{ marginBottom: '24px', color: 'var(--ai-color-text-secondary)' }}>
          Three sizes available: Small (32px), Medium (40px), and Large (48px).
        </p>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
          >
            <Badge size="sm" ariaLabel="5 notifications">
              5
            </Badge>
            <code style={{ fontSize: '12px', color: 'var(--ai-color-text-secondary)' }}>
              size="sm"
            </code>
            <span style={{ fontSize: '11px', color: 'var(--ai-color-text-tertiary)' }}>32px</span>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
          >
            <Badge size="md" ariaLabel="5 notifications">
              5
            </Badge>
            <code style={{ fontSize: '12px', color: 'var(--ai-color-text-secondary)' }}>
              size="md"
            </code>
            <span style={{ fontSize: '11px', color: 'var(--ai-color-text-tertiary)' }}>
              40px (default)
            </span>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
          >
            <Badge size="lg" ariaLabel="5 notifications">
              5
            </Badge>
            <code style={{ fontSize: '12px', color: 'var(--ai-color-text-secondary)' }}>
              size="lg"
            </code>
            <span style={{ fontSize: '11px', color: 'var(--ai-color-text-tertiary)' }}>48px</span>
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Real-World Examples</h2>
        <p style={{ marginBottom: '24px', color: 'var(--ai-color-text-secondary)' }}>
          See badges in common UI patterns and contexts.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* In List Items */}
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>In List Items</h3>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '400px' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  backgroundColor: 'var(--ai-color-bg-secondary)',
                  borderRadius: '8px',
                }}
              >
                <span>Premium Plan</span>
                <Badge variant="default">Pro</Badge>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  backgroundColor: 'var(--ai-color-bg-secondary)',
                  borderRadius: '8px',
                }}
              >
                <span>Notifications</span>
                <Badge variant="filled" ariaLabel="5 notifications">
                  5
                </Badge>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  backgroundColor: 'var(--ai-color-bg-secondary)',
                  borderRadius: '8px',
                }}
              >
                <span>System Status</span>
                <Badge variant="success" ariaLabel="Operational">
                  ✓
                </Badge>
              </div>
            </div>
          </div>

          {/* With Labels */}
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>With Text Labels</h3>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px' }}>Rating:</span>
                <Badge variant="default" ariaLabel="Rating 9.2 out of 10">
                  9.2
                </Badge>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px' }}>Messages:</span>
                <Badge variant="filled" ariaLabel="3 messages">
                  3
                </Badge>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px' }}>Status:</span>
                <Badge variant="success" ariaLabel="Verified">
                  ✓
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Usage</h2>

        <h3 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>Basic Usage</h3>
        <p style={{ marginBottom: '12px', color: 'var(--ai-color-text-secondary)' }}>
          Import and use Badge with different variants and sizes:
        </p>
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
          <code>{`import { Badge } from '@ainativekit/ui';

<Badge variant="default">9.2</Badge>
<Badge variant="filled">5</Badge>
<Badge variant="success">✓</Badge>
<Badge size="sm">Pro</Badge>`}</code>
        </div>

        <h3 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>
          Accessibility Best Practices
        </h3>
        <p style={{ marginBottom: '12px', color: 'var(--ai-color-text-secondary)' }}>
          Always provide <code>ariaLabel</code> for icons, symbols, and numbers that need context:
        </p>
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
          <code>{`// ✅ Good - Provides context
<Badge ariaLabel="5 unread notifications">5</Badge>
<Badge variant="success" ariaLabel="Verified user">✓</Badge>
<Badge ariaLabel="Rating 9.2 out of 10">9.2</Badge>

// ✅ Good - Text is self-explanatory
<Badge variant="neutral">Pro</Badge>
<Badge variant="default">AI</Badge>

// ❌ Bad - Missing context
<Badge>5</Badge>
<Badge variant="success">✓</Badge>`}</code>
        </div>

        <h3 style={{ fontSize: '18px', marginBottom: '12px', marginTop: '24px' }}>When to Use</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            marginBottom: '24px',
          }}
        >
          <div>
            <h4
              style={{
                fontSize: '14px',
                marginBottom: '8px',
                color: 'var(--ai-color-accent-green)',
              }}
            >
              ✅ Good Use Cases
            </h4>
            <ul
              style={{
                margin: 0,
                paddingLeft: '20px',
                color: 'var(--ai-color-text-secondary)',
                fontSize: '14px',
                lineHeight: '1.8',
              }}
            >
              <li>Notification counts</li>
              <li>Ratings and scores</li>
              <li>Status indicators</li>
              <li>Compact labels (AI, Pro, New)</li>
              <li>Category tags in tight spaces</li>
            </ul>
          </div>
          <div>
            <h4
              style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--ai-color-accent-red)' }}
            >
              ❌ Don't Use For
            </h4>
            <ul
              style={{
                margin: 0,
                paddingLeft: '20px',
                color: 'var(--ai-color-text-secondary)',
                fontSize: '14px',
                lineHeight: '1.8',
              }}
            >
              <li>Long text labels (use Chip/Tag)</li>
              <li>Interactive elements (use Button)</li>
              <li>Form inputs or controls</li>
              <li>Primary content display</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Props Section */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Props</h2>
        <PropsTable
          hideThemeColumn
          rows={[
            {
              name: 'variant',
              description:
                'Visual style variant. Options: "default" (light bg, blue text), "filled" (solid blue), "success" (green), "warning" (orange), "error" (red), "neutral" (gray). Default: "default"',
            },
            {
              name: 'size',
              description:
                'Badge size. Options: "sm" (32px), "md" (40px), "lg" (48px). Default: "md"',
            },
            {
              name: 'ariaLabel',
              description:
                'Accessible label for screen readers. Required for icons/symbols/numbers. Automatically adds role="status" when provided.',
            },
            {
              name: 'children',
              description: 'Badge content. Keep it short (1-3 characters) for best appearance.',
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

export const Badges: StoryObj = {
  render: () => <BadgesComponent />,
};
