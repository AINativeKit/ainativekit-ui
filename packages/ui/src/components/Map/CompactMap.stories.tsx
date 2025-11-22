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

      <section style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <header>
          <h2 style={{ marginBottom: '8px' }}>Custom Icon Elements</h2>
          <p style={{ margin: 0, color: 'var(--ai-color-text-secondary)' }}>
            Features support custom React elements as icons alongside standard icon strings.
          </p>
        </header>

        <div style={heroStyle}>
          <CompactMap
            locations={[
              {
                id: 'custom-icon-demo',
                name: 'Restaurant with Custom Icons',
                subtitle: 'Fine Dining · Downtown',
                coords: [37.7749, -122.4194],
                description: 'Example showing custom React element icons in features',
                thumbnail: 'https://persistent.oaistatic.com/pizzaz/pizzaz-1.png',
                features: [
                  {
                    icon: (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        style={{ color: '#ef4444' }}
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    ),
                    label: 'Popular',
                  },
                  {
                    icon: (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        style={{ color: '#f97316' }}
                      >
                        <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z" />
                      </svg>
                    ),
                    label: 'Trending',
                  },
                  { icon: 'star', label: '4.9' },
                  { label: '$$$' },
                ],
              },
            ]}
            defaultCenter={[37.7749, -122.4194]}
            defaultZoom={13}
            height={CHATGPT_APP_HEIGHT}
          />
        </div>

        <div
          style={{
            background: 'var(--ai-color-bg-secondary)',
            borderRadius: '12px',
            padding: '16px',
            maxWidth: CHATGPT_APP_WIDTH,
            fontSize: '13px',
          }}
        >
          <p style={{ margin: '0 0 12px 0' }}>
            <strong>Use cases:</strong> Custom brand icons, third-party icon libraries (Heroicons,
            Lucide, Font Awesome), colored/themed icons, animated badges.
          </p>
          <pre
            style={{
              margin: 0,
              padding: '12px',
              background: 'var(--ai-color-bg-primary)',
              borderRadius: '8px',
              fontSize: '12px',
              fontFamily: 'monospace',
              overflow: 'auto',
            }}
          >
            {`features: [
  { icon: <CustomHeartSVG />, label: 'Popular' },  // Custom React element
  { icon: 'star', label: '4.9' },                  // Standard icon string
  { label: '$$$' }                                 // No icon
]`}
          </pre>
        </div>
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
