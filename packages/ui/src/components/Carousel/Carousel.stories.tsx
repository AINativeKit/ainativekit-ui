import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';
import { ImageCard } from '../Card/ImageCard';
import { SummaryCard } from '../Card/SummaryCard';
import { ListCard } from '../Card/ListCard';
import { PropsTable } from '../../tokens/PropsTable';

const meta: Meta<typeof Carousel> = {
  title: 'Composed Components/Carousels',
  component: Carousel,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

const sampleImages = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&auto=format&fit=crop',
];

const pepperoniImage = 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200&auto=format&fit=crop';

// Main unified Carousel showcase component
const CarouselsComponent: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ marginBottom: '32px' }}>Carousel System</h1>

      {/* Introduction */}
      <section style={{ marginBottom: '64px' }}>
        <p style={{ marginBottom: '24px', color: 'var(--ai-color-text-secondary)', fontSize: '16px', lineHeight: '1.6' }}>
          Horizontal scrolling carousel powered by Embla Carousel. Perfect for showcasing cards, images, and content collections in ChatGPT apps.
        </p>
      </section>

      {/* Basic Examples */}
      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px', alignItems: 'start' }}>
          <h2 style={{ marginBottom: '8px' }}>Basic Carousels</h2>
          <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
            Simple carousels with different card types
          </p>
        </header>

        {/* ImageCard Carousel */}
        <div style={{ marginBottom: '48px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>With ImageCards</h3>
          <Carousel>
            {sampleImages.map((image, index) => (
              <div key={index} style={{ width: '320px', flexShrink: 0 }}>
                <ImageCard
                  image={image}
                  title={`Destination ${index + 1}`}
                  subtitle="Beautiful scenery"
                  actionIcon="info-circle"
                  actionLabel="View details"
                  onAction={() => console.log(`View details for slide ${index + 1}`)}
                  size="compact"
                />
              </div>
            ))}
          </Carousel>
          <details style={{ marginTop: '16px', cursor: 'pointer' }}>
            <summary style={{ fontWeight: 600, marginBottom: '12px' }}>Show code</summary>
            <div
              style={{
                backgroundColor: 'var(--ai-color-bg-tertiary)',
                padding: '16px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                fontSize: '13px',
                marginTop: '12px',
              }}
            >
              <code style={{ whiteSpace: 'pre' }}>{`<Carousel>
  {images.map((image, i) => (
    <div key={i} style={{ width: '320px', flexShrink: 0 }}>
      <ImageCard
        image={image}
        title="Title"
        subtitle="Subtitle"
        size="compact"
      />
    </div>
  ))}
</Carousel>`}</code>
            </div>
          </details>
        </div>

        {/* SummaryCard Carousel */}
        <div style={{ marginBottom: '48px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>With SummaryCards</h3>
          <Carousel>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} style={{ width: '356px', flexShrink: 0 }}>
                <SummaryCard
                  images={[pepperoniImage, pepperoniImage, pepperoniImage]}
                  title={`Pizza ${index}`}
                  subtitle="Delicious"
                  badge="9.2"
                  description="Cupped pepperoni that curls and pools just the right amount of spicy oil."
                  buttonText="Order now"
                  onButtonClick={() => console.log(`Order Pizza ${index}`)}
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* ListCard Carousel */}
        <div style={{ marginBottom: '48px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>With ListCards</h3>
          <Carousel>
            {['Coffee', 'Tea', 'Juice', 'Smoothie', 'Water'].map((drink, index) => (
              <div key={index} style={{ width: '300px', flexShrink: 0 }}>
                <ListCard
                  headerTitle={drink}
                  items={[
                    {
                      title: `Option ${index + 1}`,
                      description: `Fresh ${drink.toLowerCase()} available now`,
                    },
                  ]}
                  buttonText="View"
                  onButtonClick={() => console.log(`View ${drink}`)}
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Mixed Content */}
        <div>
          <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>Mixed Content</h3>
          <p style={{ fontSize: '14px', color: 'var(--ai-color-text-secondary)', marginBottom: '16px' }}>
            Combine different card types and sizes in the same carousel
          </p>
          <Carousel>
            <div style={{ width: '345px', flexShrink: 0 }}>
              <ImageCard
                image={sampleImages[0]}
                title="Default ImageCard"
                subtitle="Standard 345 × 345"
              />
            </div>
            <div style={{ width: '240px', flexShrink: 0 }}>
              <ImageCard
                image={sampleImages[1]}
                title="Compact ImageCard"
                subtitle="240 × 240 footprint"
                size="compact"
              />
            </div>
            <div style={{ width: '356px', flexShrink: 0 }}>
              <SummaryCard
                images={[pepperoniImage, pepperoniImage, pepperoniImage]}
                title="SummaryCard"
                subtitle="Mixed content"
                badge="8.5"
                buttonText="Order"
              />
            </div>
            <div style={{ width: '300px', flexShrink: 0 }}>
              <ListCard
                headerTitle="ListCard"
                items={[
                  {
                    title: 'Also works great',
                    description: 'List items in carousel',
                  },
                ]}
              />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Alignment Options */}
      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px', alignItems: 'start' }}>
          <h2 style={{ marginBottom: '8px' }}>Alignment Options</h2>
          <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
            Control how slides align within the viewport: start, center, or end
          </p>
        </header>

        <div>
          {/* Start Aligned */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Start Aligned</h3>
            <p style={{ fontSize: '14px', color: 'var(--ai-color-text-secondary)', marginBottom: '12px' }}>
              Slides align to the left edge. Perfect for left-to-right browsing.
            </p>
            <Carousel align="start">
              {sampleImages.map((image, index) => (
                <div key={index} style={{ width: '240px', flexShrink: 0 }}>
                  <ImageCard
                    image={image}
                    title={`Start ${index + 1}`}
                    size="compact"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          {/* Center Aligned (Default) */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Center Aligned (Default)</h3>
            <p style={{ fontSize: '14px', color: 'var(--ai-color-text-secondary)', marginBottom: '12px' }}>
              Active slide stays centered. Most balanced for visual browsing.
            </p>
            <Carousel align="center">
              {sampleImages.map((image, index) => (
                <div key={index} style={{ width: '240px', flexShrink: 0 }}>
                  <ImageCard
                    image={image}
                    title={`Center ${index + 1}`}
                    size="compact"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          {/* End Aligned */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>End Aligned</h3>
            <p style={{ fontSize: '14px', color: 'var(--ai-color-text-secondary)', marginBottom: '12px' }}>
              Slides align to the right edge. Useful for RTL layouts or specific designs.
            </p>
            <Carousel align="end">
              {sampleImages.map((image, index) => (
                <div key={index} style={{ width: '240px', flexShrink: 0 }}>
                  <ImageCard
                    image={image}
                    title={`End ${index + 1}`}
                    size="compact"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Navigation & Controls */}
      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px', alignItems: 'start' }}>
          <h2 style={{ marginBottom: '8px' }}>Navigation & Controls</h2>
          <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
            Customize navigation buttons, edge gradients, and looping behavior
          </p>
        </header>

        <div>
          {/* Infinite Loop */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Infinite Loop</h3>
            <p style={{ fontSize: '14px', color: 'var(--ai-color-text-secondary)', marginBottom: '12px' }}>
              Enable seamless infinite looping for continuous browsing
            </p>
            <Carousel loop>
              {sampleImages.map((image, index) => (
                <div key={index} style={{ width: '240px', flexShrink: 0 }}>
                  <ImageCard
                    image={image}
                    title={`Loop ${index + 1}`}
                    subtitle="Infinite scroll"
                    size="compact"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          {/* No Navigation Buttons */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>No Navigation Buttons</h3>
            <p style={{ fontSize: '14px', color: 'var(--ai-color-text-secondary)', marginBottom: '12px' }}>
              Hide navigation buttons for touch-only or minimal interfaces
            </p>
            <Carousel showNavigation={false}>
              {sampleImages.map((image, index) => (
                <div key={index} style={{ width: '240px', flexShrink: 0 }}>
                  <ImageCard
                    image={image}
                    title={`Swipe ${index + 1}`}
                    subtitle="Drag to navigate"
                    size="compact"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          {/* No Edge Gradients */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>No Edge Gradients</h3>
            <p style={{ fontSize: '14px', color: 'var(--ai-color-text-secondary)', marginBottom: '12px' }}>
              Remove edge gradients for a cleaner, simpler look
            </p>
            <Carousel showEdgeGradients={false}>
              {sampleImages.map((image, index) => (
                <div key={index} style={{ width: '240px', flexShrink: 0 }}>
                  <ImageCard
                    image={image}
                    title={`Clean ${index + 1}`}
                    subtitle="No gradients"
                    size="compact"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          {/* Minimal (No Nav + No Gradients) */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Minimal Mode</h3>
            <p style={{ fontSize: '14px', color: 'var(--ai-color-text-secondary)', marginBottom: '12px' }}>
              Combine options for a completely minimal carousel
            </p>
            <Carousel showNavigation={false} showEdgeGradients={false}>
              {sampleImages.map((image, index) => (
                <div key={index} style={{ width: '240px', flexShrink: 0 }}>
                  <ImageCard
                    image={image}
                    title={`Minimal ${index + 1}`}
                    subtitle="Swipe only"
                    size="compact"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Spacing & Layout */}
      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px', alignItems: 'start' }}>
          <h2 style={{ marginBottom: '8px' }}>Spacing & Layout</h2>
          <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
            Control gaps, padding, and flush start alignment
          </p>
        </header>

        <div>
          {/* Default Gap (8px) */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Default Gap (8px)</h3>
            <p style={{ fontSize: '14px', color: 'var(--ai-color-text-secondary)', marginBottom: '12px' }}>
              Standard spacing between slides
            </p>
            <Carousel>
              {sampleImages.map((image, index) => (
                <div key={index} style={{ width: '240px', flexShrink: 0 }}>
                  <ImageCard
                    image={image}
                    title={`Default ${index + 1}`}
                    size="compact"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          {/* Wide Gap (32px) */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Wide Gap (32px)</h3>
            <p style={{ fontSize: '14px', color: 'var(--ai-color-text-secondary)', marginBottom: '12px' }}>
              Increase spacing with custom gap value
            </p>
            <Carousel gap="var(--ai-spacing-16)">
              {sampleImages.map((image, index) => (
                <div key={index} style={{ width: '240px', flexShrink: 0 }}>
                  <ImageCard
                    image={image}
                    title={`Wide ${index + 1}`}
                    size="compact"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          {/* No Gap */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>No Gap</h3>
            <p style={{ fontSize: '14px', color: 'var(--ai-color-text-secondary)', marginBottom: '12px' }}>
              Slides directly adjacent for continuous appearance
            </p>
            <Carousel gap="0">
              {sampleImages.map((image, index) => (
                <div key={index} style={{ width: '240px', flexShrink: 0 }}>
                  <ImageCard
                    image={image}
                    title={`Tight ${index + 1}`}
                    size="compact"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          {/* Flush Start */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Flush Start</h3>
            <p style={{ fontSize: '14px', color: 'var(--ai-color-text-secondary)', marginBottom: '12px' }}>
              First slide aligns to viewport edge with no leading offset
            </p>
            <Carousel flushStart align="start">
              {sampleImages.map((image, index) => (
                <div key={index} style={{ width: '240px', flexShrink: 0 }}>
                  <ImageCard
                    image={image}
                    title={`Flush ${index + 1}`}
                    size="compact"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Interactive Features */}
      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px', alignItems: 'start' }}>
          <h2 style={{ marginBottom: '8px' }}>Interactive Features</h2>
          <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
            Track slide changes and integrate with your app state
          </p>
        </header>

        {/* Slide Change Callback */}
        <div>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Slide Change Tracking</h3>
          <p style={{ fontSize: '14px', color: 'var(--ai-color-text-secondary)', marginBottom: '12px' }}>
            Current slide: <strong>{currentSlide + 1}</strong> of 7
          </p>
          <Carousel onSlideChange={setCurrentSlide}>
            {sampleImages.map((image, index) => (
              <div key={index} style={{ width: '240px', flexShrink: 0 }}>
                <ImageCard
                  image={image}
                  title={`Slide ${index + 1}`}
                  subtitle={index === currentSlide ? 'Active' : 'Inactive'}
                  size="compact"
                />
              </div>
            ))}
          </Carousel>
          <details style={{ marginTop: '16px', cursor: 'pointer' }}>
            <summary style={{ fontWeight: 600, marginBottom: '12px' }}>Show code</summary>
            <div
              style={{
                backgroundColor: 'var(--ai-color-bg-tertiary)',
                padding: '16px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                fontSize: '13px',
                marginTop: '12px',
              }}
            >
              <code style={{ whiteSpace: 'pre' }}>{`const [currentSlide, setCurrentSlide] = useState(0);

<Carousel onSlideChange={setCurrentSlide}>
  {/* slides */}
</Carousel>

Current: {currentSlide + 1} of {total}`}</code>
            </div>
          </details>
        </div>
      </section>

      {/* Phase 1: Loading, Error, and Empty States */}
      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px', alignItems: 'start' }}>
          <h2 style={{ marginBottom: '8px' }}>Loading, Error & Empty States</h2>
          <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
            Built-in states for loading, errors, and empty content
          </p>
        </header>

        <div>
          {/* Loading State - Recommended Pattern */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Loading State (Recommended)</h3>
            <p style={{ fontSize: '14px', color: 'var(--ai-color-text-secondary)', marginBottom: '12px' }}>
              Pass cards with loading prop for seamless transition - cards maintain their size and structure
            </p>
            <Carousel loading>
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} style={{ width: '240px', flexShrink: 0 }}>
                  <ImageCard
                    loading
                    image=""
                    title=""
                    subtitle=""
                    size="compact"
                  />
                </div>
              ))}
            </Carousel>
            <details style={{ marginTop: '16px', cursor: 'pointer' }}>
              <summary style={{ fontWeight: 600, marginBottom: '12px' }}>Show code</summary>
              <div
                style={{
                  backgroundColor: 'var(--ai-color-bg-tertiary)',
                  padding: '16px',
                  borderRadius: '8px',
                  fontFamily: 'monospace',
                  fontSize: '13px',
                  marginTop: '12px',
                }}
              >
                <code style={{ whiteSpace: 'pre' }}>{`// Recommended: Set loading on both Carousel AND cards
<Carousel loading>
  {Array.from({ length: 5 }).map((_, i) => (
    <div key={i} style={{ width: '240px', flexShrink: 0 }}>
      <ImageCard loading image="" title="" subtitle="" size="compact" />
    </div>
  ))}
</Carousel>

// When data loads, remove loading prop:
<Carousel>
  {items.map(item => (
    <div key={item.id} style={{ width: '240px', flexShrink: 0 }}>
      <ImageCard image={item.image} title={item.title} subtitle={item.subtitle} size="compact" />
    </div>
  ))}
</Carousel>`}</code>
              </div>
            </details>
          </div>

          {/* Loading State - Fallback Pattern */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Loading State (Fallback)</h3>
            <p style={{ fontSize: '14px', color: 'var(--ai-color-text-secondary)', marginBottom: '12px' }}>
              Generic skeletons when no children provided (fallback for non-card content)
            </p>
            <Carousel loading loadingSlides={7} />
            <details style={{ marginTop: '16px', cursor: 'pointer' }}>
              <summary style={{ fontWeight: 600, marginBottom: '12px' }}>Show code</summary>
              <div
                style={{
                  backgroundColor: 'var(--ai-color-bg-tertiary)',
                  padding: '16px',
                  borderRadius: '8px',
                  fontFamily: 'monospace',
                  fontSize: '13px',
                  marginTop: '12px',
                }}
              >
                <code style={{ whiteSpace: 'pre' }}>{`// Fallback: Generic skeletons (no children)
<Carousel loading loadingSlides={7} />

// Use when you don't have card structure ready yet`}</code>
              </div>
            </details>
          </div>

          {/* Error State */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Error State</h3>
            <p style={{ fontSize: '14px', color: 'var(--ai-color-text-secondary)', marginBottom: '12px' }}>
              Shows error message with optional retry button
            </p>
            <Carousel 
              error
              errorTitle="Failed to load destinations"
              errorMessage="Unable to fetch items from the server"
              onErrorRetry={() => console.log('Retry clicked')}
            />
            <details style={{ marginTop: '16px', cursor: 'pointer' }}>
              <summary style={{ fontWeight: 600, marginBottom: '12px' }}>Show code</summary>
              <div
                style={{
                  backgroundColor: 'var(--ai-color-bg-tertiary)',
                  padding: '16px',
                  borderRadius: '8px',
                  fontFamily: 'monospace',
                  fontSize: '13px',
                  marginTop: '12px',
                }}
              >
                <code style={{ whiteSpace: 'pre' }}>{`<Carousel
  error
  errorTitle="Failed to load"
  errorMessage="Unable to fetch items"
  onErrorRetry={refetch}
>
  {items.map(item => <Card key={item.id} {...item} />)}
</Carousel>`}</code>
              </div>
            </details>
          </div>

          {/* Empty State */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Empty State</h3>
            <p style={{ fontSize: '14px', color: 'var(--ai-color-text-secondary)', marginBottom: '12px' }}>
              Shows when no items are provided
            </p>
            <Carousel 
              emptyTitle="No destinations found"
              emptyMessage="Try adjusting your search filters"
            >
              {[]}
            </Carousel>
            <details style={{ marginTop: '16px', cursor: 'pointer' }}>
              <summary style={{ fontWeight: 600, marginBottom: '12px' }}>Show code</summary>
              <div
                style={{
                  backgroundColor: 'var(--ai-color-bg-tertiary)',
                  padding: '16px',
                  borderRadius: '8px',
                  fontFamily: 'monospace',
                  fontSize: '13px',
                  marginTop: '12px',
                }}
              >
                <code style={{ whiteSpace: 'pre' }}>{`<Carousel
  emptyTitle="No results found"
  emptyMessage="Try adjusting your filters"
>
  {filteredItems.map(item => <Card key={item.id} {...item} />)}
</Carousel>`}</code>
              </div>
            </details>
          </div>

          {/* Custom Empty State */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Custom Empty State</h3>
            <p style={{ fontSize: '14px', color: 'var(--ai-color-text-secondary)', marginBottom: '12px' }}>
              Provide custom empty state content
            </p>
            <Carousel 
              emptyState={
                <div style={{ textAlign: 'center', padding: '32px' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎨</div>
                  <h3 style={{ marginBottom: '8px' }}>No items yet</h3>
                  <p style={{ color: 'var(--ai-color-text-secondary)', marginBottom: '16px' }}>
                    Start by adding your first item
                  </p>
                  <button
                    style={{
                      padding: '8px 16px',
                      borderRadius: '6px',
                      border: '1px solid var(--ai-color-border-light)',
                      backgroundColor: 'var(--ai-color-bg-primary)',
                      cursor: 'pointer',
                    }}
                    onClick={() => console.log('Add item clicked')}
                  >
                    Add Item
                  </button>
                </div>
              }
            >
              {[]}
            </Carousel>
            <details style={{ marginTop: '16px', cursor: 'pointer' }}>
              <summary style={{ fontWeight: 600, marginBottom: '12px' }}>Show code</summary>
              <div
                style={{
                  backgroundColor: 'var(--ai-color-bg-tertiary)',
                  padding: '16px',
                  borderRadius: '8px',
                  fontFamily: 'monospace',
                  fontSize: '13px',
                  marginTop: '12px',
                }}
              >
                <code style={{ whiteSpace: 'pre' }}>{`<Carousel
  emptyState={
    <div>
      <h3>No items yet</h3>
      <Button onClick={handleAdd}>Add Item</Button>
    </div>
  }
>
  {items.map(item => <Card key={item.id} {...item} />)}
</Carousel>`}</code>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Edge Cases */}
      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px', alignItems: 'start' }}>
          <h2 style={{ marginBottom: '8px' }}>Edge Cases</h2>
          <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
            Handle single slides and empty states gracefully
          </p>
        </header>

        <div>
          {/* Single Slide */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Single Slide</h3>
            <p style={{ fontSize: '14px', color: 'var(--ai-color-text-secondary)', marginBottom: '12px' }}>
              Navigation buttons hide automatically when there's only one slide
            </p>
            <Carousel>
              <div style={{ width: '345px', flexShrink: 0 }}>
                <ImageCard
                  image={sampleImages[0]}
                  title="Single Slide"
                  subtitle="No navigation needed"
                />
              </div>
            </Carousel>
          </div>

          {/* Two Slides */}
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Two Slides</h3>
            <p style={{ fontSize: '14px', color: 'var(--ai-color-text-secondary)', marginBottom: '12px' }}>
              Minimal carousel with just two options
            </p>
            <Carousel>
              {sampleImages.slice(0, 2).map((image, index) => (
                <div key={index} style={{ width: '300px', flexShrink: 0 }}>
                  <ImageCard
                    image={image}
                    title={`Option ${index + 1}`}
                    size="compact"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Usage Guide */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Usage Guide</h2>

        {/* Import */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Import</h3>
          <div
            style={{
              backgroundColor: 'var(--ai-color-bg-tertiary)',
              padding: '16px',
              borderRadius: '8px',
              fontFamily: 'monospace',
              fontSize: '13px',
            }}
          >
            <code>{`import { Carousel } from '@ainativekit/ui';`}</code>
            <br />
            <code style={{ opacity: 0.7 }}>{`// or`}</code>
            <br />
            <code>{`import { Carousel } from '@ainativekit/ui/composed';`}</code>
          </div>
        </div>

        {/* Basic Usage */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Basic Usage</h3>
          <div
            style={{
              backgroundColor: 'var(--ai-color-bg-tertiary)',
              padding: '16px',
              borderRadius: '8px',
              fontFamily: 'monospace',
              fontSize: '13px',
            }}
          >
            <code style={{ whiteSpace: 'pre' }}>{`<Carousel>
  {items.map((item, i) => (
    <div key={i} style={{ width: '320px', flexShrink: 0 }}>
      <Card>{item.content}</Card>
    </div>
  ))}
</Carousel>`}</code>
          </div>
          <div
            style={{
              marginTop: '12px',
              padding: '12px',
              backgroundColor: 'var(--ai-color-bg-secondary)',
              borderRadius: '6px',
              fontSize: '14px',
            }}
          >
            <strong>⚠️ Important:</strong> Each slide must have an explicit width and{' '}
            <code style={{ backgroundColor: 'var(--ai-color-bg-tertiary)', padding: '2px 6px', borderRadius: '4px' }}>
              flexShrink: 0
            </code>{' '}
            to prevent size changes during scrolling.
          </div>
        </div>

        {/* Loading State Best Practice */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Loading State Best Practice</h3>
          <div
            style={{
              backgroundColor: 'var(--ai-color-bg-tertiary)',
              padding: '16px',
              borderRadius: '8px',
              fontFamily: 'monospace',
              fontSize: '13px',
            }}
          >
            <code style={{ whiteSpace: 'pre' }}>{`// ✅ Recommended: Seamless transition with card loading states
// Pass loading to BOTH Carousel AND cards
<Carousel loading={isLoading}>
  {items.map((item, i) => (
    <div key={i} style={{ width: '240px', flexShrink: 0 }}>
      <ImageCard
        loading={isLoading}  // Loading prop on the card itself
        image={item.image || ''}
        title={item.title || ''}
        subtitle={item.subtitle || ''}
        size="compact"
      />
    </div>
  ))}
</Carousel>

// Carousel is non-scrollable during loading
// Cards maintain their size during loading → loaded transition
// No layout shift, smooth user experience`}</code>
          </div>
          <div
            style={{
              marginTop: '12px',
              padding: '12px',
              backgroundColor: 'var(--ai-color-success-bg)',
              borderRadius: '6px',
              fontSize: '14px',
            }}
          >
            <strong>💡 Tip:</strong> Pass the loading prop to individual cards, not to the Carousel. 
            This creates a seamless transition where cards maintain their exact size and structure while 
            loading, then smoothly update with real data. Much better UX than generic skeletons!
          </div>
        </div>

        {/* Card Width Guidelines */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Card Width Guidelines</h3>
          <div
            style={{
              padding: '16px',
              backgroundColor: 'var(--ai-color-bg-secondary)',
              borderRadius: '8px',
            }}
          >
            <div style={{ marginBottom: '16px' }}>
              <strong>Recommended widths for card types:</strong>
            </div>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', lineHeight: '1.8' }}>
              <li>
                <strong>ImageCard (default):</strong> 345px
              </li>
              <li>
                <strong>ImageCard (compact):</strong> 240px
              </li>
              <li>
                <strong>SummaryCard:</strong> 356px
              </li>
              <li>
                <strong>ListCard:</strong> 280-320px
              </li>
              <li>
                <strong>Custom:</strong> Any width, but keep consistent within a carousel
              </li>
            </ul>
          </div>
        </div>

        {/* Best Practices */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Best Practices</h3>
          <div style={{ display: 'grid', gap: '16px' }}>
            <div
              style={{
                padding: '16px',
                backgroundColor: 'var(--ai-color-bg-secondary)',
                borderRadius: '8px',
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--ai-color-accent-green)' }}>
                ✅ Do:
              </div>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                <li>Use consistent slide widths within a carousel</li>
                <li>Provide 5-10 items for optimal browsing experience</li>
                <li>Enable loop for image galleries and continuous content</li>
                <li>Use edge gradients to indicate more content</li>
                <li>Test swipe gestures on touch devices</li>
                <li>Combine with Card components for rich content</li>
              </ul>
            </div>

            <div
              style={{
                padding: '16px',
                backgroundColor: 'var(--ai-color-bg-secondary)',
                borderRadius: '8px',
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--ai-color-text-error)' }}>
                ❌ Don't:
              </div>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                <li>Forget to set explicit width and flexShrink: 0 on slides</li>
                <li>Mix wildly different slide widths (causes jerky scrolling)</li>
                <li>Use for critical navigation (not all users can swipe)</li>
                <li>Include too many slides (&gt;20) without pagination</li>
                <li>Hide navigation buttons without alternative controls</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accessibility */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Accessibility</h3>
          <div
            style={{
              padding: '16px',
              backgroundColor: 'var(--ai-color-bg-secondary)',
              borderRadius: '8px',
              fontSize: '14px',
              lineHeight: '1.6',
            }}
          >
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>Navigation buttons have proper aria-labels</li>
              <li>Keyboard navigation supported (Tab to buttons, Enter to activate)</li>
              <li>Swipe gestures work with touch devices</li>
              <li>Edge gradients have aria-hidden="true"</li>
              <li>Consider providing alternative navigation for all content</li>
            </ul>
          </div>
        </div>

        {/* Performance Tips */}
        <div>
          <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Performance Tips</h3>
          <div
            style={{
              padding: '16px',
              backgroundColor: 'var(--ai-color-bg-secondary)',
              borderRadius: '8px',
              fontSize: '14px',
              lineHeight: '1.6',
            }}
          >
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>Carousel uses CSS transforms for smooth 60fps scrolling</li>
              <li>Lazy load images inside cards for faster initial render</li>
              <li>Avoid heavy computations in slide change callbacks</li>
              <li>For long lists, consider virtualization or pagination</li>
              <li>Test performance on mobile devices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Props Reference */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Props Reference</h2>
        <PropsTable
          hideThemeColumn
          rows={[
            {
              name: 'children',
              description: 'Slide content - wrap each slide in a div with explicit width and flexShrink: 0',
            },
            {
              name: 'align',
              description: "Alignment of slides within viewport: 'start' | 'center' | 'end'. Default: 'center'",
            },
            {
              name: 'loop',
              description: 'Enable infinite looping. Default: false',
            },
            {
              name: 'showNavigation',
              description: 'Show prev/next arrow buttons. Auto-hides when scrolling is not possible. Default: true',
            },
            {
              name: 'showEdgeGradients',
              description: 'Show gradient overlays at edges to indicate more content. Default: true',
            },
            {
              name: 'gap',
              description: "Gap between slides (CSS value). Default: 'var(--ai-spacing-8)' (8px)",
            },
            {
              name: 'flushStart',
              description: 'Remove leading offset so first slide is flush with viewport start. Default: false',
            },
            {
              name: 'viewportPadding',
              description: "Custom viewport padding (top and bottom). Default: 'var(--ai-spacing-10)' (10px)",
            },
            {
              name: 'onSlideChange',
              description: 'Callback fired when active slide changes. Receives index: number',
            },
            {
              name: 'onApi',
              description: 'Callback that receives Embla API instance for advanced control',
            },
            {
              name: 'className',
              description: 'Additional CSS class for the container',
            },
            {
              name: 'style',
              description: 'Additional inline styles for the container',
            },
            // Phase 1: Loading State
            {
              name: 'loading',
              description: 'Shows loading state. When true: renders children (pass Cards with loading prop for seamless transition) or falls back to skeleton slides if no children provided. Default: false',
            },
            {
              name: 'loadingSlides',
              description: 'Number of skeleton slides to show when loading and no children provided. Default: 3',
            },
            // Phase 1: Error State
            {
              name: 'error',
              description: 'Shows error message instead of carousel content. Default: false',
            },
            {
              name: 'errorTitle',
              description: "Custom error title. Default: 'Failed to load items'",
            },
            {
              name: 'errorMessage',
              description: 'Custom error message text',
            },
            {
              name: 'onErrorRetry',
              description: 'Error retry handler - shows retry button when provided',
            },
            // Phase 1: Empty State
            {
              name: 'emptyTitle',
              description: "Empty state title when no children provided. Default: 'No items'",
            },
            {
              name: 'emptyMessage',
              description: 'Empty state message text',
            },
            {
              name: 'emptyState',
              description: 'Custom empty state content (React node)',
            },
          ]}
        />
      </section>
    </div>
  );
};

export const Carousels: StoryObj = {
  render: () => <CarouselsComponent />,
};
