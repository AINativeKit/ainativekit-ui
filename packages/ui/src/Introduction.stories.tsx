import { useState } from 'react';
import type { CSSProperties, ReactNode, MouseEvent } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Album } from './components/Album';
import type { Album as AlbumType } from './components/Album/types';
import { Carousel as CarouselComponent } from './components/Carousel';
import { DiscoveryCard } from './components/Card/DiscoveryCard';
import { Card } from './components/Card';
import { List, ListItem } from './components/List';
import { Button } from './components/Button';
import { Map, FullscreenMap } from './components/Map';
import { Icon } from './components/Icon';
import type { LocationData } from './components/Map/types';

type PizzaRestaurant = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  badge: string;
  features: string[];
};

type PizzaPlace = {
  id: string;
  name: string;
  city: string;
  rating: number;
  thumbnail: string;
};

const sampleAlbums: AlbumType[] = [
  {
    id: 'responsive-showcase',
    title: 'Responsive Design Showcase',
    cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    photos: [
      {
        id: 'landscape',
        title: 'Mountain Majesty (16:9)',
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop',
        alt: 'Majestic mountain landscape in full resolution',
      },
      {
        id: 'portrait',
        title: 'Winter Portrait (2:3)',
        url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&h=1200&fit=crop',
        alt: 'Winter portrait in full resolution',
      },
      {
        id: 'square',
        title: 'Coffee Culture (1:1)',
        url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1000&h=1000&fit=crop',
        alt: 'Coffee cup on wooden table in full resolution',
      },
    ],
  },
  {
    id: 'nature-wonders',
    title: 'Nature Wonders',
    cover: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
    photos: [
      {
        id: 'n1',
        title: 'Forest Serenity',
        url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop',
        alt: 'Peaceful forest with natural light filtering through trees',
      },
      {
        id: 'n2',
        title: 'Alpine Peaks',
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
        alt: 'Snow-covered mountain peaks reaching towards the sky',
      },
    ],
  },
  {
    id: 'urban-exploration',
    title: 'Urban Exploration',
    cover: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop',
    photos: [
      {
        id: 'u1',
        title: 'City Lights (16:9)',
        url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1600&h=900&fit=crop',
        alt: 'City skyline at night with beautiful lights and reflections',
      },
      {
        id: 'u2',
        title: 'Urban Architecture (2:3)',
        url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=1200&fit=crop',
        alt: 'Modern urban building architecture with geometric patterns',
      },
      {
        id: 'u3',
        title: 'Street Photography (1:1)',
        url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&h=1000&fit=crop',
        alt: 'Dynamic street scene with people and urban elements',
      },
    ],
  },
];

const pizzaRestaurants: PizzaRestaurant[] = [
  {
    id: 'little-nonas',
    title: "Little Nona's",
    subtitle: '1427 Via Campania',
    image: 'https://persistent.oaistatic.com/pizzaz/pizzaz-1.png',
    description: 'Award-winning Neapolitan pies in North Beach.',
    badge: '4.8',
    features: ['$$$', 'Neapolitan', 'Wood-fired'],
  },
  {
    id: 'dough-re-mi',
    title: 'Dough-Re-Mi',
    subtitle: '512 Harmony Avenue',
    image: 'https://persistent.oaistatic.com/pizzaz/pizzaz-4.png',
    description: 'Focaccia-style squares, late-night favorite.',
    badge: '4.6',
    features: ['$$', 'Focaccia', 'Late-night'],
  },
  {
    id: 'slice-society',
    title: 'Slice Society',
    subtitle: '839 Valencia Street',
    image: 'https://persistent.oaistatic.com/pizzaz/pizzaz-3.png',
    description: 'Lively slice shop with a cult following. Best slices in the Mission.',
    badge: '4.9',
    features: ['$', 'Slices', 'Casual'],
  },
  {
    id: 'wood-fired-heaven',
    title: 'Wood Fired Heaven',
    subtitle: '234 Mission Street',
    image: 'https://persistent.oaistatic.com/pizzaz/pizzaz-2.png',
    description: 'Traditional wood-fired with imported ingredients.',
    badge: '4.7',
    features: ['$$$', 'Wood-fired', 'Traditional'],
  },
  {
    id: 'margherita-express',
    title: 'Margherita Express',
    subtitle: '678 Columbus Avenue',
    image: 'https://persistent.oaistatic.com/pizzaz/pizzaz-6.png',
    description: 'Fresh mozzarella and basil prepared daily with authentic Italian ingredients.',
    badge: '4.5',
    features: ['$$', 'Margherita', 'Fresh'],
  },
  {
    id: 'pesto-dreams',
    title: 'Pesto Dreams',
    subtitle: '456 Grant Avenue',
    image: 'https://persistent.oaistatic.com/pizzaz/pizzaz-5.png',
    description: 'Unique pesto-based variations and seasonal specials.',
    badge: '4.4',
    features: ['Pesto', 'Creative'],
  },
];

