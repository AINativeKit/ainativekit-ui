import type { Meta } from '@storybook/react';
import React, { useState } from 'react';
import { Map } from './Map';
import { MapView } from './MapView';
import type { LocationData } from './types';
import { PropsTable } from '../../tokens/PropsTable';
import { codeBlockStyles } from '../storybook/codeBlockStyles';

// Sample location data - San Francisco pizza places
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
            description:
              'Great location! The service was excellent and the atmosphere was perfect.',
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
    thumbnail: 'https://persistent.oaistatic.com/pizzaz/pizzaz-6.png',
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
  {
    id: 'slice-house',
    name: 'Slice House',
    subtitle: 'Neighborhood Pizza · Valencia Street',
    coords: [37.7722, -122.438],
    description:
      'Neighborhood spot with seasonal toppings. Local favorite featuring creative combinations and locally-sourced ingredients.',
    thumbnail: 'https://persistent.oaistatic.com/pizzaz/pizzaz-1.png',
    features: [
      { icon: 'star', label: '4.4' },
      { label: '$$' },
    ],
  },
  {
    id: 'pizza-palace',
    name: 'Pizza Palace',
    subtitle: 'Sourdough Pizza · Nob Hill',
    coords: [37.7899, -122.4123],
    description:
      'Sourdough, wood-fired pies near Nob Hill. San Francisco sourdough meets traditional Italian pizza-making.',
    thumbnail: 'https://persistent.oaistatic.com/pizzaz/pizzaz-2.png',
    features: [
      { icon: 'star', label: '4.6' },
      { label: '$$$' },
    ],
  },
  {
    id: 'crispy-crust',
    name: 'Crispy Crust',
    subtitle: 'Detroit-Style Pizza · SoMa',
    coords: [37.7805, -122.4135],
    description:
      'Crispy-edged Detroit-style in SoMa. Bringing Detroit-style square pizza to San Francisco with creative toppings.',
    thumbnail: 'https://persistent.oaistatic.com/pizzaz/pizzaz-3.png',
    features: [
      { icon: 'star', label: '4.5' },
      { label: '$$' },
    ],
  },
];

