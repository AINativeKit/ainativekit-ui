import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SummaryCard } from './SummaryCard';
import { PropsTable } from '../../tokens/PropsTable';

const meta: Meta<typeof SummaryCard> = {
  title: 'Composed Components/Cards/Summary Cards',
  component: SummaryCard,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// Sample images
const SAMPLE_IMAGES = {
  restaurant: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
  pizza: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80',
  pasta: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80',
  salad: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80',
  dessert: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80',
} as const;

const SAMPLE_IMAGE_KEYS = ['pizza', 'pasta', 'salad', 'dessert'] as const;

const CARD_WIDTH = 345;
const COMPACT_CARD_WIDTH = 280;

// Main unified SummaryCard showcase component
const SummaryCardsComponent: React.FC = () => {
  const [retryCount, setRetryCount] = React.useState(0);

  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ marginBottom: '32px' }}>SummaryCard System</h1>

      {/* Introduction */}
      <section style={{ marginBottom: '64px' }}>
        <p
          style={{
            marginBottom: '24px',
            color: 'var(--ai-color-text-secondary)',
            fontSize: '16px',
            lineHeight: '1.6',
          }}
        >
          Cards displaying content summaries with flexible image layouts (single or 2-4 grid),
          header with badge, description, and action button. Perfect for restaurant listings,
          product summaries, and content previews. Features loading, error, and empty states with
          native lazy loading and image callbacks.
        </p>
      </section>

      {/* Image Layouts */}
      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px' }}>Image Layouts</h2>
          <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
            Flexible image display: single hero image or 2-4 image grid with auto-layout
          </p>
        </header>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
            alignItems: 'start',
          }}
        >
          <SummaryCard
            images={SAMPLE_IMAGES.restaurant}
            title="Single Image"
            subtitle="Full-width hero"
            badge="9.2"
            description="Perfect for featuring a primary image with content below"
            buttonText="View Details"
            style={{ maxWidth: `${CARD_WIDTH}px` }}
          />
          <SummaryCard
            images={[
              { src: SAMPLE_IMAGES.pizza, alt: 'Pizza' },
              { src: SAMPLE_IMAGES.pasta, alt: 'Pasta' },
            ]}
            title="2 Images"
            subtitle="Side by side"
            badge="9.0"
            description="Two images displayed in equal columns"
            buttonText="View Menu"
            style={{ maxWidth: `${CARD_WIDTH}px` }}
          />
          <SummaryCard
            images={[
              { src: SAMPLE_IMAGES.pizza, alt: 'Pizza' },
              { src: SAMPLE_IMAGES.pasta, alt: 'Pasta' },
              { src: SAMPLE_IMAGES.salad, alt: 'Salad' },
            ]}
            title="3 Images"
            subtitle="Large + 2 Small"
            badge="8.8"
            description="Featured image with two supporting images in a grid"
            buttonText="Explore"
            style={{ maxWidth: `${CARD_WIDTH}px` }}
          />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
            marginTop: '24px',
            alignItems: 'start',
          }}
        >
          <SummaryCard
            images={[
              { src: SAMPLE_IMAGES.pizza, alt: 'Pizza' },
              { src: SAMPLE_IMAGES.pasta, alt: 'Pasta' },
              { src: SAMPLE_IMAGES.salad, alt: 'Salad' },
              { src: SAMPLE_IMAGES.dessert, alt: 'Dessert' },
            ]}
            title="4 Images"
            subtitle="2x2 Grid"
            badge="9.5"
            description="Four images in balanced grid layout"
            buttonText="See All Photos"
            style={{ maxWidth: `${CARD_WIDTH}px` }}
          />
          <SummaryCard
            images={Array.from({ length: 10 }, (_, i) => ({
              src: SAMPLE_IMAGES[SAMPLE_IMAGE_KEYS[i % 4]],
              alt: `Image ${i + 1}`,
            }))}
            title="5+ Images"
            subtitle="With Overflow"
            badge="9.1"
            description="Shows first 4 images with +N indicator for remaining"
            buttonText="View Gallery"
            style={{ maxWidth: `${CARD_WIDTH}px` }}
          />
        </div>
      </section>

      {/* Content Variations */}
      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px' }}>Content Variations</h2>
          <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
            Flexible content combinations from minimal to complete
          </p>
        </header>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
            alignItems: 'start',
          }}
        >
          <SummaryCard
            images={SAMPLE_IMAGES.restaurant}
            title="Image + Title Only"
            style={{ maxWidth: `${CARD_WIDTH}px` }}
          />
          <SummaryCard
            images={SAMPLE_IMAGES.restaurant}
            title="With Subtitle"
            subtitle="Additional context"
            style={{ maxWidth: `${CARD_WIDTH}px` }}
          />
          <SummaryCard
            images={SAMPLE_IMAGES.restaurant}
            title="With Badge"
            subtitle="Rating display"
            badge="9.2"
            style={{ maxWidth: `${CARD_WIDTH}px` }}
          />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
            marginTop: '24px',
            alignItems: 'start',
          }}
        >
          <SummaryCard
            images={SAMPLE_IMAGES.restaurant}
            title="With Description"
            subtitle="Location info"
            description="A cozy Italian restaurant in the heart of downtown"
            style={{ maxWidth: `${CARD_WIDTH}px` }}
          />
          <SummaryCard
            images={SAMPLE_IMAGES.restaurant}
            title="With Action Button"
            subtitle="Call to action"
            badge="9.2"
            buttonText="Make Reservation"
            style={{ maxWidth: `${CARD_WIDTH}px` }}
          />
          <SummaryCard
            images={SAMPLE_IMAGES.restaurant}
            title="Complete Card"
            subtitle="1427 Via Campania"
            badge="9.2"
            description="A tiny, brick-walled trattoria tucked down a side street"
            buttonText="Add to Order"
            style={{ maxWidth: `${CARD_WIDTH}px` }}
          />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
            marginTop: '24px',
            alignItems: 'start',
          }}
        >
          <SummaryCard
            title="No Images"
            subtitle="Text only card"
            badge="8.5"
            description="Card can work without images for text-focused content"
            buttonText="Learn More"
            style={{ maxWidth: `${CARD_WIDTH}px` }}
          />
          <SummaryCard
            images={SAMPLE_IMAGES.restaurant}
            title="With Metadata"
            description="Card with structured metadata items"
            metadata={[
              { icon: 'clock', label: '10 min read' },
              { icon: 'calendar-today', label: 'October 30, 2025' },
            ]}
            style={{ maxWidth: `${CARD_WIDTH}px` }}
          />
          <SummaryCard
            title="With Multiple Metadata"
            description="Display multiple metadata items with icons"
            metadata={[
              { icon: 'star', label: '9.2' },
              { icon: 'map-pin', label: 'San Francisco' },
              { icon: 'clock', label: 'Open now' },
            ]}
            style={{ maxWidth: `${CARD_WIDTH}px` }}
          />
        </div>
      </section>

      {/* Custom Icons */}
      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px' }}>Custom Icons</h2>
          <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
            Metadata icons can be library icons (string names) or custom React elements (SVGs, icon
            components)
          </p>
        </header>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
            alignItems: 'start',
          }}
        >
          {/* Custom property icons example */}
          <SummaryCard
            images="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
            title="$5,449,000"
            subtitle="98 Beach Parade, Palm Beach, Florida"
            metadata={[
              {
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                ),
                label: '5',
              },
              {
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 6h6M12 3v3M13 17h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1z" />
                    <rect x="3" y="10" width="18" height="11" rx="2" />
                  </svg>
                ),
                label: '2',
              },
              {
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="5" y="11" width="14" height="10" rx="2" />
                    <circle cx="12" cy="16" r="2" />
                    <path d="M16 11V7a4 4 0 0 0-8 0v4" />
                  </svg>
                ),
                label: '3',
              },
              {
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                ),
                label: '625m²',
              },
              { label: '• House' },
            ]}
            buttonText="View property"
            style={{ maxWidth: `${CARD_WIDTH}px` }}
          />

          {/* Mixed library and custom icons */}
          <SummaryCard
            images={SAMPLE_IMAGES.restaurant}
            title="Mixed Icon Types"
            subtitle="Library + Custom Icons"
            description="Combine library icons with custom SVG elements seamlessly"
            metadata={[
              { icon: 'clock', label: '10 min' },
              {
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ),
                label: 'Featured',
              },
              { icon: 'map-pin', label: 'SF' },
            ]}
            style={{ maxWidth: `${CARD_WIDTH}px` }}
          />

          {/* Text-only metadata (no icons) */}
          <SummaryCard
            images={SAMPLE_IMAGES.restaurant}
            title="Text-Only Metadata"
            subtitle="No icons needed"
            description="Metadata items can omit icons entirely"
            metadata={[
              { label: 'Posted 2 hours ago' },
              { label: 'Updated recently' },
              { label: 'Verified listing' },
            ]}
            style={{ maxWidth: `${CARD_WIDTH}px` }}
          />
        </div>
      </section>

      {/* Badge Variants */}
      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px' }}>Badge/Chip Variants</h2>
          <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
            Different badge/chip styles for various use cases
          </p>
        </header>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
            alignItems: 'start',
          }}
        >
          <SummaryCard
            images={SAMPLE_IMAGES.restaurant}
            title="Default Badge"
            subtitle="Neutral style"
            badge="9.2"
            badgeVariant="default"
            description="Standard accent badge for general ratings"
            style={{ maxWidth: `${CARD_WIDTH}px` }}
          />
          <SummaryCard
            images={SAMPLE_IMAGES.restaurant}
            title="Success Chip"
            subtitle="Positive indicator"
            badge="Verified"
            badgeVariant="success"
            description="Green chip for positive status"
            style={{ maxWidth: `${CARD_WIDTH}px` }}
          />
          <SummaryCard
            images={SAMPLE_IMAGES.restaurant}
            title="Warning Chip"
            subtitle="Attention needed"
            badge="Limited"
            badgeVariant="warning"
            description="Warning chip for warnings or alerts"
            style={{ maxWidth: `${CARD_WIDTH}px` }}
          />
          <SummaryCard
            images={SAMPLE_IMAGES.restaurant}
            title="Error Chip"
            subtitle="Critical status"
            badge="Closed"
            badgeVariant="error"
            description="Red chip for errors or unavailable"
            style={{ maxWidth: `${CARD_WIDTH}px` }}
          />
        </div>
      </section>

      {/* Discovery/Browse Mode - Compact Size (NEW - replaces DiscoveryCard) */}
      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px' }}>Discovery/Browse Mode - Compact Size (NEW)</h2>
          <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
            Dense layout optimized for carousels and discovery interfaces. Use size="compact" with imageAspectRatio="4/3" to replicate DiscoveryCard.
            Perfect for restaurant listings, product catalogs, and content discovery.
          </p>
        </header>

        {/* Single Card with Code Example */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: 'var(--ai-color-text-primary)' }}>
            Single Card Example
          </h3>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <SummaryCard
              images="https://persistent.oaistatic.com/pizzaz/pizzaz-1.png"
              title="Tony's Pizzeria"
              subtitle="123 Main Street"
              badge="4.8"
              size="compact"
              imageAspectRatio="4/3"
              description="Award-winning Neapolitan pizzas with wood-fired oven."
              metadata={[
                { label: '$$$', separator: '•' },
                { label: 'Neapolitan', separator: '•' },
                { label: 'Wood-fired' },
              ]}
              buttonText="Order now"
              onButtonClick={() => alert('Order clicked!')}
              style={{ width: `${COMPACT_CARD_WIDTH}px` }}
            />
            <pre style={{ flex: 1, minWidth: '300px', background: 'var(--ai-color-bg-secondary)', border: '1px solid var(--ai-color-border)', borderRadius: '8px', padding: '16px', fontSize: '12px', lineHeight: '1.5', overflow: 'auto', margin: 0 }}>
{`<SummaryCard
  images="..."
  title="Tony's Pizzeria"
  subtitle="123 Main Street"
  badge="4.8"
  size="compact"
  imageAspectRatio="4/3"
  description="Award-winning..."
  metadata={[
    { label: '$$$', separator: '•' },
    { label: 'Neapolitan', separator: '•' },
    { label: 'Wood-fired' }
  ]}
  buttonText="Order now"
  style={{ width: '280px' }}
/>`}
            </pre>
          </div>
        </div>

        {/* Grid of Cards */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: 'var(--ai-color-text-primary)' }}>
            Multiple Cards in Grid
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fill, minmax(${COMPACT_CARD_WIDTH}px, 1fr))`, gap: '16px' }}>
            {[
              { id: '1', title: "Tony's Pizzeria", subtitle: '123 Main Street', image: 'https://persistent.oaistatic.com/pizzaz/pizzaz-1.png', description: 'Award-winning Neapolitan pizzas with wood-fired oven.', badge: '4.8', features: ['$$$', 'Neapolitan', 'Wood-fired'] },
              { id: '2', title: 'Slice Haven', subtitle: '456 Park Avenue', image: 'https://persistent.oaistatic.com/pizzaz/pizzaz-3.png', description: 'New York style slices with fresh mozzarella.', badge: '4.6', features: ['$$', 'Slices', 'Fresh'] },
              { id: '3', title: 'Pesto Kitchen', subtitle: '789 Garden Lane', image: 'https://persistent.oaistatic.com/pizzaz/pizzaz-5.png', description: 'Creative pesto-based pizzas with seasonal ingredients.', badge: '4.7', features: ['$$', 'Pesto', 'Creative'] },
            ].map((r) => (
              <SummaryCard key={r.id} images={r.image} title={r.title} subtitle={r.subtitle} badge={r.badge} size="compact" imageAspectRatio="4/3" description={r.description} metadata={r.features.map((f, i, arr) => ({ label: f, separator: i < arr.length - 1 ? '•' : undefined }))} buttonText="Order now" onButtonClick={() => alert(`Order from ${r.title}`)} style={{ width: '100%' }} />
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: 'var(--ai-color-text-primary)' }}>
            Key Features
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
            {[
              { emoji: '🖼️', title: '4:3 Aspect Ratio', desc: 'Balanced proportions for content preview' },
              { emoji: '⭐', title: 'Badge Support', desc: 'Display ratings with flexible variants' },
              { emoji: '✨', title: 'Metadata Separators', desc: 'Custom separators (•, |, etc.)' },
              { emoji: '📝', title: 'Dense Typography', desc: 'Compact text for info density' },
              { emoji: '🎨', title: 'Design Tokens', desc: 'Consistent theming' },
              { emoji: '🔘', title: 'Action Button', desc: 'Built-in CTA button' },
            ].map((f) => (
              <div key={f.title} style={{ background: 'var(--ai-color-bg-secondary)', border: '1px solid var(--ai-color-border)', borderRadius: '8px', padding: '12px' }}>
                <div style={{ fontSize: '20px', marginBottom: '6px' }}>{f.emoji}</div>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '12px', fontWeight: '600', color: 'var(--ai-color-text-primary)' }}>{f.title}</h4>
                <p style={{ margin: 0, fontSize: '11px', color: 'var(--ai-color-text-secondary)', lineHeight: '1.4' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: 'var(--ai-color-text-primary)' }}>
            Use Cases
          </h3>
          <div style={{ background: 'var(--ai-color-bg-secondary)', border: '1px solid var(--ai-color-border)', borderRadius: '8px', padding: '16px', fontSize: '13px', lineHeight: '1.6', color: 'var(--ai-color-text-secondary)' }}>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li><strong>Restaurant Discovery:</strong> Browse restaurants with ratings, pricing, and cuisine types in carousels</li>
              <li><strong>Product Catalogs:</strong> Display products in grid or carousel layouts with quick actions</li>
              <li><strong>Hotel/Travel:</strong> Show accommodations with amenities and booking options</li>
              <li><strong>Content Discovery:</strong> Browse articles, videos with rich previews</li>
              <li><strong>E-commerce:</strong> Product showcase with ratings and quick-buy actions</li>
            </ul>
          </div>
        </div>

        {/* Aspect Ratio Variants */}
        <div>
          <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: 'var(--ai-color-text-primary)' }}>
            Image Aspect Ratio Options
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fill, minmax(${COMPACT_CARD_WIDTH}px, 1fr))`, gap: '16px' }}>
            <SummaryCard images={SAMPLE_IMAGES.restaurant} title="4:3 Classic" subtitle="Recommended" badge="4.8" size="compact" imageAspectRatio="4/3" description="Balanced proportions, perfect for most content" metadata={[{ label: 'Default' }]} style={{ width: '100%' }} />
            <SummaryCard images={SAMPLE_IMAGES.restaurant} title="16:9 Widescreen" subtitle="Cinematic" badge="4.7" size="compact" imageAspectRatio="16/9" description="Wide format for landscape-oriented content" metadata={[{ label: 'Landscape' }]} style={{ width: '100%' }} />
            <SummaryCard images={SAMPLE_IMAGES.restaurant} title="1:1 Square" subtitle="Symmetric" badge="4.6" size="compact" imageAspectRatio="1/1" description="Square format for symmetric compositions" metadata={[{ label: 'Square' }]} style={{ width: '100%' }} />
          </div>
        </div>
      </section>

      {/* States */}
      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px' }}>States</h2>
          <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
            Loading, error, and empty states for all scenarios
          </p>
        </header>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
            alignItems: 'start',
          }}
        >
          {/* Loading States */}
          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '12px',
                color: 'var(--ai-color-text-primary)',
              }}
            >
              Loading - Single Image
            </h3>
            <SummaryCard
              images={SAMPLE_IMAGES.restaurant}
              title="Restaurant Name"
              subtitle="Location"
              badge="9.2"
              description="Description text"
              buttonText="Action"
              loading={true}
              style={{ maxWidth: `${CARD_WIDTH}px` }}
            />
          </div>

          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '12px',
                color: 'var(--ai-color-text-primary)',
              }}
            >
              Loading - Grid Images
            </h3>
            <SummaryCard
              images={[
                { src: SAMPLE_IMAGES.pizza, alt: 'Pizza' },
                { src: SAMPLE_IMAGES.pasta, alt: 'Pasta' },
                { src: SAMPLE_IMAGES.salad, alt: 'Salad' },
              ]}
              title="Restaurant Name"
              subtitle="Location"
              badge="9.2"
              loading={true}
              loadingImageCount={3}
              style={{ maxWidth: `${CARD_WIDTH}px` }}
            />
          </div>

          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '12px',
                color: 'var(--ai-color-text-primary)',
              }}
            >
              Loading - No Images
            </h3>
            <SummaryCard
              title="Restaurant Name"
              subtitle="Location"
              badge="9.2"
              description="Description text"
              buttonText="Action"
              loading={true}
              style={{ maxWidth: `${CARD_WIDTH}px` }}
            />
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
            marginTop: '24px',
            alignItems: 'start',
          }}
        >
          {/* Error State */}
          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '12px',
                color: 'var(--ai-color-text-primary)',
              }}
            >
              Error State
            </h3>
            <SummaryCard
              error={true}
              errorTitle="Failed to load"
              errorMessage="Could not fetch restaurant data"
              style={{ maxWidth: `${CARD_WIDTH}px` }}
            />
          </div>

          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '12px',
                color: 'var(--ai-color-text-primary)',
              }}
            >
              Error with Retry
            </h3>
            <SummaryCard
              error={true}
              errorTitle="Connection failed"
              errorMessage="Unable to load content. Please try again."
              onErrorRetry={() => {
                setRetryCount((c) => c + 1);
                console.log('Retry clicked', retryCount);
              }}
              style={{ maxWidth: `${CARD_WIDTH}px` }}
            />
          </div>

          {/* Empty State */}
          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '12px',
                color: 'var(--ai-color-text-primary)',
              }}
            >
              Empty State
            </h3>
            <SummaryCard
              emptyTitle="No content available"
              emptyMessage="There is currently no data to display"
              style={{ maxWidth: `${CARD_WIDTH}px` }}
            />
          </div>
        </div>
      </section>

      {/* Performance Features */}
      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px' }}>Performance & Callbacks</h2>
          <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
            Native lazy loading enabled by default, with image load/error callbacks
          </p>
        </header>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
            alignItems: 'start',
          }}
        >
          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '12px',
                color: 'var(--ai-color-text-primary)',
              }}
            >
              Lazy Loading (Default)
            </h3>
            <SummaryCard
              images={SAMPLE_IMAGES.restaurant}
              title="Lazy Loaded Image"
              subtitle="loading='lazy'"
              description="Images load as they enter viewport for better performance"
              style={{ maxWidth: `${CARD_WIDTH}px` }}
            />
            <p
              style={{
                fontSize: '12px',
                color: 'var(--ai-color-text-secondary)',
                marginTop: '8px',
              }}
            >
              ✓ imageLazy=true (default)
            </p>
          </div>

          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '12px',
                color: 'var(--ai-color-text-primary)',
              }}
            >
              Eager Loading
            </h3>
            <SummaryCard
              images={SAMPLE_IMAGES.restaurant}
              title="Eagerly Loaded"
              subtitle="loading='eager'"
              description="Disable lazy loading for above-the-fold content"
              imageLazy={false}
              style={{ maxWidth: `${CARD_WIDTH}px` }}
            />
            <p
              style={{
                fontSize: '12px',
                color: 'var(--ai-color-text-secondary)',
                marginTop: '8px',
              }}
            >
              ✓ imageLazy=false
            </p>
          </div>

          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '12px',
                color: 'var(--ai-color-text-primary)',
              }}
            >
              Image Callbacks
            </h3>
            <SummaryCard
              images={SAMPLE_IMAGES.restaurant}
              title="With Callbacks"
              subtitle="onImageLoad/Error"
              description="Track image loading and errors for analytics or fallbacks"
              onImageLoad={(e) => console.log('Image loaded:', e.currentTarget.src)}
              onImageError={(e) => console.log('Image error:', e.currentTarget.src)}
              style={{ maxWidth: `${CARD_WIDTH}px` }}
            />
            <p
              style={{
                fontSize: '12px',
                color: 'var(--ai-color-text-secondary)',
                marginTop: '8px',
              }}
            >
              ✓ Check console for events
            </p>
          </div>
        </div>
      </section>

      {/* Real-World Example */}
      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px' }}>Real-World Example</h2>
          <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
            Restaurant card with all features
          </p>
        </header>

        <div style={{ maxWidth: `${CARD_WIDTH}px` }}>
          <SummaryCard
            images={[
              { src: SAMPLE_IMAGES.pizza, alt: 'Signature Pizza' },
              { src: SAMPLE_IMAGES.pasta, alt: 'Fresh Pasta' },
              { src: SAMPLE_IMAGES.salad, alt: 'Garden Salad' },
            ]}
            title="Little Nona's"
            subtitle="1427 Via Campania, North Beach"
            badge="9.2"
            badgeVariant="success"
            description="A tiny, brick-walled trattoria tucked down a side street near Washington Square Park. The windows glow warm gold at night, and the smell of slow-simmered tomato sauce drifts out onto the sidewalk."
            metadata={[
              { icon: 'star', label: '9.2 rating' },
              { icon: 'map-pin', label: 'North Beach' },
              { icon: 'clock', label: 'Open now' },
            ]}
            buttonText="Reserve"
            onButtonClick={() => console.log('Reserve')}
            onImagesLoad={(index, _e) => console.log(`Image ${index} loaded`)}
            onImagesError={(index, _e) => console.log(`Image ${index} error`)}
          />
        </div>
      </section>

      {/* Props Documentation */}
      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px' }}>Props</h2>
          <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
            Complete API reference for SummaryCard
          </p>
        </header>
        <PropsTable
          hideThemeColumn
          rows={[
            {
              name: 'images',
              type: 'string | SummaryCardImage | SummaryCardImage[]',
              description: 'Image(s) to display - single image, or 2-4 image grid',
            },
            {
              name: 'title',
              type: 'string',
              description: 'Card title text',
            },
            {
              name: 'subtitle',
              type: 'string',
              description: 'Card subtitle text (appears below title)',
            },
            {
              name: 'badge',
              type: 'string | number',
              description: 'Badge content to display in header',
            },
            {
              name: 'badgeVariant',
              type: "'default' | 'success' | 'warning' | 'error'",
              default: "'default'",
              description: 'Badge styling variant',
            },
            {
              name: 'description',
              type: 'string',
              description: 'Main description text content',
            },
            {
              name: 'metadata',
              type: 'Array<{ icon?: IconName | React.ReactElement, label: string }>',
              description:
                'Metadata items with optional icons (library icon names OR custom React elements)',
            },
            {
              name: 'buttonText',
              type: 'string',
              description: 'Action button text',
            },
            {
              name: 'onButtonClick',
              type: '() => void',
              description: 'Button click handler',
            },
            {
              name: 'loading',
              type: 'boolean',
              description: 'Show loading skeleton state',
            },
            {
              name: 'loadingImageCount',
              type: 'number',
              default: '1 (single) or 3 (grid)',
              description: 'Number of skeleton images to show when loading',
            },
            {
              name: 'error',
              type: 'boolean',
              description: 'Show error state',
            },
            {
              name: 'errorTitle',
              type: 'string',
              default: "'Error'",
              description: 'Custom error title',
            },
            {
              name: 'errorMessage',
              type: 'string',
              default: "'Something went wrong'",
              description: 'Custom error message',
            },
            {
              name: 'onErrorRetry',
              type: '() => void',
              description: 'Shows retry button when provided',
            },
            {
              name: 'emptyTitle',
              type: 'string',
              default: "'No content'",
              description: 'Custom empty state title',
            },
            {
              name: 'emptyMessage',
              type: 'string',
              description: 'Custom empty state message',
            },
            {
              name: 'imageLazy',
              type: 'boolean',
              default: 'true',
              description: 'Enable native lazy loading for images',
            },
            {
              name: 'onImageLoad',
              type: '(event: React.SyntheticEvent<HTMLImageElement>) => void',
              description: 'Callback when single image loads successfully',
            },
            {
              name: 'onImageError',
              type: '(event: React.SyntheticEvent<HTMLImageElement>) => void',
              description: 'Callback when single image fails to load',
            },
            {
              name: 'onImagesLoad',
              type: '(index: number, event: React.SyntheticEvent<HTMLImageElement>) => void',
              description: 'Callback when grid image loads (includes image index)',
            },
            {
              name: 'onImagesError',
              type: '(index: number, event: React.SyntheticEvent<HTMLImageElement>) => void',
              description: 'Callback when grid image fails (includes image index)',
            },
            {
              name: 'className',
              type: 'string',
              description: 'Additional CSS class',
            },
            {
              name: 'style',
              type: 'React.CSSProperties',
              description: 'Inline styles',
            },
          ]}
        />
      </section>
    </div>
  );
};

export const SummaryCards: StoryObj = {
  render: () => <SummaryCardsComponent />,
};