const pizzaPlaces: PizzaPlace[] = [
  {
    id: '1',
    name: "Tony's Pizza Napoletana",
    city: 'North Beach',
    rating: 4.8,
    thumbnail: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop',
  },
  {
    id: '2',
    name: 'Golden Boy Pizza',
    city: 'North Beach',
    rating: 4.6,
    thumbnail: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop',
  },
  {
    id: '3',
    name: 'Pizzeria Delfina (Mission)',
    city: 'Mission',
    rating: 4.5,
    thumbnail: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=200&h=200&fit=crop',
  },
  {
    id: '4',
    name: 'Little Star Pizza',
    city: 'Alamo Square',
    rating: 4.5,
    thumbnail: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=200&h=200&fit=crop',
  },
];

const sampleLocations: LocationData[] = [
  {
    id: 'tonys-pizza',
    name: "Tony's Pizza Napoletana",
    subtitle: 'Neapolitan Pizzeria · North Beach',
    coords: [37.8001, -122.4098],
    description:
      'Award-winning Neapolitan pies in North Beach. A San Francisco institution serving authentic Italian pizza with locally-sourced ingredients.',
    thumbnail: 'https://persistent.oaistatic.com/pizzaz/pizzaz-1.png',
    features: [
      { icon: 'star', label: '4.8' },
      { label: '$$$' },
    ],
    actions: [
      { label: 'Add to favorites', variant: 'primary' },
      { label: 'Contact', variant: 'secondary' },
    ],
    lists: [
      {
        title: 'Reviews',
        items: [
          {
            id: 'review-1',
            title: 'Sarah M.',
            metadata: '2 weeks ago',
            description: 'Great location! The service was excellent and the atmosphere was perfect.',
          },
          {
            id: 'review-2',
            title: 'John D.',
            metadata: '1 month ago',
            description: 'Highly recommend! Will definitely come back with friends.',
          },
        ],
      },
    ],
  },
  {
    id: 'golden-boy',
    name: 'Golden Boy Pizza',
    subtitle: 'Focaccia Pizza · North Beach',
    coords: [37.799, -122.4093],
    description:
      'Focaccia-style squares, late-night favorite. Classic North Beach spot known for thick, fluffy focaccia pizza by the slice.',
    thumbnail: 'https://persistent.oaistatic.com/pizzaz/pizzaz-2.png',
    features: [
      { icon: 'star', label: '4.6' },
      { label: '$' },
    ],
    actions: [
      { label: 'Add to favorites', variant: 'primary' },
      { label: 'Call', variant: 'secondary' },
    ],
    lists: [
      {
        title: 'Reviews',
        items: [
          {
            id: 'review-1',
            title: 'Maria L.',
            metadata: '3 weeks ago',
            description: 'Late-night gem! Best focaccia pizza in the city.',
          },
        ],
      },
    ],
  },
  {
    id: 'delfina',
    name: 'Pizzeria Delfina',
    subtitle: 'Thin-Crust Pizza · Mission District',
    coords: [37.7613, -122.4255],
    description:
      'Thin-crust classics on 18th Street. Celebrated for perfectly charred, thin-crust pizzas made in a wood-burning oven.',
    thumbnail: 'https://persistent.oaistatic.com/pizzaz/pizzaz-3.png',
    features: [
      { icon: 'star', label: '4.5' },
      { label: '$$' },
    ],
    actions: [
      { label: 'Add to favorites', variant: 'primary' },
      { label: 'Reservations', variant: 'secondary' },
    ],
  },
  {
    id: 'flour-water',
    name: 'Flour + Water Pizzeria',
    subtitle: 'Artisan Pizza · Mission District',
    coords: [37.7775, -122.4388],
    description:
      'Deep-dish and cornmeal crust favorites. Innovative pizzeria from the Flour + Water team with seasonal rotating menu.',
    thumbnail: 'https://persistent.oaistatic.com/pizzaz/pizzaz-4.png',
    features: [
      { icon: 'star', label: '4.5' },
      { label: '$$' },
    ],
  },
  {
    id: 'beretta',
    name: 'Beretta',
    subtitle: 'Wood-Fired Pizzeria · North Beach',
    coords: [37.799, -122.4077],
    description:
      'Wood-fired pies and burrata in North Beach. Stylish spot combining pizza excellence with a full cocktail program.',
    thumbnail: 'https://persistent.oaistatic.com/pizzaz/pizzaz-4.png',
    features: [
      { icon: 'star', label: '4.6' },
      { label: '$$' },
    ],
  },
];