const meta: Meta<typeof MapView> = {
  title: 'Composed Components/Maps/Maps',
  component: MapView,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// ChatGPT Apps SDK Standard Size (766px wide)
const CHATGPT_APP_WIDTH = '766px';
const CHATGPT_APP_HEIGHT = '478px';

// Unified Map System Documentation
const MapSystemComponent: React.FC = () => {
  const [mapIsFullscreen, setMapIsFullscreen] = useState(false);
  const [compactSelectedId, setCompactSelectedId] = useState<string | undefined>(undefined);

  return (
    <div style={{ padding: '24px', maxWidth: '100%' }}>
      <h1 style={{ marginBottom: '32px' }}>Map System</h1>

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
          A comprehensive map-based location system with three complementary components: <strong>Map</strong> (orchestrator),
          <strong> CompactMap</strong> (inline experience), and <strong>FullscreenMap</strong> (full-featured view). Built on Leaflet with
          interactive markers, location cards, multiple layout options, and integrated support for ChatGPT Apps SDK.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
          <div>
            <strong>Key Features:</strong>
          </div>
          <ul style={{ marginLeft: '24px', color: 'var(--ai-color-text-secondary)' }}>
            <li>Three component variants for different use cases (Map, CompactMap, FullscreenMap)</li>
            <li>Interactive map with location markers and popups</li>
            <li>Location carousel with synchronized selection</li>
            <li>Inspector panel with detailed location information</li>
            <li>Loading, error, and empty states built-in</li>
            <li>Responsive design (mobile/desktop)</li>
            <li>Expand/collapse buttons for ChatGPT Apps SDK integration</li>
            <li>SSR-safe with lazy loading</li>
          </ul>
        </div>
      </section>

      {/* ============================================== */}
      {/* NEW: Map Component (Orchestrator) */}
      {/* ============================================== */}
      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px' }}>0. Map Component</h2>
        </header>

        {/* Controlled Example (for ChatGPT integration) */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Example: ChatGPT Apps Integration</h3>
          {mapIsFullscreen ? (
            // Real fullscreen overlay when expanded
            <div
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 1000,
                backgroundColor: 'var(--ai-color-bg-primary)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Map
                locations={sampleLocations}
                defaultCenter={[37.7749, -122.4194]}
                defaultZoom={12}
                isFullscreen={mapIsFullscreen}
                onToggleFullscreen={setMapIsFullscreen}
                selectedId={compactSelectedId}
                onLocationSelect={(selectedId) => setCompactSelectedId(selectedId)}
              />
            </div>
          ) : (
            // Compact view
            <>
              <div
                style={{
                  width: '100%',
                  maxWidth: CHATGPT_APP_WIDTH,
                  height: CHATGPT_APP_HEIGHT,
                  margin: '0 auto 16px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
              >
                <Map
                  locations={sampleLocations}
                  defaultCenter={[37.7749, -122.4194]}
                  defaultZoom={12}
                  isFullscreen={mapIsFullscreen}
                  onToggleFullscreen={setMapIsFullscreen}
                  selectedId={compactSelectedId}
                  onLocationSelect={(selectedId) => setCompactSelectedId(selectedId)}
                />
              </div>
              <div
                style={{
                  padding: '12px',
                  backgroundColor: 'var(--ai-color-bg-secondary)',
                  borderRadius: '8px',
                  fontSize: '13px',
                  color: 'var(--ai-color-text-secondary)',
                }}
              >
                <strong>Try it:</strong> Click the expand button (↗️) in top-right corner. The map expands to fullscreen.
              </div>
            </>
          )}
        </div>
      </section>

      {/* ============================================== */}
      {/* Component Variants Reference */}
      {/* ============================================== */}
      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px' }}>Component Variants</h2>
          <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
            The Map system includes three specialized components. Explore their dedicated story files for detailed examples.
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {/* CompactMap Reference */}
          <div
            style={{
              padding: '20px',
              borderRadius: '8px',
              backgroundColor: 'var(--ai-color-bg-secondary)',
              border: '1px solid var(--ai-color-border-light)',
            }}
          >
            <h3 style={{ margin: '0 0 12px 0', fontSize: '15px', fontWeight: 600 }}>CompactMap</h3>
            <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: 'var(--ai-color-text-secondary)' }}>
              Lightweight inline map with carousel for ChatGPT Apps SDK integration.
            </p>
            <a
              href="?path=/story/media-compactmap--compactmap"
              style={{
                fontSize: '13px',
                color: 'var(--ai-color-accent-blue)',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              View CompactMap stories →
            </a>
          </div>

          {/* FullscreenMap Reference */}
          <div
            style={{
              padding: '20px',
              borderRadius: '8px',
              backgroundColor: 'var(--ai-color-bg-secondary)',
              border: '1px solid var(--ai-color-border-light)',
            }}
          >
            <h3 style={{ margin: '0 0 12px 0', fontSize: '15px', fontWeight: 600 }}>FullscreenMap</h3>
            <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: 'var(--ai-color-text-secondary)' }}>
              Full-featured map with sidebar, Inspector panel, and responsive layout.
            </p>
            <a
              href="?path=/story/media-fullscreenmap--fullscreenmap"
              style={{
                fontSize: '13px',
                color: 'var(--ai-color-accent-blue)',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              View FullscreenMap stories →
            </a>
          </div>
        </div>
      </section>

      {/* ============================================== */}
      {/* Best Practices Section (NEW) */}
      {/* ============================================== */}
      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px' }}>Best Practices & Component Selection</h2>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {/* Map Card */}
          <div
            style={{
              padding: '20px',
                borderRadius: '8px',
              backgroundColor: 'var(--ai-color-bg-primary)',
            }}
          >
            <h3 style={{ margin: '0 0 12px 0', fontSize: '15px', fontWeight: 600 }}>
              Use <strong>Map</strong>
            </h3>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: 'var(--ai-color-text-secondary)', lineHeight: '1.6' }}>
              <li>ChatGPT Apps SDK integrations</li>
              <li>Need expand/collapse toggle</li>
              <li>Component manages fullscreen state</li>
              <li>Following Album pattern</li>
              <li style={{ marginTop: '8px' }}>
                <strong style={{ color: 'var(--ai-color-text-primary)' }}>Example:</strong> Chat-based map interface with inline
                compact view that expands to full map
              </li>
            </ul>
          </div>

          {/* CompactMap Card */}
          <div
            style={{
              padding: '20px',
                borderRadius: '8px',
              backgroundColor: 'var(--ai-color-bg-primary)',
            }}
          >
            <h3 style={{ margin: '0 0 12px 0', fontSize: '15px', fontWeight: 600 }}>
              Use <strong>CompactMap</strong>
            </h3>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: 'var(--ai-color-text-secondary)', lineHeight: '1.6' }}>
              <li>Fixed inline experiences</li>
              <li>No fullscreen toggle needed</li>
              <li>Embedding in dashboards</li>
              <li>Limited vertical space</li>
              <li style={{ marginTop: '8px' }}>
                <strong style={{ color: 'var(--ai-color-text-primary)' }}>Example:</strong> Widget showing nearby locations on
                user profile
              </li>
            </ul>
          </div>

          {/* FullscreenMap Card */}
          <div
            style={{
              padding: '20px',
                borderRadius: '8px',
              backgroundColor: 'var(--ai-color-bg-primary)',
            }}
          >
            <h3 style={{ margin: '0 0 12px 0', fontSize: '15px', fontWeight: 600 }}>
              Use <strong>FullscreenMap</strong>
            </h3>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: 'var(--ai-color-text-secondary)', lineHeight: '1.6' }}>
              <li>Always-fullscreen experiences</li>
              <li>Rich exploration interfaces</li>
              <li>Inspector panel needed</li>
              <li>Dedicated map page</li>
              <li style={{ marginTop: '8px' }}>
                <strong style={{ color: 'var(--ai-color-text-primary)' }}>Example:</strong> Maps application with full UI for
                exploring locations
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================== */}
      {/* ChatGPT Apps SDK Integration (NEW) */}
      {/* ============================================== */}
      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px' }}>ChatGPT Apps SDK Integration Guide</h2>
        </header>

        <div
          style={{
            padding: '16px',
            backgroundColor: 'var(--ai-color-bg-secondary)',
            borderRadius: '8px',
            marginBottom: '24px',
            fontSize: '13px',
            color: 'var(--ai-color-text-secondary)',
            lineHeight: '1.6',
          }}
        >
          <p style={{ margin: '0 0 12px 0' }}>
            The <strong>Map</strong> component is designed to work seamlessly with ChatGPT Apps SDK. Use controlled mode to let
            ChatGPT manage the iframe expansion based on user interaction.
          </p>
          <p style={{ margin: 0 }}>
            When user clicks expand button → Map calls <code>onToggleFullscreen(true)</code> → Your app expands the iframe → User
            sees FullscreenMap. When user clicks collapse → Map calls <code>onToggleFullscreen(false)</code> → Your app collapses
            iframe → User sees CompactMap.
          </p>
        </div>

        <div style={codeBlockStyles.primary}>
          <pre
            style={{
              margin: 0,
              color: 'var(--ai-color-text-primary)',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }}
          >
{`// ChatGPT Apps integration (controlled mode)
const [isMapFullscreen, setIsMapFullscreen] = useState(false);

const handleMapToggle = (fullscreen: boolean) => {
  setIsMapFullscreen(fullscreen);
  // ChatGPT SDK will expand/collapse the iframe
  // based on this state change
};

<Map
  locations={locations}
  isFullscreen={isMapFullscreen}
  onToggleFullscreen={handleMapToggle}
  {...otherProps}
/>`}
          </pre>
        </div>

        <div
          style={{
            padding: '16px',
            backgroundColor: 'var(--ai-color-bg-secondary)',
            borderRadius: '8px',
          }}
        >
          <h3 style={{ fontSize: '14px', marginBottom: '8px', margin: '0 0 8px 0' }}>Key Points:</h3>
          <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: 'var(--ai-color-text-secondary)', lineHeight: '1.8' }}>
            <li>Use <strong>controlled mode</strong> (isFullscreen + onToggleFullscreen) for ChatGPT integration</li>
            <li>CompactMap height: 478px (standard ChatGPT Apps size)</li>
            <li>Expand/collapse buttons automatically shown in both views</li>
            <li>Buttons automatically disabled if callbacks not provided</li>
            <li>Responsive design works on all device sizes</li>
          </ul>
        </div>
      </section>

      {/* ============================================== */}
      {/* Props Documentation */}
      {/* ============================================== */}
      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px' }}>Map Props (Orchestrator)</h2>
          <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
            Primary component for ChatGPT Apps SDK integration. Manages fullscreen toggle.
          </p>
        </header>
        <PropsTable
          hideThemeColumn
          rows={[
            {
              name: 'locations',
              description: 'Array of locations to display. Type: LocationData[] (required)',
            },
            {
              name: 'isFullscreen',
              description: 'Controlled fullscreen state - optional (for external state control)',
            },
            {
              name: 'onToggleFullscreen',
              description: 'Callback when user clicks expand/collapse: (isFullscreen: boolean) => void',
            },
            {
              name: 'selectedId',
              description: 'Currently selected location ID',
            },
            {
              name: 'onLocationSelect',
              description: 'Callback when location is selected: (location: LocationData) => void',
            },
            {
              name: 'defaultCenter',
              description: 'Default map center [lat, lng] - default: [37.7749, -122.4194]',
            },
            {
              name: 'defaultZoom',
              description: 'Default zoom level - default: 12',
            },
            {
              name: 'compactMapProps',
              description: 'Additional props for CompactMap when not fullscreen',
            },
            {
              name: 'fullscreenMapProps',
              description: 'Additional props for FullscreenMap when fullscreen',
            },
          ]}
        />
      </section>

      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px' }}>CompactMap Props</h2>
          <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
            Compact map with carousel. Used standalone or via Map orchestrator.
          </p>
        </header>
        <PropsTable
          hideThemeColumn
          rows={[
            {
              name: 'locations',
              description: 'Array of locations to display. Type: LocationData[] (required)',
            },
            {
              name: 'height',
              description: 'Container height - default: "478px" (ChatGPT Apps SDK spec)',
            },
            {
              name: 'selectedId',
              description: 'Currently selected location ID',
            },
            {
              name: 'onLocationSelect',
              description: 'Callback when location is selected from carousel or map',
            },
            {
              name: 'onExpand',
              description: 'Callback when expand button clicked - shows button if provided',
            },
            {
              name: 'defaultCenter',
              description: 'Default map center [lat, lng]',
            },
            {
              name: 'defaultZoom',
              description: 'Default zoom level',
            },
            {
              name: 'loading',
              description: 'Loading state - renders skeleton - default: false',
            },
            {
              name: 'error',
              description: 'Error state - shows error message - default: false',
            },
          ]}
        />
      </section>

      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px' }}>FullscreenMap Props</h2>
          <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
            Full-featured map with sidebar and Inspector panel.
          </p>
        </header>
        <PropsTable
          hideThemeColumn
          rows={[
            {
              name: 'locations',
              description: 'Array of locations to display. Type: LocationData[] (required)',
            },
            {
              name: 'defaultSelectedId',
              description: 'Initially selected location ID (opens Inspector)',
            },
            {
              name: 'height',
              description: 'Container height - default: "100vh"',
            },
            {
              name: 'onCollapse',
              description: 'Callback when collapse button clicked - shows button if provided',
            },
            {
              name: 'loading',
              description: 'Loading state - renders skeleton UI - default: false',
            },
            {
              name: 'error',
              description: 'Error state - shows error message - default: false',
            },
            {
              name: 'errorTitle',
              description: 'Custom error title - default: "Failed to load map"',
            },
            {
              name: 'errorMessage',
              description: 'Custom error message',
            },
            {
              name: 'onErrorRetry',
              description: 'Error retry handler - shows retry button when provided',
            },
            {
              name: 'emptyTitle',
              description: 'Empty state title - default: "No locations"',
            },
            {
              name: 'emptyMessage',
              description: 'Empty state message - default: "No locations to display"',
            },
          ]}
        />
      </section>

      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px' }}>MapView Props</h2>
          <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
            Core map rendering component - used by all variants internally.
          </p>
        </header>
        <PropsTable
          hideThemeColumn
          rows={[
            {
              name: 'locations',
              description: 'Array of location data with coordinates, name, description. Type: LocationData[] (required)',
            },
            {
              name: 'selectedId',
              description: 'ID of currently selected location',
            },
            {
              name: 'activeId',
              description: 'ID of currently active/hovered location',
            },
            {
              name: 'onLocationSelect',
              description: 'Callback when location marker is clicked: (id: string) => void',
            },
            {
              name: 'onLocationActive',
              description: 'Callback when location marker is hovered: (id: string | undefined) => void',
            },
            {
              name: 'defaultCenter',
              description: 'Default map center [lat, lng] - default: [37.7749, -122.4194]',
            },
            {
              name: 'defaultZoom',
              description: 'Default zoom level - default: 12',
            },
            {
              name: 'markerColor',
              description: 'Color for default markers - default: var(--ai-color-accent-blue)',
            },
            {
              name: 'selectedMarkerColor',
              description: 'Color for selected marker - default: var(--ai-color-accent-blue)',
            },
            {
              name: 'isInspectorOpen',
              description: 'Whether Inspector panel is open (for FullscreenMap) - adjusts map pan offset',
            },
          ]}
        />
      </section>

      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px' }}>LocationData Type</h2>
          <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
            Location object structure for all Map components
          </p>
        </header>
        <PropsTable
          hideThemeColumn
          rows={[
            {
              name: 'id',
              description: 'Unique location identifier (required)',
            },
            {
              name: 'name',
              description: 'Location name/title (required)',
            },
            {
              name: 'coords',
              description: 'Geographic coordinates [latitude, longitude] (required)',
            },
            {
              name: 'thumbnail',
              description: 'Image URL for location card (required)',
            },
            {
              name: 'subtitle',
              description: 'Optional subtitle shown below title',
            },
            {
              name: 'description',
              description: 'Optional detailed description',
            },
            {
              name: 'features',
              description: 'Optional array of feature chips (rating, price, etc.)',
            },
            {
              name: 'actions',
              description: 'Optional action buttons (for Inspector panel)',
            },
            {
              name: 'lists',
              description: 'Optional generic lists (reviews, related items, etc.)',
            },
          ]}
        />
      </section>

      {/* Technical Notes */}
      <section style={{ marginBottom: '64px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '8px' }}>Technical Notes</h2>
        </header>

        <div
          style={{
            padding: '16px',
            backgroundColor: 'var(--ai-color-bg-secondary)',
            borderRadius: '8px',
            marginBottom: '16px',
          }}
        >
          <h3 style={{ fontSize: '14px', marginBottom: '8px' }}>Component Architecture</h3>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--ai-color-text-secondary)' }}>
            <strong>Map</strong> (orchestrator) follows the <strong>Album pattern</strong> - conditionally renders either
            CompactMap or FullscreenMap based on fullscreen state. Supports both controlled and uncontrolled modes. Both child
            components maintain their own internal state and features.
          </p>
        </div>

        <div
          style={{
            padding: '16px',
            backgroundColor: 'var(--ai-color-bg-secondary)',
            borderRadius: '8px',
            marginBottom: '16px',
          }}
        >
          <h3 style={{ fontSize: '14px', marginBottom: '8px' }}>SSR-Safe Implementation</h3>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--ai-color-text-secondary)' }}>
            Map components use lazy loading and client-side mounting checks to avoid SSR issues with Leaflet. A loading fallback
            is shown during hydration and initial mount.
          </p>
        </div>

        <div
          style={{
            padding: '16px',
            backgroundColor: 'var(--ai-color-bg-secondary)',
            borderRadius: '8px',
            marginBottom: '16px',
          }}
        >
          <h3 style={{ fontSize: '14px', marginBottom: '8px' }}>Dependencies</h3>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--ai-color-text-secondary)' }}>
            <strong>leaflet</strong> ^1.9.4 - Base mapping library
            <br />
            <strong>react-leaflet</strong> ^4.2.1 - React components for Leaflet (compatible with React 18)
            <br />
            <strong>framer-motion</strong> - Animation support for Inspector panel
          </p>
        </div>

        <div
          style={{
            padding: '16px',
            backgroundColor: 'var(--ai-color-bg-secondary)',
            borderRadius: '8px',
          }}
        >
          <h3 style={{ fontSize: '14px', marginBottom: '8px' }}>Browser Support</h3>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--ai-color-text-secondary)' }}>
            All modern browsers with CSS Grid and modern ES6+ support. Leaflet handles map tile loading and caching
            automatically.
          </p>
        </div>
      </section>

      {/* Related Components */}
      <section>
        <header style={{ marginBottom: '16px' }}>
          <h2 style={{ marginBottom: '8px' }}>Related Components</h2>
          <p style={{ color: 'var(--ai-color-text-secondary)', margin: 0, fontSize: '14px' }}>
            For detailed <strong>LocationCard</strong> documentation including badges, multi-line text, loading/error/empty states,
            and image controls, see the <strong>LocationCard</strong> story in the sidebar.
          </p>
        </header>
      </section>
    </div>
  );
};

// Single unified story (like Album and List)
export const Maps = () => <MapSystemComponent />;
