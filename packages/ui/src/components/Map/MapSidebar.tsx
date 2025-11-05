import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '../Icon';
import { Features } from '../Feature';
import { cn } from '../../utils/cn';
import type { LocationData } from './types';
import styles from './MapSidebar.module.css';

export interface MapSidebarProps {
  /**
   * Array of locations to display.
   */
  locations: LocationData[];

  /**
   * ID of the currently selected location.
   */
  selectedId?: string;

  /**
   * Callback when a location is selected.
   */
  onSelect: (location: LocationData) => void;

  /**
   * Additional class name.
   */
  className?: string;
}

export const MapSidebar: React.FC<MapSidebarProps> = ({
  locations,
  selectedId,
  onSelect,
  className,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showBottomFade, setShowBottomFade] = useState(false);

  const updateBottomFadeVisibility = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const atBottom = Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight;
    setShowBottomFade(!atBottom);
  }, []);

  useEffect(() => {
    updateBottomFadeVisibility();
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => updateBottomFadeVisibility();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateBottomFadeVisibility);

    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateBottomFadeVisibility);
    };
  }, [updateBottomFadeVisibility, locations]);

  // Scroll to selected card
  useEffect(() => {
    if (selectedId && scrollRef.current) {
      const selectedCard = scrollRef.current.querySelector(`[data-location-id="${selectedId}"]`);
      if (selectedCard) {
        selectedCard.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
    }
  }, [selectedId]);

  return (
    <div className={cn(styles.sidebar, className)}>
      <div ref={scrollRef} className={styles.scrollContainer}>
        <div className={styles.header}>
          <span className={styles.resultsCount}>{locations.length} results</span>
          <Icon name="settings-cog" size={20} className={styles.settingsIcon} />
        </div>
        <div className={styles.list}>
          {locations.map((location, index) => (
            <React.Fragment key={location.id}>
              <button
                type="button"
                className={cn(styles.listItem, selectedId === location.id && styles.selected)}
                data-location-id={location.id}
                onClick={() => onSelect(location)}
              >
                <img src={location.thumbnail} alt={location.name} className={styles.thumbnail} />
                <div className={styles.itemContent}>
                  <div className={styles.itemTitle}>{location.name}</div>
                  {location.description && (
                    <div className={styles.itemSubtitle}>{location.description}</div>
                  )}
                  {location.features && location.features.length > 0 && (
                    <Features
                      items={location.features}
                      iconSize={12}
                      className={styles.itemFeatures}
                    />
                  )}
                </div>
              </button>
              {index < locations.length - 1 && <div className={styles.divider} />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {showBottomFade && (
          <motion.div
            className={styles.bottomFade}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.fadeGradient} aria-hidden />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

MapSidebar.displayName = 'MapSidebar';
