import { useMemo, useState } from 'react';
import type { CSSProperties, FC } from 'react';
import type { Meta } from '@storybook/react';
import { CompactMap } from './CompactMap';
import type { LocationData } from './types';
import { PropsTable } from '../../tokens/PropsTable';

const CHATGPT_APP_WIDTH = '766px';
const CHATGPT_APP_HEIGHT = '478px';

const sampleLocations: LocationData[] = [
  {
    id: 'tonys-pizza',
    name: "Tony's Pizza Napoletana",
    subtitle: 'Neapolitan Pizzeria · North Beach',
    coords: [37.8001, -122.4098],
    description:
      'Award-winning Neapolitan pies in North Beach. A San Francisco institution serving authentic Italian pizza with locally-sourced ingredients.',
    thumbnail: 'https://persistent.oaistatic.com/pizzaz/pizzaz-1.png',
    features: [{ icon: 'star', label: '4.8' }, { label: '$$$' }],
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
    features: [{ icon: 'star', label: '4.6' }, { label: '$' }],
  },
  {
    id: 'delfina',
    name: 'Pizzeria Delfina',
    subtitle: 'Thin-Crust Pizza · Mission District',
    coords: [37.7613, -122.4255],
    description:
      'Thin-crust classics on 18th Street. Celebrated for perfectly charred, thin-crust pizzas made in a wood-burning oven.',
    thumbnail: 'https://persistent.oaistatic.com/pizzaz/pizzaz-3.png',
    features: [{ icon: 'star', label: '4.5' }, { label: '$$' }],
  },
  {
    id: 'flour-water',
    name: 'Flour + Water Pizzeria',
    subtitle: 'Artisan Pizza · Mission District',
    coords: [37.7775, -122.4388],
    description:
      'Deep-dish and cornmeal crust favorites. Innovative pizzeria from the Flour + Water team with seasonal rotating menu.',
    thumbnail: 'https://persistent.oaistatic.com/pizzaz/pizzaz-6.png',
    features: [{ icon: 'star', label: '4.5' }, { label: '$$' }],
  },
];

