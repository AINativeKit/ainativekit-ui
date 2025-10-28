import React from 'react';
import { cn } from '../../utils/cn';
import { Button } from '../Button';
import { FilmStrip } from './FilmStrip';
import type { Album } from './types';
import styles from './AlbumViewer.module.css';

export interface AlbumViewerProps {
  /**
   * Album to display
   */
  album: Album;

  /**
   * Initial photo index to display
   * @default 0
   */
  initialPhotoIndex?: number;

  /**
   * Callback when viewer is closed
   */
  onClose?: () => void;

  /**
   * Additional class name
   */
  className?: string;
}

/**
 * AlbumViewer component - Fullscreen photo viewer with thumbnail navigation.
 *
 * Features:
 * - Fullscreen overlay display
 * - Large centered photo
 * - Film strip thumbnail navigation (desktop only)
 * - Keyboard navigation (arrow keys, escape)
 * - Close button
 *
 * @example
 * ```tsx
 * <AlbumViewer
 *   album={selectedAlbum}
 *   initialPhotoIndex={0}
 *   onClose={() => setViewerOpen(false)}
 * />
 * ```
 */
export const AlbumViewer: React.FC<AlbumViewerProps> = ({
  album,
  initialPhotoIndex = 0,
  onClose,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(initialPhotoIndex);

  // Reset index when album changes
  React.useEffect(() => {
    setCurrentIndex(initialPhotoIndex);
  }, [album.id, initialPhotoIndex]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          onClose?.();
          break;
        case 'ArrowLeft':
          setCurrentIndex((prev) => Math.max(0, prev - 1));
          break;
        case 'ArrowRight':
          setCurrentIndex((prev) => Math.min(album.photos.length - 1, prev + 1));
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [album.photos.length, onClose]);

  // Prevent body scroll when viewer is open
  React.useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const currentPhoto = album.photos[currentIndex];

  return (
    <div className={cn(styles.albumViewer, className)} role="dialog" aria-modal="true" aria-label={`${album.title} viewer`}>
      {/* Close Button */}
      <div className={styles.header}>
        <Button
          variant="ghost"
          iconOnly="x-crossed"
          onClick={onClose}
          aria-label="Close viewer"
          className={styles.closeButton}
        />
      </div>

      <div className={styles.content}>
        {/* Film Strip - Desktop Only */}
        <div className={styles.filmStripContainer}>
          <FilmStrip
            photos={album.photos}
            selectedIndex={currentIndex}
            onSelect={setCurrentIndex}
            albumTitle={album.title}
          />
        </div>

        {/* Main Photo Display */}
        <div className={styles.photoContainer}>
          {currentPhoto ? (
            <div className={styles.photoWrapper}>
              <img
                src={currentPhoto.url}
                alt={currentPhoto.alt || currentPhoto.title || `${album.title} - Photo ${currentIndex + 1}`}
                className={styles.photo}
              />
            </div>
          ) : (
            <div className={styles.noPhoto}>No photo available</div>
          )}
        </div>
      </div>

      {/* Navigation Buttons - Mobile */}
      {album.photos.length > 1 && (
        <>
          {currentIndex > 0 && (
            <Button
              variant="ghost"
              iconOnly="arrow-left-sm"
              onClick={() => setCurrentIndex((prev) => prev - 1)}
              aria-label="Previous photo"
              className={cn(styles.navButton, styles.navButtonPrev)}
            />
          )}
          {currentIndex < album.photos.length - 1 && (
            <Button
              variant="ghost"
              iconOnly="arrow-right-sm"
              onClick={() => setCurrentIndex((prev) => prev + 1)}
              aria-label="Next photo"
              className={cn(styles.navButton, styles.navButtonNext)}
            />
          )}
        </>
      )}

      {/* Photo Counter */}
      <div className={styles.footer}>
        <div className={styles.counter}>
          {currentIndex + 1} / {album.photos.length}
        </div>
      </div>
    </div>
  );
};

AlbumViewer.displayName = 'AlbumViewer';
