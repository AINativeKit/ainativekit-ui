/**
 * Tile provider configuration for OpenStreetMap-based maps.
 * Following OpenStreetMap tile usage policy: https://operations.osmfoundation.org/policies/tiles/
 */

export interface TileProviderConfig {
  /**
   * Tile layer URL template.
   * Uses Leaflet URL template format: {z}/{x}/{y} for coordinates, {s} for subdomains.
   */
  url: string;

  /**
   * Attribution text (required by most tile providers).
   */
  attribution: string;

  /**
   * Tile server subdomains (for load balancing).
   */
  subdomains?: string[];

  /**
   * Maximum zoom level supported by this provider.
   */
  maxZoom?: number;

  /**
   * Minimum zoom level supported by this provider.
   */
  minZoom?: number;

  /**
   * Whether to load retina/high-DPI tiles (@2x).
   * When true, requests tiles at double resolution on high-DPI displays.
   * @default true
   */
  detectRetina?: boolean;

  /**
   * API key required by this provider (if applicable).
   * Will be interpolated into the URL using {apiKey} placeholder.
   */
  requiresApiKey?: boolean;
}

/**
 * Preset tile provider names.
 * Includes popular OpenStreetMap-based tile services.
 */
export type TileProviderPreset =
  | 'osm-standard'
  | 'osm-humanitarian'
  | 'carto-light'
  | 'carto-dark'
  | 'carto-voyager'
  | 'stamen-toner'
  | 'stamen-terrain'
  | 'stamen-watercolor'
  | 'cyclOSM'
  | 'openTopoMap'
  | 'geoapify-osm-bright-grey'
  | 'geoapify-osm-bright-smooth'
  | 'thunderforest-transport'
  | 'thunderforest-landscape'
  | 'opnvkarte';

/**
 * Tile provider preset configurations.
 * All providers use OpenStreetMap data with different styling/rendering.
 */
export const TILE_PROVIDER_PRESETS: Record<TileProviderPreset, TileProviderConfig> = {
  /**
   * OpenStreetMap Standard - The default OSM style
   * Free to use, no API key required
   * IMPORTANT: Requires User-Agent or Referer header per OSM tile usage policy
   */
  'osm-standard': {
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
    detectRetina: true,
  },

  /**
   * OpenStreetMap Humanitarian - HOT style for humanitarian mapping
   * Free to use, no API key required
   */
  'osm-humanitarian': {
    url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/">Humanitarian OpenStreetMap Team</a>',
    subdomains: ['a', 'b', 'c'],
    maxZoom: 20,
    detectRetina: true,
  },

  /**
   * CARTO Light (Positron) - Clean, minimal light theme
   * Free to use, no API key required
   */
  'carto-light': {
    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: ['a', 'b', 'c', 'd'],
    maxZoom: 19,
    detectRetina: true,
  },

  /**
   * CARTO Dark (Dark Matter) - Dark theme for light text/overlays
   * Free to use, no API key required
   */
  'carto-dark': {
    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: ['a', 'b', 'c', 'd'],
    maxZoom: 19,
    detectRetina: true,
  },

  /**
   * CARTO Voyager - Colorful, detailed theme
   * Free to use, no API key required
   * Current default in the component
   */
  'carto-voyager': {
    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: ['a', 'b', 'c', 'd'],
    maxZoom: 19,
    detectRetina: true,
  },

  /**
   * Stamen Toner - High contrast black & white
   * Free to use via Stadia Maps, no API key required
   */
  'stamen-toner': {
    url: 'https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://stamen.com">Stamen Design</a>',
    maxZoom: 18,
    detectRetina: true,
  },

  /**
   * Stamen Terrain - Topographic terrain style with hillshading
   * Free to use via Stadia Maps, no API key required
   */
  'stamen-terrain': {
    url: 'https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://stamen.com">Stamen Design</a>',
    maxZoom: 18,
    detectRetina: true,
  },

  /**
   * Stamen Watercolor - Artistic watercolor style
   * Free to use via Stadia Maps, no API key required
   */
  'stamen-watercolor': {
    url: 'https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://stamen.com">Stamen Design</a>',
    maxZoom: 16,
    detectRetina: false, // Watercolor doesn't benefit from retina
  },

  /**
   * CyclOSM - Cycling-focused map style
   * Free to use, no API key required
   */
  cyclOSM: {
    url: 'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles by <a href="https://www.cyclosm.org/">CyclOSM</a>',
    subdomains: ['a', 'b', 'c'],
    maxZoom: 19,
    detectRetina: true,
  },

  /**
   * OpenTopoMap - Topographic map style with contour lines
   * Free to use, no API key required
   */
  openTopoMap: {
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Tiles by <a href="https://opentopomap.org">OpenTopoMap</a>',
    subdomains: ['a', 'b', 'c'],
    maxZoom: 17,
    detectRetina: true,
  },

  /**
   * Geoapify OSM Bright Grey - Clean grey style
   * Requires API key (free tier available at https://www.geoapify.com/)
   */
  'geoapify-osm-bright-grey': {
    url: 'https://maps.geoapify.com/v1/tile/osm-bright-grey/{z}/{x}/{y}.png?apiKey={apiKey}',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Powered by <a href="https://www.geoapify.com/">Geoapify</a>',
    maxZoom: 19,
    detectRetina: true,
    requiresApiKey: true,
  },

  /**
   * Geoapify OSM Bright Smooth - Smooth, minimal style
   * Requires API key (free tier available at https://www.geoapify.com/)
   */
  'geoapify-osm-bright-smooth': {
    url: 'https://maps.geoapify.com/v1/tile/osm-bright-smooth/{z}/{x}/{y}.png?apiKey={apiKey}',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Powered by <a href="https://www.geoapify.com/">Geoapify</a>',
    maxZoom: 19,
    detectRetina: true,
    requiresApiKey: true,
  },

  /**
   * Thunderforest Transport - Public transport focused
   * Requires API key (free tier available at https://www.thunderforest.com/)
   */
  'thunderforest-transport': {
    url: 'https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey={apiKey}',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles by <a href="https://www.thunderforest.com/">Thunderforest</a>',
    maxZoom: 19,
    detectRetina: true,
    requiresApiKey: true,
  },

  /**
   * Thunderforest Landscape - Natural landscape style
   * Requires API key (free tier available at https://www.thunderforest.com/)
   */
  'thunderforest-landscape': {
    url: 'https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey={apiKey}',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles by <a href="https://www.thunderforest.com/">Thunderforest</a>',
    maxZoom: 19,
    detectRetina: true,
    requiresApiKey: true,
  },

  /**
   * ÖPNVKarte - Public transport map (German focus)
   * Free to use, no API key required
   */
  opnvkarte: {
    url: 'https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles by <a href="https://memomaps.de/">MeMoMaps</a>',
    maxZoom: 18,
    detectRetina: true,
  },
};

/**
 * Get tile provider configuration by preset name.
 * Returns undefined if preset doesn't exist.
 */
export function getTileProviderConfig(preset: TileProviderPreset): TileProviderConfig | undefined {
  return TILE_PROVIDER_PRESETS[preset];
}

/**
 * Check if a tile provider requires an API key.
 */
export function requiresApiKey(preset: TileProviderPreset): boolean {
  return TILE_PROVIDER_PRESETS[preset]?.requiresApiKey ?? false;
}