const meta: Meta<typeof CompactMap> = {
  title: 'Composed Components/Maps',
  component: CompactMap,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

const heroStyle: CSSProperties = {
  width: '100%',
  maxWidth: CHATGPT_APP_WIDTH,
  borderRadius: '12px',
  overflow: 'hidden',
  border: '1px solid var(--ai-color-border-subtle)',
  boxShadow: 'var(--ai-elevation-2-shadow)',
};

const CompactMapDoc: FC = () => {
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
  const locations = useMemo(() => sampleLocations, []);

  return (
    <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '64px' }}>
      <section>
        <h1 style={{ marginBottom: '16px' }}>CompactMap</h1>
        <p
          style={{
            margin: 0,
            maxWidth: '720px',
            color: 'var(--ai-color-text-secondary)',
            fontSize: '16px',
            lineHeight: 1.6,
          }}
        >
          Lightweight map + carousel surface optimised for ChatGPT Apps inline experiences. It
          combines `MapView` and a synchronized location carousel so users can browse places, tap a
          card, and see the map pan instantly—all before escalating to fullscreen.
        </p>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <header>
          <h2 style={{ marginBottom: '8px' }}>Inline Experience</h2>
          <p style={{ margin: 0, color: 'var(--ai-color-text-secondary)' }}>
            Drop straight into a ChatGPT canvas. Height defaults to the Apps SDK spec (478px) but
            can be customised per scenario.
          </p>
        </header>

        <div style={heroStyle}>
          <CompactMap
            locations={locations}
            selectedId={selectedId}
            onLocationSelect={setSelectedId}
            height={CHATGPT_APP_HEIGHT}
          />
        </div>

        <div
          style={{
            background: 'var(--ai-color-bg-secondary)',
            borderRadius: '12px',
            padding: '16px',
            maxWidth: CHATGPT_APP_WIDTH,
            color: 'var(--ai-color-text-secondary)',
            fontSize: '14px',
          }}
        >
          <strong>Highlights:</strong> carousel follows map selection, smooth marker fly-to,
          inspector-aware panning, SSR-safe lazy loading, consistent loading/error/empty states.
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <header>
          <h2 style={{ marginBottom: '8px' }}>State Management</h2>
          <p style={{ margin: 0, color: 'var(--ai-color-text-secondary)' }}>
            Built-in fallbacks keep the surface stable while data loads or fails.
          </p>
        </header>

        <div
          style={{
            display: 'grid',
            gap: '24px',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          }}
        >
          <div>
            <h3
              style={{
                marginBottom: '12px',
                fontSize: '14px',
                color: 'var(--ai-color-text-secondary)',
              }}
            >
              Loading
            </h3>
            <div style={heroStyle}>
              <CompactMap
                locations={[]}
                loading
                height={CHATGPT_APP_HEIGHT}
                carouselProps={{ loadingCardCount: 4 }}
              />
            </div>
          </div>

          <div>
            <h3
              style={{
                marginBottom: '12px',
                fontSize: '14px',
                color: 'var(--ai-color-text-secondary)',
              }}
            >
              Error
            </h3>
            <div style={heroStyle}>
              <CompactMap
                locations={[]}
                error
                height={CHATGPT_APP_HEIGHT}
                carouselProps={{
                  errorTitle: 'Failed to load locations',
                  errorMessage: 'Unable to retrieve location data. Please try again.',
                }}
              />
            </div>
          </div>

          <div>
            <h3
              style={{
                marginBottom: '12px',
                fontSize: '14px',
                color: 'var(--ai-color-text-secondary)',
              }}
            >
              Empty
            </h3>
            <div style={heroStyle}>
              <CompactMap locations={[]} height={CHATGPT_APP_HEIGHT} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <header>
          <h2 style={{ marginBottom: '8px' }}>Interaction Notes</h2>
          <p style={{ margin: 0, color: 'var(--ai-color-text-secondary)' }}>
            Tips to keep the compact experience smooth and accessible.
          </p>
        </header>
        <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--ai-color-text-secondary)' }}>
          <li>Use selection state to keep map and carousel in sync (`selectedId`).</li>
          <li>
            Respect loading/error props—do not render custom overlays on top of the Leaflet surface
            during data fetch.
          </li>
          <li>
            Pass `carouselProps.onErrorRetry` to offer a retry CTA without leaving the inline
            context.
          </li>
          <li>
            CompactMap shares `LocationData` with other map components for easy swaps to fullscreen.
          </li>
        </ul>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <header>
          <h2 style={{ marginBottom: '8px' }}>Props</h2>
          <p style={{ margin: 0, color: 'var(--ai-color-text-secondary)' }}>
            Core props extend `MapView` with container and carousel configuration.
          </p>
        </header>
        <PropsTable
          hideThemeColumn
          rows={[
            {
              name: 'locations',
              description: 'Array of locations to render. Type: LocationData[] (required)',
            },
            {
              name: 'selectedId',
              description: 'ID of the currently selected location.',
            },
            {
              name: 'onLocationSelect',
              description:
                'Callback when a location card or marker is selected: (id: string) => void.',
            },
            {
              name: 'onLocationActive',
              description: 'Callback when a marker is hovered: (id: string | undefined) => void.',
            },
            {
              name: 'defaultCenter',
              description: 'Default map centre coordinates. Default: [37.7749, -122.4194].',
            },
            {
              name: 'defaultZoom',
              description: 'Default zoom level. Default: 12.',
            },
            {
              name: 'markerColor',
              description: 'Marker colour for default state. Default: var(--ai-color-accent-blue).',
            },
            {
              name: 'selectedMarkerColor',
              description:
                'Marker colour for selected state. Default: var(--ai-color-accent-blue).',
            },
            {
              name: 'height',
              description:
                'Fixed height for the container. Accepts number (px) or string. Default: "478px".',
            },
            {
              name: 'carouselProps',
              description:
                'Partial LocationCarousel props to customise loading/error/empty states.',
            },
            {
              name: 'loading',
              description: 'Shows skeleton map + cards when true.',
            },
            {
              name: 'error',
              description: 'Shows error presentation in carousel while the map displays skeleton.',
            },
          ]}
        />
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <header>
          <h2 style={{ marginBottom: '8px' }}>LocationData Structure</h2>
          <p style={{ margin: 0, color: 'var(--ai-color-text-secondary)' }}>
            Shared contract across CompactMap, FullscreenMap, and MapInspector.
          </p>
        </header>
        <PropsTable
          hideThemeColumn
          rows={[
            { name: 'id', description: 'Unique identifier for the location (string).' },
            { name: 'name', description: 'Display name used in cards and popups (string).' },
            { name: 'subtitle', description: 'Optional subtitle or category text (string).' },
            {
              name: 'coords',
              description:
                'Tuple of [latitude, longitude] used by Leaflet markers (number, number).',
            },
            {
              name: 'description',
              description:
                'Optional supporting copy displayed in popups and carousel cards (string).',
            },
            {
              name: 'thumbnail',
              description: 'Optional image preview used in carousel cards (string URL).',
            },
            {
              name: 'features',
              description: 'Array of icon/text pairs displayed beneath the title (Feature[]).',
            },
            {
              name: 'actions',
              description: 'Optional list of CTA buttons rendered in Inspector context.',
            },
            {
              name: 'lists',
              description: 'Optional grouped list content (e.g., reviews) shown in Inspector.',
            },
          ]}
        />
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <header>
          <h2 style={{ marginBottom: '8px' }}>When to Escalate</h2>
          <p style={{ margin: 0, color: 'var(--ai-color-text-secondary)' }}>
            CompactMap offers quick exploration. Escalate to fullscreen when deeper context is
            required.
          </p>
        </header>
        <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--ai-color-text-secondary)' }}>
          <li>
            If users need side-by-side Inspector and carousel details, escalate to `FullscreenMap`.
          </li>
          <li>
            Use `MapView` directly when the carousel isn’t necessary (e.g., single location focus).
          </li>
          <li>
            Keep selection state in a shared store so CompactMap can hand off to fullscreen
            seamlessly.
          </li>
        </ul>
      </section>
    </div>
  );
};

export const CompactMaps = () => <CompactMapDoc />;
