import React from 'react';
import { MapView } from './MapView';
import type { MapViewProps } from './MapView';
import { LocationCarousel } from './LocationCarousel';
import type { LocationCarouselProps } from './LocationCarousel';
import { Button } from '../Button';
import { ErrorStateDisplay } from './ErrorStateDisplay';
import { cn } from '../../utils/cn';
import styles from './CompactMap.module.css';

type CarouselOverrides = Partial<
  Omit<LocationCarouselProps, 'locations' | 'selectedId' | 'onLocationSelect' | 'className'>
>;

export interface CompactMapProps extends Omit<MapViewProps, 'className' | 'style'> {
  /**
   * Fixed height for the compact map container.
   * Accepts number (px) or string value.
   * @default 478px
   */
  height?: number | string;

  /**
   * Class name applied to the root container.
   */
  className?: string;

  /**
   * Root container style overrides.
   */
  style?: React.CSSProperties;

  /**
   * Class name applied to the internal MapView container.
   */
  mapClassName?: string;

  /**
   * Style overrides applied to the internal MapView container.
   */
  mapStyle?: React.CSSProperties;

  /**
   * Additional props forwarded to the carousel component.
   * Useful for customizing loading, error, and empty states.
   */
  carouselProps?: CarouselOverrides;

  /**
   * Callback when user clicks the expand button to enter fullscreen.
   */
  onExpand?: () => void;
}

const DEFAULT_HEIGHT = '478px';

export const CompactMap: React.FC<CompactMapProps> = ({
  locations,
  selectedId,
  activeId,
  onLocationSelect,
  onLocationActive,
  defaultCenter,
  defaultZoom,
  markerVariant,
  renderMarker,
  isInspectorOpen,
  loading = false,
  error = false,
  height = DEFAULT_HEIGHT,
  className,
  style,
  mapClassName,
  mapStyle,
  carouselProps,
  onExpand,
}) => {
  const containerStyle: React.CSSProperties = {
    ...style,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  const isEmpty = !loading && !error && locations.length === 0;

  return (
    <div className={cn(styles.container, className)} style={containerStyle}>
      <div className={styles.mapLayer}>
        <MapView
          locations={locations}
          selectedId={selectedId}
          activeId={activeId}
          onLocationSelect={onLocationSelect}
          onLocationActive={onLocationActive}
          defaultCenter={defaultCenter}
          defaultZoom={defaultZoom}
          markerVariant={markerVariant}
          renderMarker={renderMarker}
          isInspectorOpen={isInspectorOpen}
          loading={loading}
          error={error}
          className={cn(styles.mapView, mapClassName)}
          style={mapStyle}
        />

        {/* Expand Button */}
        {onExpand && (
          <Button
            variant="ghost"
            iconOnly="expand-lg"
            onClick={onExpand}
            aria-label="Expand map to fullscreen"
            className={styles.expandButton}
          />
        )}
      </div>

      <LocationCarousel
        locations={locations}
        selectedId={selectedId}
        onLocationSelect={onLocationSelect}
        loading={loading}
        error={error}
        {...carouselProps}
        {...(isEmpty
          ? {
              emptyTitle: '',
              emptyMessage: '',
            }
          : {})}
      />

      {isEmpty && (
        <div className={styles.emptyOverlay}>
          <ErrorStateDisplay
            state="empty"
            title="No locations yet"
            message="Add locations to see them on the map"
            hideIcon={true}
            layout="card"
          />
        </div>
      )}
    </div>
  );
};

CompactMap.displayName = 'CompactMap';