const pageContainerStyle: CSSProperties = {
  maxWidth: '768px',
  margin: '0 auto',
  padding: '40px 20px',
  fontFamily: 'var(--ai-font-family-base, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)',
  color: 'var(--ai-color-text-primary)',
};

const userMessageWrapperStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '16px',
};

const userMessageBubbleStyle: CSSProperties = {
  background: 'var(--ai-color-bg-secondary)',
  padding: '12px 16px',
  borderRadius: '18px',
  maxWidth: '80%',
  color: 'var(--ai-color-text-primary)',
  fontSize: '15px',
  lineHeight: '1.5',
  wordWrap: 'break-word',
  overflowWrap: 'break-word',
};

const assistantMessageWrapperStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-start',
  marginBottom: '24px',
  color: 'var(--ai-color-text-primary)',
  fontSize: '15px',
  lineHeight: '1.5',
  width: '100%',
};

const assistantMessageInnerStyle: CSSProperties = { width: '100%' };

const contentSectionStyle: CSSProperties = {
  marginBottom: '12px',
  marginTop: '12px',
  marginLeft: '0',
  marginRight: '0',
};

const actionButtonsStyle: CSSProperties = {
  display: 'flex',
  gap: '12px',
  marginTop: '12px',
  color: 'var(--ai-color-text-secondary)',
};

const assistantIntroStyle: CSSProperties = { marginBottom: '16px' };

const assistantParagraphStyle: CSSProperties = { marginBottom: '12px' };

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '478px',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: 'var(--ai-elevation-2-shadow)',
};

const codeBlockStyle: CSSProperties = {
  background: 'var(--ai-color-bg-secondary)',
  padding: '12px',
  borderRadius: '6px',
  fontFamily: 'monospace',
  fontSize: '13px',
  marginTop: '8px',
};

const assistantFooterStyle: CSSProperties = {
  marginTop: '16px',
  color: 'var(--ai-color-text-secondary)',
};

const fullscreenOverlayStyle: CSSProperties = {
  position: 'fixed',
  inset: 0,
  zIndex: 1000,
  backgroundColor: 'var(--ai-color-bg-primary)',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'var(--ai-font-family-base, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)',
};

const fullscreenContentStyle: CSSProperties = {
  flex: 1,
  overflow: 'auto',
};

const UserMessage = ({ children }: { children: ReactNode }) => (
  <div style={userMessageWrapperStyle}>
    <div style={userMessageBubbleStyle}>{children}</div>
  </div>
);

const AssistantMessage = ({ children }: { children: ReactNode }) => (
  <div style={assistantMessageWrapperStyle}>
    <div style={assistantMessageInnerStyle}>{children}</div>
  </div>
);

const ActionButtons = () => (
  <div style={actionButtonsStyle}>
    <Icon name="thumb-up" size="sm" tone="secondary" interactive />
    <Icon name="thumb-down" size="sm" tone="secondary" interactive />
    <Icon name="copy" size="sm" tone="secondary" interactive />
    <Icon name="dots-horizontal-more-menu" size="sm" tone="secondary" interactive />
  </div>
);

