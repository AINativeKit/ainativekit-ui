import type { IconName } from '../../tokens/icons';

export interface Feature {
  /**
   * Optional icon name to display before label.
   */
  icon?: IconName;

  /**
   * Label text to display (e.g., "4.8", "$$", "Open now").
   */
  label: string;
}

export interface Action {
  /**
   * Button label text.
   */
  label: string;

  /**
   * Button type (primary or secondary).
   */
  variant?: 'primary' | 'secondary';

  /**
   * Optional callback when button is clicked.
   */
  onClick?: () => void;
}

export interface ListItem {
  /**
   * Unique identifier for the list item.
   */
  id: string;

  /**
   * Optional image URL for display (can be avatar, icon, or any image).
   */
  image?: string;

  /**
   * Item title or name.
   */
  title: string;

  /**
   * Optional description or content.
   */
  description?: string;

  /**
   * Optional metadata (author, date, rating, etc.).
   */
  metadata?: string;
}

export interface GenericList {
  /**
   * List title.
   */
  title: string;

  /**
   * List items.
   */
  items: ListItem[];
}

export interface LocationData {
  /**
   * Unique identifier for the location.
   */
  id: string;

  /**
   * Location name/title.
   */
  name: string;

  /**
   * Geographic coordinates [latitude, longitude].
   */
  coords: [number, number];

  /**
   * Optional subtitle (shown below title).
   */
  subtitle?: string;

  /**
   * Optional description (shown in main content area).
   */
  description?: string;

  /**
   * Thumbnail image URL.
   */
  thumbnail: string;

  /**
   * Configurable feature list (rating, price, etc.).
   */
  features?: Feature[];

  /**
   * Optional action buttons (independent of description).
   */
  actions?: Action[];

  /**
   * Optional generic lists (reviews, related items, etc.).
   */
  lists?: GenericList[];
}
