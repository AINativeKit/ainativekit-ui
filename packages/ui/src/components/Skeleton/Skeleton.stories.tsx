import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';
import type { SkeletonVariant } from './Skeleton';
import { Card } from '../Card';
import { PropsTable } from '../../tokens/PropsTable';

const meta: Meta<typeof Skeleton> = {
  title: 'Primitive Components/Skeletons',
  component: Skeleton,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// Helper component for skeleton showcase cards
const SkeletonCard: React.FC<{
  variant: SkeletonVariant;
  width?: number | string;
  height?: number | string;
  label: string;
  description: string;
}> = ({ variant, width, height, label, description }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    const widthStr = width ? ` width={${typeof width === 'string' ? `"${width}"` : width}}` : '';
    const heightStr = height ? ` height={${typeof height === 'string' ? `"${height}"` : height}}` : '';
    const code = `<Skeleton variant="${variant}"${widthStr}${heightStr} />`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card
      elevationLevel="1"
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
      <Skeleton variant={variant} width={width} height={height} />
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

// Main unified Skeleton showcase component
const SkeletonsComponent: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ marginBottom: '32px' }}>Skeleton System</h1>

      {/* Introduction */}
      <section style={{ marginBottom: '64px' }}>
        <p style={{ marginBottom: '24px', color: 'var(--ai-color-text-secondary)', fontSize: '16px', lineHeight: '1.6' }}>
          Loading state placeholders that indicate content is loading. Use skeletons to reduce perceived wait time and improve user experience. Click any skeleton to copy its code.
        </p>
      </section>

      {/* Skeleton Variants */}
      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px' }}>Skeleton Variants</h2>
          <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
            3 variants for different content types
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
          <SkeletonCard
            variant="rectangular"
            width={160}
            height={80}
            label="Rectangular"
            description="Default shape for images, cards"
          />
          <SkeletonCard
            variant="text"
            width="100%"
            label="Text"
            description="For text content with line height"
          />
          <SkeletonCard
            variant="circular"
            width={56}
            height={56}
            label="Circular"
            description="For avatars and icons"
          />
        </div>
      </section>

      {/* Animation Control */}
      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>Animation</h2>
          <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
            Control animation for reduced motion or static designs
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '24px' }}>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>With Animation (Default)</h3>
            <Card elevationLevel="1" style={{ padding: '16px' }}>
              <Skeleton width={200} height={100} />
            </Card>
            <p style={{ fontSize: '12px', color: 'var(--ai-color-text-secondary)', marginTop: '8px' }}>
              Smooth wave animation
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>Without Animation</h3>
            <Card elevationLevel="1" style={{ padding: '16px' }}>
              <Skeleton width={200} height={100} animation={false} />
            </Card>
            <p style={{ fontSize: '12px', color: 'var(--ai-color-text-secondary)', marginTop: '8px' }}>
              Static placeholder
            </p>
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Real-World Examples</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
          {/* Card Loading */}
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>Card Loading</h3>
            <Card elevationLevel="1" style={{ padding: '16px' }}>
              <Skeleton variant="rectangular" height={180} style={{ marginBottom: 12 }} />
              <Skeleton variant="text" width="60%" style={{ marginBottom: 8 }} />
              <Skeleton variant="text" width="80%" />
            </Card>
            <details style={{ marginTop: '8px', fontSize: '12px', color: 'var(--ai-color-text-secondary)' }}>
              <summary style={{ cursor: 'pointer', userSelect: 'none' }}>View code</summary>
              <pre style={{ marginTop: '8px', padding: '8px', background: 'var(--ai-color-bg-secondary)', borderRadius: '4px', overflow: 'auto' }}>
                {`<Skeleton height={180} style={{ marginBottom: 12 }} />
<Skeleton variant="text" width="60%" style={{ marginBottom: 8 }} />
<Skeleton variant="text" width="80%" />`}
              </pre>
            </details>
          </div>

          {/* Profile Loading */}
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>Profile Loading</h3>
            <Card elevationLevel="1" style={{ padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Skeleton variant="circular" width={48} height={48} />
                <div style={{ flex: 1 }}>
                  <Skeleton variant="text" width="40%" style={{ marginBottom: 8 }} />
                  <Skeleton variant="text" width="60%" />
                </div>
              </div>
            </Card>
            <details style={{ marginTop: '8px', fontSize: '12px', color: 'var(--ai-color-text-secondary)' }}>
              <summary style={{ cursor: 'pointer', userSelect: 'none' }}>View code</summary>
              <pre style={{ marginTop: '8px', padding: '8px', background: 'var(--ai-color-bg-secondary)', borderRadius: '4px', overflow: 'auto' }}>
                {`<div style={{ display: 'flex', gap: 12 }}>
  <Skeleton variant="circular" width={48} height={48} />
  <div style={{ flex: 1 }}>
    <Skeleton variant="text" width="40%" />
    <Skeleton variant="text" width="60%" />
  </div>
</div>`}
              </pre>
            </details>
          </div>

          {/* List Loading */}
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>List Loading</h3>
            <Card elevationLevel="1" style={{ padding: '16px' }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: i < 3 ? 16 : 0 }}>
                  <Skeleton variant="circular" width={32} height={32} />
                  <div style={{ flex: 1 }}>
                    <Skeleton variant="text" width="70%" />
                  </div>
                </div>
              ))}
            </Card>
            <details style={{ marginTop: '8px', fontSize: '12px', color: 'var(--ai-color-text-secondary)' }}>
              <summary style={{ cursor: 'pointer', userSelect: 'none' }}>View code</summary>
              <pre style={{ marginTop: '8px', padding: '8px', background: 'var(--ai-color-bg-secondary)', borderRadius: '4px', overflow: 'auto' }}>
                {`{items.map(item => (
  <div key={item.id} style={{ display: 'flex', gap: 12 }}>
    <Skeleton variant="circular" width={32} height={32} />
    <Skeleton variant="text" width="70%" />
  </div>
))}`}
              </pre>
            </details>
          </div>

          {/* Table Loading */}
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>Table Loading</h3>
            <Card elevationLevel="1" style={{ padding: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: 12, marginBottom: 12 }}>
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
              </div>
              {[1, 2, 3].map(i => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: 12, marginBottom: i < 3 ? 8 : 0 }}>
                  <Skeleton variant="text" width="80%" />
                  <Skeleton variant="text" width="90%" />
                  <Skeleton variant="text" width="60%" />
                </div>
              ))}
            </Card>
            <details style={{ marginTop: '8px', fontSize: '12px', color: 'var(--ai-color-text-secondary)' }}>
              <summary style={{ cursor: 'pointer', userSelect: 'none' }}>View code</summary>
              <pre style={{ marginTop: '8px', padding: '8px', background: 'var(--ai-color-bg-secondary)', borderRadius: '4px', overflow: 'auto' }}>
                {`<div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: 12 }}>
  <Skeleton variant="text" />
  <Skeleton variant="text" />
  <Skeleton variant="text" />
</div>`}
              </pre>
            </details>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Usage</h2>
        
        <details style={{ marginBottom: '16px' }}>
          <summary style={{ cursor: 'pointer', fontWeight: 600, padding: '12px', background: 'var(--ai-color-bg-secondary)', borderRadius: '8px', userSelect: 'none' }}>
            Basic Card Loading
          </summary>
          <pre style={{ marginTop: '12px', padding: '16px', background: 'var(--ai-color-bg-secondary)', borderRadius: '8px', overflow: 'auto' }}>
            {`import { Skeleton } from '@ainativekit/ui/primitives';

function CardLoading() {
  return (
    <div>
      <Skeleton height={200} style={{ marginBottom: 12 }} />
      <Skeleton variant="text" width="60%" style={{ marginBottom: 8 }} />
      <Skeleton variant="text" width="80%" />
    </div>
  );
}`}
          </pre>
        </details>

        <details style={{ marginBottom: '16px' }}>
          <summary style={{ cursor: 'pointer', fontWeight: 600, padding: '12px', background: 'var(--ai-color-bg-secondary)', borderRadius: '8px', userSelect: 'none' }}>
            With Loading State
          </summary>
          <pre style={{ marginTop: '12px', padding: '16px', background: 'var(--ai-color-bg-secondary)', borderRadius: '8px', overflow: 'auto' }}>
            {`import { Skeleton } from '@ainativekit/ui/primitives';

function UserProfile({ loading, user }) {
  if (loading) {
    return (
      <div style={{ display: 'flex', gap: 12 }}>
        <Skeleton variant="circular" width={48} height={48} />
        <div style={{ flex: 1 }}>
          <Skeleton variant="text" width="40%" style={{ marginBottom: 8 }} />
          <Skeleton variant="text" width="60%" />
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <img src={user.avatar} alt={user.name} />
      <div>
        <h3>{user.name}</h3>
        <p>{user.bio}</p>
      </div>
    </div>
  );
}`}
          </pre>
        </details>

        <details>
          <summary style={{ cursor: 'pointer', fontWeight: 600, padding: '12px', background: 'var(--ai-color-bg-secondary)', borderRadius: '8px', userSelect: 'none' }}>
            Custom Width and Height
          </summary>
          <pre style={{ marginTop: '12px', padding: '16px', background: 'var(--ai-color-bg-secondary)', borderRadius: '8px', overflow: 'auto' }}>
            {`import { Skeleton } from '@ainativekit/ui/primitives';

function CustomSkeleton() {
  return (
    <div>
      {/* Using pixel values */}
      <Skeleton width={200} height={100} />
      
      {/* Using CSS strings */}
      <Skeleton width="100%" height="auto" />
      <Skeleton width="20rem" height="8rem" />
      
      {/* Text variant respects line-height automatically */}
      <Skeleton variant="text" width="80%" />
    </div>
  );
}`}
          </pre>
        </details>
      </section>

      {/* Props */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Props</h2>
        
        <PropsTable
          hideThemeColumn
          rows={[
            {
              name: 'variant',
              description: 'Shape variant. Options: "rectangular" | "text" | "circular". Default: "rectangular"',
            },
            {
              name: 'width',
              description: 'Width of skeleton. Accepts number (px) or CSS string (e.g., "100%", "20rem")',
            },
            {
              name: 'height',
              description: 'Height of skeleton. Accepts number (px) or CSS string',
            },
            {
              name: 'animation',
              description: 'Enable wave animation. Default: true',
            },
            {
              name: 'className',
              description: 'Additional CSS classes',
            },
            {
              name: 'style',
              description: 'Inline styles',
            },
            {
              name: 'data-testid',
              description: 'Test ID for testing purposes',
            },
          ]}
        />
      </section>
    </div>
  );
};

// Single unified story
export const Skeletons: StoryObj = {
  render: () => <SkeletonsComponent />,
};