const IntroductionPage = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumType | null>(null);
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
  const [selectedLocationId, setSelectedLocationId] = useState<string | undefined>(undefined);
  const [isMapFullscreen, setIsMapFullscreen] = useState(false);
  const scrollPositionRef = useState({ current: 0 })[0];

  const handleExitFullscreen = () => {
    setIsMapFullscreen(false);
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollPositionRef.current);
    });
  };

  const handleEnterFullscreen = () => {
    scrollPositionRef.current = window.scrollY;
    setIsMapFullscreen(true);
  };

  if (isMapFullscreen) {
    return (
      <div style={fullscreenOverlayStyle}>
        <div style={fullscreenContentStyle}>
          <FullscreenMap
            locations={sampleLocations}
            selectedId={selectedLocationId}
            onLocationSelect={(id) => setSelectedLocationId(id)}
            onCollapse={handleExitFullscreen}
            defaultCenter={[37.7949, -122.4094]}
            defaultZoom={13}
          />
        </div>
      </div>
    );
  }

  return (
    <div style={pageContainerStyle}>
      <UserMessage>What is AI Native Kit?</UserMessage>

      <AssistantMessage>
        <div style={assistantParagraphStyle}>
          <strong>AI Native Kit</strong> is your fast lane to building beautiful ChatGPT apps 🎨
        </div>
        <div style={assistantParagraphStyle}>
          We've analyzed every OpenAI Apps SDK example and their Figma design system, then turned them into production-ready React components. No more building from scratch!
        </div>
        <div style={assistantParagraphStyle}>
          <strong>What you get:</strong>
        </div>
        <div style={assistantParagraphStyle}>
          ✓ Full TypeScript support with IntelliSense<br />
          ✓ Responsive design out of the box<br />
          ✓ Dark & light mode automatically<br />
          ✓ Built on OpenAI's official design system<br />
          ✓ 417 ready-to-use icons<br />
          ✓ WCAG 2.1 AA accessible
        </div>
        <div style={assistantParagraphStyle}>
          <strong>Bottom line:</strong> Stop rebuilding the same components. Start shipping features faster 🚀
        </div>
        <ActionButtons />
      </AssistantMessage>

      <UserMessage>Show me a quick example 👀</UserMessage>

      <AssistantMessage>
        <div style={assistantIntroStyle}>
          Let's start simple! Here's how you transform JSON data into beautiful <strong>Cards</strong> 🎴
        </div>
        <div style={assistantParagraphStyle}>
          Perfect for displaying products, articles, or any structured content. Cards support images, actions, badges, and chips:
        </div>
        <div style={{ ...contentSectionStyle, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {/* Product Card */}
          <Card elevationLevel="1" interactive>
            <Card.Header>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Card.Title>Premium Headphones</Card.Title>
                <Card.Badge variant="success">New</Card.Badge>
              </div>
            </Card.Header>
            <Card.Image
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"
              alt="Premium headphones"
            />
            <Card.Body>
              <Card.Description>
                Wireless headphones with noise cancellation and 30-hour battery.
              </Card.Description>
            </Card.Body>
            <Card.Footer>
              <Card.Actions align="stretch">
                <Card.ActionButton variant="secondary">Details</Card.ActionButton>
                <Card.ActionButton variant="primary">Add to Cart</Card.ActionButton>
              </Card.Actions>
            </Card.Footer>
          </Card>

          {/* Article Card */}
          <Card elevationLevel="1" interactive>
            <Card.Image
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=200&fit=crop"
              alt="Article cover"
            />
            <Card.Body>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                <Card.Chip variant="neutral" size="sm">Design</Card.Chip>
                <Card.Chip variant="neutral" size="sm">Systems</Card.Chip>
              </div>
              <Card.Title as="h3">Building Scalable Design Systems</Card.Title>
              <Card.Description>
                Learn how to create and maintain design systems that scale with your organization.
              </Card.Description>
              <div style={{ marginTop: '12px', fontSize: '13px', color: 'var(--ai-color-text-tertiary)' }}>
                <span>5 min read</span> • <span>March 15, 2024</span>
              </div>
            </Card.Body>
            <Card.Footer>
              <Card.Actions align="start">
                <Card.ActionButton variant="primary">Read More</Card.ActionButton>
              </Card.Actions>
            </Card.Footer>
          </Card>
        </div>
        <div style={assistantParagraphStyle}>
          From simple to complex, Cards adapt to your content. Compound components give you total flexibility! 🎨
        </div>
        <ActionButtons />
      </AssistantMessage>

      <UserMessage>What about photo galleries?</UserMessage>

      <AssistantMessage>
        <div style={assistantIntroStyle}>
          Great question! The <strong>Album</strong> component is perfect for that 📸
        </div>
        <div style={assistantParagraphStyle}>
          Features fullscreen viewing, responsive layouts, and smooth carousel navigation. Try clicking on an album:
        </div>
        <div style={contentSectionStyle}>
          <Album
            albums={sampleAlbums}
            selectedAlbum={selectedAlbum}
            onAlbumSelect={setSelectedAlbum}
            align="center"
            showNavigation
            showEdgeGradients
            flushStart
          />
        </div>
        <ActionButtons />
      </AssistantMessage>

      <UserMessage>Nice! What about browsing multiple items horizontally?</UserMessage>

      <AssistantMessage>
        <div style={assistantIntroStyle}>
          The <strong>Carousel</strong> component has you covered 🎠
        </div>
        <div style={assistantParagraphStyle}>
          Smooth horizontal scrolling with touch/mouse support and responsive behavior. Perfect for product showcases or recommendations. Try scrolling:
        </div>
        <div style={{ ...contentSectionStyle, maxWidth: '100%' }}>
          <CarouselComponent flushStart>
            {pizzaRestaurants.map((restaurant) => (
              <div key={restaurant.id} style={{ minWidth: '220px' }}>
                <DiscoveryCard
                  width="220px"
                  image={restaurant.image}
                  imageAlt={restaurant.title}
                  title={restaurant.title}
                  subtitle={restaurant.subtitle}
                  badge={restaurant.badge}
                  badgeIcon="star"
                  features={restaurant.features}
                  description={restaurant.description}
                  buttonText="Order now"
                  onButtonClick={() => alert(`Order from ${restaurant.title}`)}
                />
              </div>
            ))}
          </CarouselComponent>
        </div>
        <ActionButtons />
      </AssistantMessage>

      <UserMessage>How about rankings or search results?</UserMessage>

      <AssistantMessage>
        <div style={assistantIntroStyle}>
          The <strong>List</strong> component handles that beautifully 📋
        </div>
        <div style={assistantParagraphStyle}>
          Perfect for rankings, search results, or structured data. Features headers, media, metadata, and actions. Try clicking the + buttons:
        </div>
        <div style={{ ...contentSectionStyle, maxWidth: '100%' }}>
          <List
            header={{
              title: 'National Best Pizza List',
              subtitle: 'A ranking of the best pizzerias',
              thumbnail: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop',
              action: <Button variant="primary">Save List</Button>,
            }}
            items={pizzaPlaces}
            renderItem={(place: PizzaPlace, index: number) => (
              <ListItem
                key={place.id}
                rank={index + 1}
                title={place.name}
                features={[{ icon: 'star', label: `${place.rating}` }]}
                media={place.thumbnail}
                mediaAlt={place.name}
                metadata={place.city}
                onClick={() =>
                  setSelectedPlaces((prev) =>
                    prev.includes(place.id) ? prev.filter((id) => id !== place.id) : [...prev, place.id],
                  )
                }
                interactive
                action={
                  <Button
                    iconOnly={selectedPlaces.includes(place.id) ? 'check-circle-filled' : 'plus-circle-add'}
                    aria-label={`${selectedPlaces.includes(place.id) ? 'Remove from' : 'Add to'} favorites`}
                    variant="ghost"
                    onClick={(e: MouseEvent) => {
                      e.stopPropagation();
                      setSelectedPlaces((prev) =>
                        prev.includes(place.id) ? prev.filter((id) => id !== place.id) : [...prev, place.id],
                      );
                    }}
                  />
                }
              />
            )}
          />
        </div>
        <ActionButtons />
      </AssistantMessage>

      <UserMessage>Impressive! What about maps and locations?</UserMessage>

      <AssistantMessage>
        <div style={assistantIntroStyle}>
          The <strong>Map</strong> component has you covered 🗺️
        </div>
        <div style={assistantParagraphStyle}>
          Built on Leaflet with custom markers, location details, and an inspector panel. Click markers to see details, or hit expand (top-right) for fullscreen:
        </div>
        <div style={contentSectionStyle}>
          <div style={mapContainerStyle}>
            <Map
              locations={sampleLocations}
              selectedId={selectedLocationId}
              onLocationSelect={setSelectedLocationId}
              isFullscreen={isMapFullscreen}
              onToggleFullscreen={(fullscreen) => {
                if (fullscreen) {
                  handleEnterFullscreen();
                } else {
                  handleExitFullscreen();
                }
              }}
              defaultCenter={[37.7949, -122.4094]}
              defaultZoom={13}
            />
          </div>
        </div>
        <ActionButtons />
      </AssistantMessage>

      <UserMessage>This is amazing! How do I start using it? 🚀</UserMessage>

      <AssistantMessage>
        <div style={assistantParagraphStyle}>
          <strong>You're a few minutes away from shipping!</strong> Here's all you need:
        </div>
        <div style={assistantParagraphStyle}>
          <strong>1. Install:</strong>
          <div style={codeBlockStyle}>npm install @ainativekit/ui</div>
        </div>
        <div style={assistantParagraphStyle}>
          <strong>2. Import and use:</strong>
          <div style={codeBlockStyle}>
            import '@ainativekit/ui/styles'; // Import once in your app root<br />
            import {'{'}Card, Badge{'}'} from '@ainativekit/ui';<br />
            <br />
            {'<Card>'}<br />
            &nbsp;&nbsp;{'<Card.Image src={weatherData.image} alt="San Francisco" />'}<br />
            &nbsp;&nbsp;{'<Card.Body>'}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'<Card.Title>San Francisco</Card.Title>'}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'<Card.Description>72°F · Sunny</Card.Description>'}<br />
            &nbsp;&nbsp;{'</Card.Body>'}<br />
            &nbsp;&nbsp;{'<Card.Footer>'}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'<Badge variant="success">Live</Badge>'}<br />
            &nbsp;&nbsp;{'</Card.Footer>'}<br />
            {'</Card>'}
          </div>
        </div>
        <div style={assistantParagraphStyle}>
          <strong>That's it!</strong> Everything works out of the box:
        </div>
        <div style={assistantParagraphStyle}>
          ✓ Full TypeScript support<br />
          ✓ Dark & light mode<br />
          ✓ WCAG 2.1 AA accessible<br />
          ✓ Mobile-responsive<br />
          ✓ Zero configuration
        </div>
        <div style={assistantFooterStyle}>
          <strong>Explore next:</strong> Check the Storybook menu for:
          <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
            <li>
              <strong>Gallery</strong>: Complete interactive examples and real-world use cases
            </li>
            <li>
              <strong>Design Tokens</strong>: Customizable colors, typography, spacing, and elevation
            </li>
            <li>
              <strong>Core Components</strong>: Essential building blocks - Button, Icon, Badge, Chip, Alert, Skeleton
            </li>
            <li>
              <strong>Patterns</strong>: Pre-built layouts - Card, Carousel, List, Album, Map
            </li>
          </ul>
        </div>
        <div style={assistantParagraphStyle}>
          <strong>We're open source! 🌟</strong> Check us out on <a href="https://github.com/ainativekit/ainativekit-ui" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ai-color-text-primary)', textDecoration: 'underline' }}>GitHub</a> and find us on <a href="https://www.npmjs.com/package/@ainativekit/ui" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ai-color-text-primary)', textDecoration: 'underline' }}>npm</a>. Star us, contribute, or report issues - we'd love your feedback!
        </div>
        <div style={{ ...assistantFooterStyle, marginTop: '12px' }}>
          Happy building! 🎉
        </div>
        <ActionButtons />
      </AssistantMessage>
    </div>
  );
};

const meta: Meta<typeof IntroductionPage> = {
  title: 'Introduction',
  component: IntroductionPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof IntroductionPage>;

export const Introduction: Story = {
  render: () => <IntroductionPage />,
};
