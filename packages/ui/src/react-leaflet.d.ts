/**
 * Type declarations to fix react-leaflet compatibility with React 19
 * This file patches the react-leaflet types to work with React 19's updated ReactNode type
 */

declare module 'react-leaflet' {
  import type {
    Map as LeafletMap,
    TileLayer as LeafletTileLayer,
    Marker as LeafletMarker,
    Popup as LeafletPopup,
    LatLngExpression,
    LatLngBoundsExpression,
    FitBoundsOptions,
    Icon,
    DivIcon,
    LeafletMouseEvent,
    LeafletEventHandlerFnMap,
  } from 'leaflet';
  import type { CSSProperties, ReactNode, RefAttributes } from 'react';

  export interface MapContainerProps {
    center?: LatLngExpression;
    zoom?: number;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    attributionControl?: boolean;
    zoomControl?: boolean;
    scrollWheelZoom?: boolean;
    doubleClickZoom?: boolean;
    dragging?: boolean;
    touchZoom?: boolean;
    minZoom?: number;
    maxZoom?: number;
    bounds?: LatLngBoundsExpression;
    boundsOptions?: FitBoundsOptions;
    maxBounds?: LatLngBoundsExpression;
    whenReady?: () => void;
  }

  export interface TileLayerProps {
    url: string;
    attribution?: string;
    opacity?: number;
    zIndex?: number;
    minZoom?: number;
    maxZoom?: number;
    subdomains?: string | string[];
    errorTileUrl?: string;
    tileSize?: number;
    detectRetina?: boolean;
  }

  export interface MarkerProps {
    position: LatLngExpression;
    icon?: Icon | DivIcon;
    opacity?: number;
    zIndexOffset?: number;
    draggable?: boolean;
    children?: ReactNode;
    eventHandlers?: Partial<LeafletEventHandlerFnMap> & {
      click?: (e: LeafletMouseEvent) => void;
      mouseover?: (e: LeafletMouseEvent) => void;
      mouseout?: (e: LeafletMouseEvent) => void;
    };
  }

  export interface PopupProps {
    position?: LatLngExpression;
    children?: ReactNode;
    offset?: [number, number];
    maxWidth?: number;
    minWidth?: number;
    maxHeight?: number;
    autoPan?: boolean;
    keepInView?: boolean;
    closeButton?: boolean;
    autoClose?: boolean;
    closeOnClick?: boolean;
    className?: string;
  }

  export const MapContainer: React.FC<MapContainerProps & RefAttributes<LeafletMap>>;
  export const TileLayer: React.FC<TileLayerProps & RefAttributes<LeafletTileLayer>>;
  export const Marker: React.FC<MarkerProps & RefAttributes<LeafletMarker>>;
  export const Popup: React.FC<PopupProps & RefAttributes<LeafletPopup>>;

  export function useMap(): LeafletMap;
  export function useMapEvents(handlers: Partial<LeafletEventHandlerFnMap>): LeafletMap;
}
