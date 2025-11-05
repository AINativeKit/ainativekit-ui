/**
 * Icon tokens for AI Native Kit
 * Auto-generated from SVG files in src/tokens/icons/
 *
 * DO NOT EDIT MANUALLY - Run 'pnpm sync-icons' to regenerate
 *
 * @example
 * ```typescript
 * import { Icon } from '@ainativekit/ui';
 * import { PlusCircleAdd } from '@ainativekit/ui/icons';
 *
 * <Icon name="plus-circle-add" size="md" />
 * <PlusCircleAdd size="md" />
 * ```
 */

export const iconCategories = [
  'account-user',
  'arrows',
  'chat-tools',
  'interface',
  'misc',
  'platform',
  'settings',
] as const;

export type IconCategory = (typeof iconCategories)[number];

// Account-user Icon Names (40 icons)
export type AccountUserIconName =
  | 'add-member'
  | 'astronaut'
  | 'avatar-filled-profile'
  | 'avatar-profile'
  | 'builder-profile-card'
  | 'building-workspace'
  | 'delete-account'
  | 'fist-bump'
  | 'go'
  | 'go-filled'
  | 'group'
  | 'group-filled'
  | 'groups'
  | 'hand-peace'
  | 'hand-raised-hey'
  | 'hand-waving-bye'
  | 'identity-me-secure'
  | 'members'
  | 'members-filled'
  | 'my-gpt-profile-me'
  | 'plant-desk'
  | 'plus'
  | 'plus-filled'
  | 'privacy-intern'
  | 'pro-diamond'
  | 'pro-filled-diamond'
  | 'simple-relax'
  | 'simple-sad'
  | 'simple-smile'
  | 'sleep'
  | 'suitcase-filled-work-business'
  | 'suitcase-work-business'
  | 'upgrade-plan'
  | 'user'
  | 'user-add'
  | 'user-gpts'
  | 'user-heart'
  | 'user-lock'
  | 'user-voice'
  | 'wreath';

// Arrows Icon Names (39 icons)
export type ArrowsIconName =
  | 'arrow-bottom-left-sm'
  | 'arrow-bottom-right-sm'
  | 'arrow-curved-left'
  | 'arrow-curved-right'
  | 'arrow-curved-right-xs'
  | 'arrow-down-lg'
  | 'arrow-down-sm'
  | 'arrow-left-lg'
  | 'arrow-left-sm'
  | 'arrow-right-lg'
  | 'arrow-right-sm'
  | 'arrow-rotate-ccw'
  | 'arrow-rotate-cw'
  | 'arrow-top-left-sm'
  | 'arrow-top-right-sm'
  | 'arrow-up-lg'
  | 'arrow-up-sm'
  | 'chevron-down-lg'
  | 'chevron-down-md'
  | 'chevron-down-up'
  | 'chevron-left-lg'
  | 'chevron-left-md'
  | 'chevron-right-lg'
  | 'chevron-right-md'
  | 'chevron-up-down'
  | 'chevron-up-lg'
  | 'chevron-up-md'
  | 'collapse-lg'
  | 'collapse-sm'
  | 'expand-lg'
  | 'expand-md'
  | 'expand-sm'
  | 'redo'
  | 'regenerate'
  | 'regenerate-off'
  | 'regenerate-star'
  | 'reply'
  | 'shuffle'
  | 'undo';

// Chat-tools Icon Names (114 icons)
export type ChatToolsIconName =
  | 'all-gizmos'
  | 'all-products-explore'
  | 'app-chatgpt-cursor'
  | 'app-operator'
  | 'aspect-ratio-1-1'
  | 'aspect-ratio-16-9'
  | 'aspect-ratio-16-9-1'
  | 'aspect-ratio-3-4'
  | 'aspect-ratio-4-3'
  | 'aspect-ratio-9-16'
  | 'back-10s'
  | 'back-15s'
  | 'camera-filled-photo'
  | 'camera-photo'
  | 'caption-cc-off'
  | 'caption-cc-on'
  | 'caption-off'
  | 'caption-on'
  | 'cleanup'
  | 'clipboard-copy'
  | 'code-square-slash'
  | 'complete'
  | 'compose-canvas-edit-star'
  | 'compose-dashed-temporary'
  | 'compose-edit-square'
  | 'confetti-party'
  | 'copy'
  | 'download'
  | 'download-simple'
  | 'edit-dalle-image'
  | 'edit-pencil'
  | 'emoji-add'
  | 'emoji-lists'
  | 'emoji-remove'
  | 'emoji-sections'
  | 'emoji-words'
  | 'error'
  | 'folder-documents-finder'
  | 'folder-open'
  | 'folder-plus-add'
  | 'folder-shared'
  | 'folder-shared-open'
  | 'folder-stuffed'
  | 'folder-unshare'
  | 'folders'
  | 'forward-10s'
  | 'forward-15s'
  | 'graduation-cap'
  | 'headphones'
  | 'image-square-picture-library'
  | 'image-wide-filled'
  | 'image-wide-picture-library'
  | 'inpaint'
  | 'inpaint-respond'
  | 'link-external-website'
  | 'memory-filled-sm'
  | 'memory-off-remember'
  | 'memory-on-remember'
  | 'mic'
  | 'mic-filled'
  | 'mic-filled-off'
  | 'mic-lg-dictate'
  | 'mic-off'
  | 'notification-bell'
  | 'notification-off-bell'
  | 'paperclip-attach'
  | 'pause'
  | 'pause-circle-filled'
  | 'pause-sm'
  | 'play'
  | 'play-circle-filled'
  | 'play-sm'
  | 'plugin-puzzle'
  | 'pulse'
  | 'quote-reply-filled-quote-xs'
  | 'reading-level'
  | 'remove-forever-permanently'
  | 'restore-untrash'
  | 'select-text'
  | 'share'
  | 'share-android'
  | 'share-screen'
  | 'share-screen-1'
  | 'share-screen-filled'
  | 'share-screen-filled-1'
  | 'share-screen-off'
  | 'share-screen-off-filled'
  | 'skip'
  | 'sound-off-simple-mute'
  | 'sound-off-speaker'
  | 'sound-on-read-out-loud-speaker'
  | 'speak'
  | 'star'
  | 'star-filled'
  | 'stop'
  | 'stop-circle-filled'
  | 'stop-sm'
  | 'tasks'
  | 'text-longer'
  | 'text-shorter'
  | 'thumb-down'
  | 'thumb-down-filled'
  | 'thumb-mixed'
  | 'thumb-up'
  | 'thumb-up-filled'
  | 'trash-remove'
  | 'upload-documents'
  | 'video'
  | 'video-filled'
  | 'video-filled-off'
  | 'voice-4-bars'
  | 'voice-5-bars-soundwave'
  | 'voice-bold'
  | 'voice-input';

// Interface Icon Names (32 icons)
export type InterfaceIconName =
  | 'close-bold'
  | 'dots-horizontal-more-menu'
  | 'dots-vertical-more-menu'
  | 'enter-login'
  | 'equal'
  | 'exit-logout'
  | 'link'
  | 'link-disabled-bold'
  | 'magnifying-glass-sm-search'
  | 'menu-sidebar'
  | 'minus'
  | 'more-circle-menu-dots'
  | 'picture-in-picture'
  | 'plus-add-lg'
  | 'plus-add-md'
  | 'plus-add-sm'
  | 'plus-circle-add'
  | 'plus-composer'
  | 'plus-square-add'
  | 'product-tag'
  | 'search'
  | 'sidebar'
  | 'sidebar-badge'
  | 'sidebar-menu-mobile'
  | 'sidebar-menu-mobile-badge-cutout'
  | 'unlink'
  | 'x-circle-crossed-close'
  | 'x-circle-filled-crossed-close'
  | 'x-crossed'
  | 'x-square-crossed'
  | 'x-square-filled-crossed'
  | 'x-xs-crossed';

// Misc Icon Names (93 icons)
export type MiscIconName =
  | 'agent-mode'
  | 'analytics'
  | 'analyze-data'
  | 'archive'
  | 'balancing-scale'
  | 'bar-chart'
  | 'book'
  | 'book-bookmark'
  | 'book-clock'
  | 'book-wrench'
  | 'brain'
  | 'calendar-today'
  | 'chat'
  | 'chat-compose'
  | 'chat-dashed-checked-temp'
  | 'chat-dashed-temp'
  | 'chat-triple-dots'
  | 'chats'
  | 'clock'
  | 'clock-off'
  | 'comment'
  | 'compass'
  | 'credit-card'
  | 'deep-search-telescope'
  | 'dice-randomize'
  | 'dining-events'
  | 'dollar-circle'
  | 'dumbbell'
  | 'earth-travel-world'
  | 'email'
  | 'file-presentation'
  | 'flag'
  | 'flask'
  | 'flask-filled'
  | 'followup'
  | 'function'
  | 'glasses'
  | 'globe-alt-real-time-search'
  | 'globe-filled'
  | 'globe-off-real-time-search'
  | 'globe-real-time-search'
  | 'globe-spin'
  | 'health'
  | 'history-off'
  | 'history-on'
  | 'image-caption'
  | 'images'
  | 'internal-knowledge'
  | 'internal-knowledge-optimized-for-circle'
  | 'invoice'
  | 'kettlebell'
  | 'local-services'
  | 'lotus'
  | 'love'
  | 'manage-history'
  | 'maps'
  | 'maps-address'
  | 'maps-directions'
  | 'marker-code'
  | 'marker-data'
  | 'marker-multiple'
  | 'marker-quote'
  | 'messaging'
  | 'music'
  | 'news-paper'
  | 'notebook-check'
  | 'notebook-narrow'
  | 'notepad'
  | 'operator'
  | 'order'
  | 'paid'
  | 'pasted-text'
  | 'paw'
  | 'pens'
  | 'phone'
  | 'phone-missed'
  | 'phone-ring'
  | 'phone-waves'
  | 'pin'
  | 'pin-filled'
  | 'plane'
  | 'record'
  | 'shopping-bag'
  | 'speedometer-latency-speed'
  | 'stethoscope'
  | 'stuff-tools'
  | 'tools-skills'
  | 'trending'
  | 'unarchive'
  | 'unpin'
  | 'whisk'
  | 'work-with-apps'
  | 'writing';

// Platform Icon Names (23 icons)
export type PlatformIconName =
  | 'agent'
  | 'api-key'
  | 'api-key-admin'
  | 'api-key-plus-add'
  | 'api-key-service-account'
  | 'api-keys'
  | 'batches'
  | 'category'
  | 'gpt-placeholder'
  | 'map-pin'
  | 'notebook'
  | 'platform-function'
  | 'playground'
  | 'robot-head'
  | 'robot-head-sad'
  | 'snorkel'
  | 'speech-to-text'
  | 'stack'
  | 'status'
  | 'storage'
  | 'terminal'
  | 'terminal-lg'
  | 'text-to-speech';

// Settings Icon Names (76 icons)
export type SettingsIconName =
  | 'add-sources'
  | 'app-permission'
  | 'app-store'
  | 'app-store-square'
  | 'auto-pair-apps'
  | 'auto-suggested-edits'
  | 'autocomplete'
  | 'back-to-app'
  | 'background-conversation'
  | 'bug'
  | 'check-circle'
  | 'check-circle-dashed'
  | 'check-circle-filled'
  | 'check-lg'
  | 'check-md'
  | 'checkbox-checked'
  | 'checkbox-checked-filled'
  | 'checkbox-unchecked'
  | 'click'
  | 'color-theme'
  | 'connect-apps'
  | 'connectors-connected-apps'
  | 'data-controls'
  | 'desktop'
  | 'disabled-cursor'
  | 'dock'
  | 'empty-circle'
  | 'exclamation-mark-circle'
  | 'eye'
  | 'eye-off'
  | 'filter'
  | 'frozen'
  | 'generate-suggested-edits'
  | 'haptic-feedback'
  | 'help'
  | 'info-circle'
  | 'interactive'
  | 'keyboard-shortcut'
  | 'lightbulb-20'
  | 'lightbulb-22'
  | 'lightbulb-22-filled'
  | 'lightbulb-glow'
  | 'lock-key-hole'
  | 'macbook-download'
  | 'menubar'
  | 'moon'
  | 'moon-sun-system'
  | 'no-training'
  | 'parent-control'
  | 'pin-window'
  | 'pop-out-window'
  | 'question-mark'
  | 'question-mark-circle'
  | 'radio-selected'
  | 'remove-red-eye'
  | 'reset-chat'
  | 'screen-position'
  | 'search-connector'
  | 'settings-cog'
  | 'settings-slider'
  | 'settings-wrench'
  | 'shield-lock'
  | 'shortcuts'
  | 'spelling'
  | 'stopwatch'
  | 'suggest-edit'
  | 'sun'
  | 'tap'
  | 'translate'
  | 'triangle-exclamation-error-warning'
  | 'triangle-exclamation-filled-error-warning'
  | 'tuning-fork'
  | 'upgrade'
  | 'warning-filled-wrap-centered-for-circle'
  | 'warning-wrap-centered-for-circle'
  | 'whisper-auto-submit';

// Union type for all icon names
export type IconName =
  | AccountUserIconName
  | ArrowsIconName
  | ChatToolsIconName
  | InterfaceIconName
  | MiscIconName
  | PlatformIconName
  | SettingsIconName;

export const iconNames = [
  'add-member',
  'astronaut',
  'avatar-filled-profile',
  'avatar-profile',
  'builder-profile-card',
  'building-workspace',
  'delete-account',
  'fist-bump',
  'go',
  'go-filled',
  'group',
  'group-filled',
  'groups',
  'hand-peace',
  'hand-raised-hey',
  'hand-waving-bye',
  'identity-me-secure',
  'members',
  'members-filled',
  'my-gpt-profile-me',
  'plant-desk',
  'plus',
  'plus-filled',
  'privacy-intern',
  'pro-diamond',
  'pro-filled-diamond',
  'simple-relax',
  'simple-sad',
  'simple-smile',
  'sleep',
  'suitcase-filled-work-business',
  'suitcase-work-business',
  'upgrade-plan',
  'user',
  'user-add',
  'user-gpts',
  'user-heart',
  'user-lock',
  'user-voice',
  'wreath',
  'arrow-bottom-left-sm',
  'arrow-bottom-right-sm',
  'arrow-curved-left',
  'arrow-curved-right',
  'arrow-curved-right-xs',
  'arrow-down-lg',
  'arrow-down-sm',
  'arrow-left-lg',
  'arrow-left-sm',
  'arrow-right-lg',
  'arrow-right-sm',
  'arrow-rotate-ccw',
  'arrow-rotate-cw',
  'arrow-top-left-sm',
  'arrow-top-right-sm',
  'arrow-up-lg',
  'arrow-up-sm',
  'chevron-down-lg',
  'chevron-down-md',
  'chevron-down-up',
  'chevron-left-lg',
  'chevron-left-md',
  'chevron-right-lg',
  'chevron-right-md',
  'chevron-up-down',
  'chevron-up-lg',
  'chevron-up-md',
  'collapse-lg',
  'collapse-sm',
  'expand-lg',
  'expand-md',
  'expand-sm',
  'redo',
  'regenerate',
  'regenerate-off',
  'regenerate-star',
  'reply',
  'shuffle',
  'undo',
  'all-gizmos',
  'all-products-explore',
  'app-chatgpt-cursor',
  'app-operator',
  'aspect-ratio-1-1',
  'aspect-ratio-16-9',
  'aspect-ratio-16-9-1',
  'aspect-ratio-3-4',
  'aspect-ratio-4-3',
  'aspect-ratio-9-16',
  'back-10s',
  'back-15s',
  'camera-filled-photo',
  'camera-photo',
  'caption-cc-off',
  'caption-cc-on',
  'caption-off',
  'caption-on',
  'cleanup',
  'clipboard-copy',
  'code-square-slash',
  'complete',
  'compose-canvas-edit-star',
  'compose-dashed-temporary',
  'compose-edit-square',
  'confetti-party',
  'copy',
  'download',
  'download-simple',
  'edit-dalle-image',
  'edit-pencil',
  'emoji-add',
  'emoji-lists',
  'emoji-remove',
  'emoji-sections',
  'emoji-words',
  'error',
  'folder-documents-finder',
  'folder-open',
  'folder-plus-add',
  'folder-shared',
  'folder-shared-open',
  'folder-stuffed',
  'folder-unshare',
  'folders',
  'forward-10s',
  'forward-15s',
  'graduation-cap',
  'headphones',
  'image-square-picture-library',
  'image-wide-filled',
  'image-wide-picture-library',
  'inpaint',
  'inpaint-respond',
  'link-external-website',
  'memory-filled-sm',
  'memory-off-remember',
  'memory-on-remember',
  'mic',
  'mic-filled',
  'mic-filled-off',
  'mic-lg-dictate',
  'mic-off',
  'notification-bell',
  'notification-off-bell',
  'paperclip-attach',
  'pause',
  'pause-circle-filled',
  'pause-sm',
  'play',
  'play-circle-filled',
  'play-sm',
  'plugin-puzzle',
  'pulse',
  'quote-reply-filled-quote-xs',
  'reading-level',
  'remove-forever-permanently',
  'restore-untrash',
  'select-text',
  'share',
  'share-android',
  'share-screen',
  'share-screen-1',
  'share-screen-filled',
  'share-screen-filled-1',
  'share-screen-off',
  'share-screen-off-filled',
  'skip',
  'sound-off-simple-mute',
  'sound-off-speaker',
  'sound-on-read-out-loud-speaker',
  'speak',
  'star',
  'star-filled',
  'stop',
  'stop-circle-filled',
  'stop-sm',
  'tasks',
  'text-longer',
  'text-shorter',
  'thumb-down',
  'thumb-down-filled',
  'thumb-mixed',
  'thumb-up',
  'thumb-up-filled',
  'trash-remove',
  'upload-documents',
  'video',
  'video-filled',
  'video-filled-off',
  'voice-4-bars',
  'voice-5-bars-soundwave',
  'voice-bold',
  'voice-input',
  'close-bold',
  'dots-horizontal-more-menu',
  'dots-vertical-more-menu',
  'enter-login',
  'equal',
  'exit-logout',
  'link',
  'link-disabled-bold',
  'magnifying-glass-sm-search',
  'menu-sidebar',
  'minus',
  'more-circle-menu-dots',
  'picture-in-picture',
  'plus-add-lg',
  'plus-add-md',
  'plus-add-sm',
  'plus-circle-add',
  'plus-composer',
  'plus-square-add',
  'product-tag',
  'search',
  'sidebar',
  'sidebar-badge',
  'sidebar-menu-mobile',
  'sidebar-menu-mobile-badge-cutout',
  'unlink',
  'x-circle-crossed-close',
  'x-circle-filled-crossed-close',
  'x-crossed',
  'x-square-crossed',
  'x-square-filled-crossed',
  'x-xs-crossed',
  'agent-mode',
  'analytics',
  'analyze-data',
  'archive',
  'balancing-scale',
  'bar-chart',
  'book',
  'book-bookmark',
  'book-clock',
  'book-wrench',
  'brain',
  'calendar-today',
  'chat',
  'chat-compose',
  'chat-dashed-checked-temp',
  'chat-dashed-temp',
  'chat-triple-dots',
  'chats',
  'clock',
  'clock-off',
  'comment',
  'compass',
  'credit-card',
  'deep-search-telescope',
  'dice-randomize',
  'dining-events',
  'dollar-circle',
  'dumbbell',
  'earth-travel-world',
  'email',
  'file-presentation',
  'flag',
  'flask',
  'flask-filled',
  'followup',
  'function',
  'glasses',
  'globe-alt-real-time-search',
  'globe-filled',
  'globe-off-real-time-search',
  'globe-real-time-search',
  'globe-spin',
  'health',
  'history-off',
  'history-on',
  'image-caption',
  'images',
  'internal-knowledge',
  'internal-knowledge-optimized-for-circle',
  'invoice',
  'kettlebell',
  'local-services',
  'lotus',
  'love',
  'manage-history',
  'maps',
  'maps-address',
  'maps-directions',
  'marker-code',
  'marker-data',
  'marker-multiple',
  'marker-quote',
  'messaging',
  'music',
  'news-paper',
  'notebook-check',
  'notebook-narrow',
  'notepad',
  'operator',
  'order',
  'paid',
  'pasted-text',
  'paw',
  'pens',
  'phone',
  'phone-missed',
  'phone-ring',
  'phone-waves',
  'pin',
  'pin-filled',
  'plane',
  'record',
  'shopping-bag',
  'speedometer-latency-speed',
  'stethoscope',
  'stuff-tools',
  'tools-skills',
  'trending',
  'unarchive',
  'unpin',
  'whisk',
  'work-with-apps',
  'writing',
  'agent',
  'api-key',
  'api-key-admin',
  'api-key-plus-add',
  'api-key-service-account',
  'api-keys',
  'batches',
  'category',
  'gpt-placeholder',
  'map-pin',
  'notebook',
  'platform-function',
  'playground',
  'robot-head',
  'robot-head-sad',
  'snorkel',
  'speech-to-text',
  'stack',
  'status',
  'storage',
  'terminal',
  'terminal-lg',
  'text-to-speech',
  'add-sources',
  'app-permission',
  'app-store',
  'app-store-square',
  'auto-pair-apps',
  'auto-suggested-edits',
  'autocomplete',
  'back-to-app',
  'background-conversation',
  'bug',
  'check-circle',
  'check-circle-dashed',
  'check-circle-filled',
  'check-lg',
  'check-md',
  'checkbox-checked',
  'checkbox-checked-filled',
  'checkbox-unchecked',
  'click',
  'color-theme',
  'connect-apps',
  'connectors-connected-apps',
  'data-controls',
  'desktop',
  'disabled-cursor',
  'dock',
  'empty-circle',
  'exclamation-mark-circle',
  'eye',
  'eye-off',
  'filter',
  'frozen',
  'generate-suggested-edits',
  'haptic-feedback',
  'help',
  'info-circle',
  'interactive',
  'keyboard-shortcut',
  'lightbulb-20',
  'lightbulb-22',
  'lightbulb-22-filled',
  'lightbulb-glow',
  'lock-key-hole',
  'macbook-download',
  'menubar',
  'moon',
  'moon-sun-system',
  'no-training',
  'parent-control',
  'pin-window',
  'pop-out-window',
  'question-mark',
  'question-mark-circle',
  'radio-selected',
  'remove-red-eye',
  'reset-chat',
  'screen-position',
  'search-connector',
  'settings-cog',
  'settings-slider',
  'settings-wrench',
  'shield-lock',
  'shortcuts',
  'spelling',
  'stopwatch',
  'suggest-edit',
  'sun',
  'tap',
  'translate',
  'triangle-exclamation-error-warning',
  'triangle-exclamation-filled-error-warning',
  'tuning-fork',
  'upgrade',
  'warning-filled-wrap-centered-for-circle',
  'warning-wrap-centered-for-circle',
  'whisper-auto-submit',
] as const;

export const iconMetadata = {
  'add-member': { category: 'account-user', fileName: 'add-member' },
  astronaut: { category: 'account-user', fileName: 'astronaut' },
  'avatar-filled-profile': { category: 'account-user', fileName: 'avatar-filled-profile' },
  'avatar-profile': { category: 'account-user', fileName: 'avatar-profile' },
  'builder-profile-card': { category: 'account-user', fileName: 'builder-profile-card' },
  'building-workspace': { category: 'account-user', fileName: 'building-workspace' },
  'delete-account': { category: 'account-user', fileName: 'delete-account' },
  'fist-bump': { category: 'account-user', fileName: 'fist-bump' },
  go: { category: 'account-user', fileName: 'go' },
  'go-filled': { category: 'account-user', fileName: 'go-filled' },
  group: { category: 'account-user', fileName: 'group' },
  'group-filled': { category: 'account-user', fileName: 'group-filled' },
  groups: { category: 'account-user', fileName: 'groups' },
  'hand-peace': { category: 'account-user', fileName: 'hand-peace' },
  'hand-raised-hey': { category: 'account-user', fileName: 'hand-raised-hey' },
  'hand-waving-bye': { category: 'account-user', fileName: 'hand-waving-bye' },
  'identity-me-secure': { category: 'account-user', fileName: 'identity-me-secure' },
  members: { category: 'account-user', fileName: 'members' },
  'members-filled': { category: 'account-user', fileName: 'members-filled' },
  'my-gpt-profile-me': { category: 'account-user', fileName: 'my-gpt-profile-me' },
  'plant-desk': { category: 'account-user', fileName: 'plant-desk' },
  plus: { category: 'account-user', fileName: 'plus' },
  'plus-filled': { category: 'account-user', fileName: 'plus-filled' },
  'privacy-intern': { category: 'account-user', fileName: 'privacy-intern' },
  'pro-diamond': { category: 'account-user', fileName: 'pro-diamond' },
  'pro-filled-diamond': { category: 'account-user', fileName: 'pro-filled-diamond' },
  'simple-relax': { category: 'account-user', fileName: 'simple-relax' },
  'simple-sad': { category: 'account-user', fileName: 'simple-sad' },
  'simple-smile': { category: 'account-user', fileName: 'simple-smile' },
  sleep: { category: 'account-user', fileName: 'sleep' },
  'suitcase-filled-work-business': {
    category: 'account-user',
    fileName: 'suitcase-filled-work-business',
  },
  'suitcase-work-business': { category: 'account-user', fileName: 'suitcase-work-business' },
  'upgrade-plan': { category: 'account-user', fileName: 'upgrade-plan' },
  user: { category: 'account-user', fileName: 'user' },
  'user-add': { category: 'account-user', fileName: 'user-add' },
  'user-gpts': { category: 'account-user', fileName: 'user-gpts' },
  'user-heart': { category: 'account-user', fileName: 'user-heart' },
  'user-lock': { category: 'account-user', fileName: 'user-lock' },
  'user-voice': { category: 'account-user', fileName: 'user-voice' },
  wreath: { category: 'account-user', fileName: 'wreath' },
  'arrow-bottom-left-sm': { category: 'arrows', fileName: 'arrow-bottom-left-sm' },
  'arrow-bottom-right-sm': { category: 'arrows', fileName: 'arrow-bottom-right-sm' },
  'arrow-curved-left': { category: 'arrows', fileName: 'arrow-curved-left' },
  'arrow-curved-right': { category: 'arrows', fileName: 'arrow-curved-right' },
  'arrow-curved-right-xs': { category: 'arrows', fileName: 'arrow-curved-right-xs' },
  'arrow-down-lg': { category: 'arrows', fileName: 'arrow-down-lg' },
  'arrow-down-sm': { category: 'arrows', fileName: 'arrow-down-sm' },
  'arrow-left-lg': { category: 'arrows', fileName: 'arrow-left-lg' },
  'arrow-left-sm': { category: 'arrows', fileName: 'arrow-left-sm' },
  'arrow-right-lg': { category: 'arrows', fileName: 'arrow-right-lg' },
  'arrow-right-sm': { category: 'arrows', fileName: 'arrow-right-sm' },
  'arrow-rotate-ccw': { category: 'arrows', fileName: 'arrow-rotate-ccw' },
  'arrow-rotate-cw': { category: 'arrows', fileName: 'arrow-rotate-cw' },
  'arrow-top-left-sm': { category: 'arrows', fileName: 'arrow-top-left-sm' },
  'arrow-top-right-sm': { category: 'arrows', fileName: 'arrow-top-right-sm' },
  'arrow-up-lg': { category: 'arrows', fileName: 'arrow-up-lg' },
  'arrow-up-sm': { category: 'arrows', fileName: 'arrow-up-sm' },
  'chevron-down-lg': { category: 'arrows', fileName: 'chevron-down-lg' },
  'chevron-down-md': { category: 'arrows', fileName: 'chevron-down-md' },
  'chevron-down-up': { category: 'arrows', fileName: 'chevron-down-up' },
  'chevron-left-lg': { category: 'arrows', fileName: 'chevron-left-lg' },
  'chevron-left-md': { category: 'arrows', fileName: 'chevron-left-md' },
  'chevron-right-lg': { category: 'arrows', fileName: 'chevron-right-lg' },
  'chevron-right-md': { category: 'arrows', fileName: 'chevron-right-md' },
  'chevron-up-down': { category: 'arrows', fileName: 'chevron-up-down' },
  'chevron-up-lg': { category: 'arrows', fileName: 'chevron-up-lg' },
  'chevron-up-md': { category: 'arrows', fileName: 'chevron-up-md' },
  'collapse-lg': { category: 'arrows', fileName: 'collapse-lg' },
  'collapse-sm': { category: 'arrows', fileName: 'collapse-sm' },
  'expand-lg': { category: 'arrows', fileName: 'expand-lg' },
  'expand-md': { category: 'arrows', fileName: 'expand-md' },
  'expand-sm': { category: 'arrows', fileName: 'expand-sm' },
  redo: { category: 'arrows', fileName: 'redo' },
  regenerate: { category: 'arrows', fileName: 'regenerate' },
  'regenerate-off': { category: 'arrows', fileName: 'regenerate-off' },
  'regenerate-star': { category: 'arrows', fileName: 'regenerate-star' },
  reply: { category: 'arrows', fileName: 'reply' },
  shuffle: { category: 'arrows', fileName: 'shuffle' },
  undo: { category: 'arrows', fileName: 'undo' },
  'all-gizmos': { category: 'chat-tools', fileName: 'all-gizmos' },
  'all-products-explore': { category: 'chat-tools', fileName: 'all-products-explore' },
  'app-chatgpt-cursor': { category: 'chat-tools', fileName: 'app-chatgpt-cursor' },
  'app-operator': { category: 'chat-tools', fileName: 'app-operator' },
  'aspect-ratio-1-1': { category: 'chat-tools', fileName: 'aspect-ratio-1-1' },
  'aspect-ratio-16-9': { category: 'chat-tools', fileName: 'aspect-ratio-16-9' },
  'aspect-ratio-16-9-1': { category: 'chat-tools', fileName: 'aspect-ratio-16-9-1' },
  'aspect-ratio-3-4': { category: 'chat-tools', fileName: 'aspect-ratio-3-4' },
  'aspect-ratio-4-3': { category: 'chat-tools', fileName: 'aspect-ratio-4-3' },
  'aspect-ratio-9-16': { category: 'chat-tools', fileName: 'aspect-ratio-9-16' },
  'back-10s': { category: 'chat-tools', fileName: 'back-10s' },
  'back-15s': { category: 'chat-tools', fileName: 'back-15s' },
  'camera-filled-photo': { category: 'chat-tools', fileName: 'camera-filled-photo' },
  'camera-photo': { category: 'chat-tools', fileName: 'camera-photo' },
  'caption-cc-off': { category: 'chat-tools', fileName: 'caption-cc-off' },
  'caption-cc-on': { category: 'chat-tools', fileName: 'caption-cc-on' },
  'caption-off': { category: 'chat-tools', fileName: 'caption-off' },
  'caption-on': { category: 'chat-tools', fileName: 'caption-on' },
  cleanup: { category: 'chat-tools', fileName: 'cleanup' },
  'clipboard-copy': { category: 'chat-tools', fileName: 'clipboard-copy' },
  'code-square-slash': { category: 'chat-tools', fileName: 'code-square-slash' },
  complete: { category: 'chat-tools', fileName: 'complete' },
  'compose-canvas-edit-star': { category: 'chat-tools', fileName: 'compose-canvas-edit-star' },
  'compose-dashed-temporary': { category: 'chat-tools', fileName: 'compose-dashed-temporary' },
  'compose-edit-square': { category: 'chat-tools', fileName: 'compose-edit-square' },
  'confetti-party': { category: 'chat-tools', fileName: 'confetti-party' },
  copy: { category: 'chat-tools', fileName: 'copy' },
  download: { category: 'chat-tools', fileName: 'download' },
  'download-simple': { category: 'chat-tools', fileName: 'download-simple' },
  'edit-dalle-image': { category: 'chat-tools', fileName: 'edit-dalle-image' },
  'edit-pencil': { category: 'chat-tools', fileName: 'edit-pencil' },
  'emoji-add': { category: 'chat-tools', fileName: 'emoji-add' },
  'emoji-lists': { category: 'chat-tools', fileName: 'emoji-lists' },
  'emoji-remove': { category: 'chat-tools', fileName: 'emoji-remove' },
  'emoji-sections': { category: 'chat-tools', fileName: 'emoji-sections' },
  'emoji-words': { category: 'chat-tools', fileName: 'emoji-words' },
  error: { category: 'chat-tools', fileName: 'error' },
  'folder-documents-finder': { category: 'chat-tools', fileName: 'folder-documents-finder' },
  'folder-open': { category: 'chat-tools', fileName: 'folder-open' },
  'folder-plus-add': { category: 'chat-tools', fileName: 'folder-plus-add' },
  'folder-shared': { category: 'chat-tools', fileName: 'folder-shared' },
  'folder-shared-open': { category: 'chat-tools', fileName: 'folder-shared-open' },
  'folder-stuffed': { category: 'chat-tools', fileName: 'folder-stuffed' },
  'folder-unshare': { category: 'chat-tools', fileName: 'folder-unshare' },
  folders: { category: 'chat-tools', fileName: 'folders' },
  'forward-10s': { category: 'chat-tools', fileName: 'forward-10s' },
  'forward-15s': { category: 'chat-tools', fileName: 'forward-15s' },
  'graduation-cap': { category: 'chat-tools', fileName: 'graduation-cap' },
  headphones: { category: 'chat-tools', fileName: 'headphones' },
  'image-square-picture-library': {
    category: 'chat-tools',
    fileName: 'image-square-picture-library',
  },
  'image-wide-filled': { category: 'chat-tools', fileName: 'image-wide-filled' },
  'image-wide-picture-library': { category: 'chat-tools', fileName: 'image-wide-picture-library' },
  inpaint: { category: 'chat-tools', fileName: 'inpaint' },
  'inpaint-respond': { category: 'chat-tools', fileName: 'inpaint-respond' },
  'link-external-website': { category: 'chat-tools', fileName: 'link-external-website' },
  'memory-filled-sm': { category: 'chat-tools', fileName: 'memory-filled-sm' },
  'memory-off-remember': { category: 'chat-tools', fileName: 'memory-off-remember' },
  'memory-on-remember': { category: 'chat-tools', fileName: 'memory-on-remember' },
  mic: { category: 'chat-tools', fileName: 'mic' },
  'mic-filled': { category: 'chat-tools', fileName: 'mic-filled' },
  'mic-filled-off': { category: 'chat-tools', fileName: 'mic-filled-off' },
  'mic-lg-dictate': { category: 'chat-tools', fileName: 'mic-lg-dictate' },
  'mic-off': { category: 'chat-tools', fileName: 'mic-off' },
  'notification-bell': { category: 'chat-tools', fileName: 'notification-bell' },
  'notification-off-bell': { category: 'chat-tools', fileName: 'notification-off-bell' },
  'paperclip-attach': { category: 'chat-tools', fileName: 'paperclip-attach' },
  pause: { category: 'chat-tools', fileName: 'pause' },
  'pause-circle-filled': { category: 'chat-tools', fileName: 'pause-circle-filled' },
  'pause-sm': { category: 'chat-tools', fileName: 'pause-sm' },
  play: { category: 'chat-tools', fileName: 'play' },
  'play-circle-filled': { category: 'chat-tools', fileName: 'play-circle-filled' },
  'play-sm': { category: 'chat-tools', fileName: 'play-sm' },
  'plugin-puzzle': { category: 'chat-tools', fileName: 'plugin-puzzle' },
  pulse: { category: 'chat-tools', fileName: 'pulse' },
  'quote-reply-filled-quote-xs': {
    category: 'chat-tools',
    fileName: 'quote-reply-filled-quote-xs',
  },
  'reading-level': { category: 'chat-tools', fileName: 'reading-level' },
  'remove-forever-permanently': { category: 'chat-tools', fileName: 'remove-forever-permanently' },
  'restore-untrash': { category: 'chat-tools', fileName: 'restore-untrash' },
  'select-text': { category: 'chat-tools', fileName: 'select-text' },
  share: { category: 'chat-tools', fileName: 'share' },
  'share-android': { category: 'chat-tools', fileName: 'share-android' },
  'share-screen': { category: 'chat-tools', fileName: 'share-screen' },
  'share-screen-1': { category: 'chat-tools', fileName: 'share-screen-1' },
  'share-screen-filled': { category: 'chat-tools', fileName: 'share-screen-filled' },
  'share-screen-filled-1': { category: 'chat-tools', fileName: 'share-screen-filled-1' },
  'share-screen-off': { category: 'chat-tools', fileName: 'share-screen-off' },
  'share-screen-off-filled': { category: 'chat-tools', fileName: 'share-screen-off-filled' },
  skip: { category: 'chat-tools', fileName: 'skip' },
  'sound-off-simple-mute': { category: 'chat-tools', fileName: 'sound-off-simple-mute' },
  'sound-off-speaker': { category: 'chat-tools', fileName: 'sound-off-speaker' },
  'sound-on-read-out-loud-speaker': {
    category: 'chat-tools',
    fileName: 'sound-on-read-out-loud-speaker',
  },
  speak: { category: 'chat-tools', fileName: 'speak' },
  star: { category: 'chat-tools', fileName: 'star' },
  'star-filled': { category: 'chat-tools', fileName: 'star-filled' },
  stop: { category: 'chat-tools', fileName: 'stop' },
  'stop-circle-filled': { category: 'chat-tools', fileName: 'stop-circle-filled' },
  'stop-sm': { category: 'chat-tools', fileName: 'stop-sm' },
  tasks: { category: 'chat-tools', fileName: 'tasks' },
  'text-longer': { category: 'chat-tools', fileName: 'text-longer' },
  'text-shorter': { category: 'chat-tools', fileName: 'text-shorter' },
  'thumb-down': { category: 'chat-tools', fileName: 'thumb-down' },
  'thumb-down-filled': { category: 'chat-tools', fileName: 'thumb-down-filled' },
  'thumb-mixed': { category: 'chat-tools', fileName: 'thumb-mixed' },
  'thumb-up': { category: 'chat-tools', fileName: 'thumb-up' },
  'thumb-up-filled': { category: 'chat-tools', fileName: 'thumb-up-filled' },
  'trash-remove': { category: 'chat-tools', fileName: 'trash-remove' },
  'upload-documents': { category: 'chat-tools', fileName: 'upload-documents' },
  video: { category: 'chat-tools', fileName: 'video' },
  'video-filled': { category: 'chat-tools', fileName: 'video-filled' },
  'video-filled-off': { category: 'chat-tools', fileName: 'video-filled-off' },
  'voice-4-bars': { category: 'chat-tools', fileName: 'voice-4-bars' },
  'voice-5-bars-soundwave': { category: 'chat-tools', fileName: 'voice-5-bars-soundwave' },
  'voice-bold': { category: 'chat-tools', fileName: 'voice-bold' },
  'voice-input': { category: 'chat-tools', fileName: 'voice-input' },
  'close-bold': { category: 'interface', fileName: 'close-bold' },
  'dots-horizontal-more-menu': { category: 'interface', fileName: 'dots-horizontal-more-menu' },
  'dots-vertical-more-menu': { category: 'interface', fileName: 'dots-vertical-more-menu' },
  'enter-login': { category: 'interface', fileName: 'enter-login' },
  equal: { category: 'interface', fileName: 'equal' },
  'exit-logout': { category: 'interface', fileName: 'exit-logout' },
  link: { category: 'interface', fileName: 'link' },
  'link-disabled-bold': { category: 'interface', fileName: 'link-disabled-bold' },
  'magnifying-glass-sm-search': { category: 'interface', fileName: 'magnifying-glass-sm-search' },
  'menu-sidebar': { category: 'interface', fileName: 'menu-sidebar' },
  minus: { category: 'interface', fileName: 'minus' },
  'more-circle-menu-dots': { category: 'interface', fileName: 'more-circle-menu-dots' },
  'picture-in-picture': { category: 'interface', fileName: 'picture-in-picture' },
  'plus-add-lg': { category: 'interface', fileName: 'plus-add-lg' },
  'plus-add-md': { category: 'interface', fileName: 'plus-add-md' },
  'plus-add-sm': { category: 'interface', fileName: 'plus-add-sm' },
  'plus-circle-add': { category: 'interface', fileName: 'plus-circle-add' },
  'plus-composer': { category: 'interface', fileName: 'plus-composer' },
  'plus-square-add': { category: 'interface', fileName: 'plus-square-add' },
  'product-tag': { category: 'interface', fileName: 'product-tag' },
  search: { category: 'interface', fileName: 'search' },
  sidebar: { category: 'interface', fileName: 'sidebar' },
  'sidebar-badge': { category: 'interface', fileName: 'sidebar-badge' },
  'sidebar-menu-mobile': { category: 'interface', fileName: 'sidebar-menu-mobile' },
  'sidebar-menu-mobile-badge-cutout': {
    category: 'interface',
    fileName: 'sidebar-menu-mobile-badge-cutout',
  },
  unlink: { category: 'interface', fileName: 'unlink' },
  'x-circle-crossed-close': { category: 'interface', fileName: 'x-circle-crossed-close' },
  'x-circle-filled-crossed-close': {
    category: 'interface',
    fileName: 'x-circle-filled-crossed-close',
  },
  'x-crossed': { category: 'interface', fileName: 'x-crossed' },
  'x-square-crossed': { category: 'interface', fileName: 'x-square-crossed' },
  'x-square-filled-crossed': { category: 'interface', fileName: 'x-square-filled-crossed' },
  'x-xs-crossed': { category: 'interface', fileName: 'x-xs-crossed' },
  'agent-mode': { category: 'misc', fileName: 'agent-mode' },
  analytics: { category: 'misc', fileName: 'analytics' },
  'analyze-data': { category: 'misc', fileName: 'analyze-data' },
  archive: { category: 'misc', fileName: 'archive' },
  'balancing-scale': { category: 'misc', fileName: 'balancing-scale' },
  'bar-chart': { category: 'misc', fileName: 'bar-chart' },
  book: { category: 'misc', fileName: 'book' },
  'book-bookmark': { category: 'misc', fileName: 'book-bookmark' },
  'book-clock': { category: 'misc', fileName: 'book-clock' },
  'book-wrench': { category: 'misc', fileName: 'book-wrench' },
  brain: { category: 'misc', fileName: 'brain' },
  'calendar-today': { category: 'misc', fileName: 'calendar-today' },
  chat: { category: 'misc', fileName: 'chat' },
  'chat-compose': { category: 'misc', fileName: 'chat-compose' },
  'chat-dashed-checked-temp': { category: 'misc', fileName: 'chat-dashed-checked-temp' },
  'chat-dashed-temp': { category: 'misc', fileName: 'chat-dashed-temp' },
  'chat-triple-dots': { category: 'misc', fileName: 'chat-triple-dots' },
  chats: { category: 'misc', fileName: 'chats' },
  clock: { category: 'misc', fileName: 'clock' },
  'clock-off': { category: 'misc', fileName: 'clock-off' },
  comment: { category: 'misc', fileName: 'comment' },
  compass: { category: 'misc', fileName: 'compass' },
  'credit-card': { category: 'misc', fileName: 'credit-card' },
  'deep-search-telescope': { category: 'misc', fileName: 'deep-search-telescope' },
  'dice-randomize': { category: 'misc', fileName: 'dice-randomize' },
  'dining-events': { category: 'misc', fileName: 'dining-events' },
  'dollar-circle': { category: 'misc', fileName: 'dollar-circle' },
  dumbbell: { category: 'misc', fileName: 'dumbbell' },
  'earth-travel-world': { category: 'misc', fileName: 'earth-travel-world' },
  email: { category: 'misc', fileName: 'email' },
  'file-presentation': { category: 'misc', fileName: 'file-presentation' },
  flag: { category: 'misc', fileName: 'flag' },
  flask: { category: 'misc', fileName: 'flask' },
  'flask-filled': { category: 'misc', fileName: 'flask-filled' },
  followup: { category: 'misc', fileName: 'followup' },
  function: { category: 'misc', fileName: 'function' },
  glasses: { category: 'misc', fileName: 'glasses' },
  'globe-alt-real-time-search': { category: 'misc', fileName: 'globe-alt-real-time-search' },
  'globe-filled': { category: 'misc', fileName: 'globe-filled' },
  'globe-off-real-time-search': { category: 'misc', fileName: 'globe-off-real-time-search' },
  'globe-real-time-search': { category: 'misc', fileName: 'globe-real-time-search' },
  'globe-spin': { category: 'misc', fileName: 'globe-spin' },
  health: { category: 'misc', fileName: 'health' },
  'history-off': { category: 'misc', fileName: 'history-off' },
  'history-on': { category: 'misc', fileName: 'history-on' },
  'image-caption': { category: 'misc', fileName: 'image-caption' },
  images: { category: 'misc', fileName: 'images' },
  'internal-knowledge': { category: 'misc', fileName: 'internal-knowledge' },
  'internal-knowledge-optimized-for-circle': {
    category: 'misc',
    fileName: 'internal-knowledge-optimized-for-circle',
  },
  invoice: { category: 'misc', fileName: 'invoice' },
  kettlebell: { category: 'misc', fileName: 'kettlebell' },
  'local-services': { category: 'misc', fileName: 'local-services' },
  lotus: { category: 'misc', fileName: 'lotus' },
  love: { category: 'misc', fileName: 'love' },
  'manage-history': { category: 'misc', fileName: 'manage-history' },
  maps: { category: 'misc', fileName: 'maps' },
  'maps-address': { category: 'misc', fileName: 'maps-address' },
  'maps-directions': { category: 'misc', fileName: 'maps-directions' },
  'marker-code': { category: 'misc', fileName: 'marker-code' },
  'marker-data': { category: 'misc', fileName: 'marker-data' },
  'marker-multiple': { category: 'misc', fileName: 'marker-multiple' },
  'marker-quote': { category: 'misc', fileName: 'marker-quote' },
  messaging: { category: 'misc', fileName: 'messaging' },
  music: { category: 'misc', fileName: 'music' },
  'news-paper': { category: 'misc', fileName: 'news-paper' },
  'notebook-check': { category: 'misc', fileName: 'notebook-check' },
  'notebook-narrow': { category: 'misc', fileName: 'notebook-narrow' },
  notepad: { category: 'misc', fileName: 'notepad' },
  operator: { category: 'misc', fileName: 'operator' },
  order: { category: 'misc', fileName: 'order' },
  paid: { category: 'misc', fileName: 'paid' },
  'pasted-text': { category: 'misc', fileName: 'pasted-text' },
  paw: { category: 'misc', fileName: 'paw' },
  pens: { category: 'misc', fileName: 'pens' },
  phone: { category: 'misc', fileName: 'phone' },
  'phone-missed': { category: 'misc', fileName: 'phone-missed' },
  'phone-ring': { category: 'misc', fileName: 'phone-ring' },
  'phone-waves': { category: 'misc', fileName: 'phone-waves' },
  pin: { category: 'misc', fileName: 'pin' },
  'pin-filled': { category: 'misc', fileName: 'pin-filled' },
  plane: { category: 'misc', fileName: 'plane' },
  record: { category: 'misc', fileName: 'record' },
  'shopping-bag': { category: 'misc', fileName: 'shopping-bag' },
  'speedometer-latency-speed': { category: 'misc', fileName: 'speedometer-latency-speed' },
  stethoscope: { category: 'misc', fileName: 'stethoscope' },
  'stuff-tools': { category: 'misc', fileName: 'stuff-tools' },
  'tools-skills': { category: 'misc', fileName: 'tools-skills' },
  trending: { category: 'misc', fileName: 'trending' },
  unarchive: { category: 'misc', fileName: 'unarchive' },
  unpin: { category: 'misc', fileName: 'unpin' },
  whisk: { category: 'misc', fileName: 'whisk' },
  'work-with-apps': { category: 'misc', fileName: 'work-with-apps' },
  writing: { category: 'misc', fileName: 'writing' },
  agent: { category: 'platform', fileName: 'agent' },
  'api-key': { category: 'platform', fileName: 'api-key' },
  'api-key-admin': { category: 'platform', fileName: 'api-key-admin' },
  'api-key-plus-add': { category: 'platform', fileName: 'api-key-plus-add' },
  'api-key-service-account': { category: 'platform', fileName: 'api-key-service-account' },
  'api-keys': { category: 'platform', fileName: 'api-keys' },
  batches: { category: 'platform', fileName: 'batches' },
  category: { category: 'platform', fileName: 'category' },
  'gpt-placeholder': { category: 'platform', fileName: 'gpt-placeholder' },
  'map-pin': { category: 'platform', fileName: 'map-pin' },
  notebook: { category: 'platform', fileName: 'notebook' },
  'platform-function': { category: 'platform', fileName: 'platform-function' },
  playground: { category: 'platform', fileName: 'playground' },
  'robot-head': { category: 'platform', fileName: 'robot-head' },
  'robot-head-sad': { category: 'platform', fileName: 'robot-head-sad' },
  snorkel: { category: 'platform', fileName: 'snorkel' },
  'speech-to-text': { category: 'platform', fileName: 'speech-to-text' },
  stack: { category: 'platform', fileName: 'stack' },
  status: { category: 'platform', fileName: 'status' },
  storage: { category: 'platform', fileName: 'storage' },
  terminal: { category: 'platform', fileName: 'terminal' },
  'terminal-lg': { category: 'platform', fileName: 'terminal-lg' },
  'text-to-speech': { category: 'platform', fileName: 'text-to-speech' },
  'add-sources': { category: 'settings', fileName: 'add-sources' },
  'app-permission': { category: 'settings', fileName: 'app-permission' },
  'app-store': { category: 'settings', fileName: 'app-store' },
  'app-store-square': { category: 'settings', fileName: 'app-store-square' },
  'auto-pair-apps': { category: 'settings', fileName: 'auto-pair-apps' },
  'auto-suggested-edits': { category: 'settings', fileName: 'auto-suggested-edits' },
  autocomplete: { category: 'settings', fileName: 'autocomplete' },
  'back-to-app': { category: 'settings', fileName: 'back-to-app' },
  'background-conversation': { category: 'settings', fileName: 'background-conversation' },
  bug: { category: 'settings', fileName: 'bug' },
  'check-circle': { category: 'settings', fileName: 'check-circle' },
  'check-circle-dashed': { category: 'settings', fileName: 'check-circle-dashed' },
  'check-circle-filled': { category: 'settings', fileName: 'check-circle-filled' },
  'check-lg': { category: 'settings', fileName: 'check-lg' },
  'check-md': { category: 'settings', fileName: 'check-md' },
  'checkbox-checked': { category: 'settings', fileName: 'checkbox-checked' },
  'checkbox-checked-filled': { category: 'settings', fileName: 'checkbox-checked-filled' },
  'checkbox-unchecked': { category: 'settings', fileName: 'checkbox-unchecked' },
  click: { category: 'settings', fileName: 'click' },
  'color-theme': { category: 'settings', fileName: 'color-theme' },
  'connect-apps': { category: 'settings', fileName: 'connect-apps' },
  'connectors-connected-apps': { category: 'settings', fileName: 'connectors-connected-apps' },
  'data-controls': { category: 'settings', fileName: 'data-controls' },
  desktop: { category: 'settings', fileName: 'desktop' },
  'disabled-cursor': { category: 'settings', fileName: 'disabled-cursor' },
  dock: { category: 'settings', fileName: 'dock' },
  'empty-circle': { category: 'settings', fileName: 'empty-circle' },
  'exclamation-mark-circle': { category: 'settings', fileName: 'exclamation-mark-circle' },
  eye: { category: 'settings', fileName: 'eye' },
  'eye-off': { category: 'settings', fileName: 'eye-off' },
  filter: { category: 'settings', fileName: 'filter' },
  frozen: { category: 'settings', fileName: 'frozen' },
  'generate-suggested-edits': { category: 'settings', fileName: 'generate-suggested-edits' },
  'haptic-feedback': { category: 'settings', fileName: 'haptic-feedback' },
  help: { category: 'settings', fileName: 'help' },
  'info-circle': { category: 'settings', fileName: 'info-circle' },
  interactive: { category: 'settings', fileName: 'interactive' },
  'keyboard-shortcut': { category: 'settings', fileName: 'keyboard-shortcut' },
  'lightbulb-20': { category: 'settings', fileName: 'lightbulb-20' },
  'lightbulb-22': { category: 'settings', fileName: 'lightbulb-22' },
  'lightbulb-22-filled': { category: 'settings', fileName: 'lightbulb-22-filled' },
  'lightbulb-glow': { category: 'settings', fileName: 'lightbulb-glow' },
  'lock-key-hole': { category: 'settings', fileName: 'lock-key-hole' },
  'macbook-download': { category: 'settings', fileName: 'macbook-download' },
  menubar: { category: 'settings', fileName: 'menubar' },
  moon: { category: 'settings', fileName: 'moon' },
  'moon-sun-system': { category: 'settings', fileName: 'moon-sun-system' },
  'no-training': { category: 'settings', fileName: 'no-training' },
  'parent-control': { category: 'settings', fileName: 'parent-control' },
  'pin-window': { category: 'settings', fileName: 'pin-window' },
  'pop-out-window': { category: 'settings', fileName: 'pop-out-window' },
  'question-mark': { category: 'settings', fileName: 'question-mark' },
  'question-mark-circle': { category: 'settings', fileName: 'question-mark-circle' },
  'radio-selected': { category: 'settings', fileName: 'radio-selected' },
  'remove-red-eye': { category: 'settings', fileName: 'remove-red-eye' },
  'reset-chat': { category: 'settings', fileName: 'reset-chat' },
  'screen-position': { category: 'settings', fileName: 'screen-position' },
  'search-connector': { category: 'settings', fileName: 'search-connector' },
  'settings-cog': { category: 'settings', fileName: 'settings-cog' },
  'settings-slider': { category: 'settings', fileName: 'settings-slider' },
  'settings-wrench': { category: 'settings', fileName: 'settings-wrench' },
  'shield-lock': { category: 'settings', fileName: 'shield-lock' },
  shortcuts: { category: 'settings', fileName: 'shortcuts' },
  spelling: { category: 'settings', fileName: 'spelling' },
  stopwatch: { category: 'settings', fileName: 'stopwatch' },
  'suggest-edit': { category: 'settings', fileName: 'suggest-edit' },
  sun: { category: 'settings', fileName: 'sun' },
  tap: { category: 'settings', fileName: 'tap' },
  translate: { category: 'settings', fileName: 'translate' },
  'triangle-exclamation-error-warning': {
    category: 'settings',
    fileName: 'triangle-exclamation-error-warning',
  },
  'triangle-exclamation-filled-error-warning': {
    category: 'settings',
    fileName: 'triangle-exclamation-filled-error-warning',
  },
  'tuning-fork': { category: 'settings', fileName: 'tuning-fork' },
  upgrade: { category: 'settings', fileName: 'upgrade' },
  'warning-filled-wrap-centered-for-circle': {
    category: 'settings',
    fileName: 'warning-filled-wrap-centered-for-circle',
  },
  'warning-wrap-centered-for-circle': {
    category: 'settings',
    fileName: 'warning-wrap-centered-for-circle',
  },
  'whisper-auto-submit': { category: 'settings', fileName: 'whisper-auto-submit' },
} as const satisfies Record<IconName, { category: IconCategory; fileName: string }>;

/**
 * Icon registry - maps category names to arrays of available icon names
 * Category -> Icon Name[]
 */
export const icons = {
  'account-user': [
    'add-member',
    'astronaut',
    'avatar-filled-profile',
    'avatar-profile',
    'builder-profile-card',
    'building-workspace',
    'delete-account',
    'fist-bump',
    'go',
    'go-filled',
    'group',
    'group-filled',
    'groups',
    'hand-peace',
    'hand-raised-hey',
    'hand-waving-bye',
    'identity-me-secure',
    'members',
    'members-filled',
    'my-gpt-profile-me',
    'plant-desk',
    'plus',
    'plus-filled',
    'privacy-intern',
    'pro-diamond',
    'pro-filled-diamond',
    'simple-relax',
    'simple-sad',
    'simple-smile',
    'sleep',
    'suitcase-filled-work-business',
    'suitcase-work-business',
    'upgrade-plan',
    'user',
    'user-add',
    'user-gpts',
    'user-heart',
    'user-lock',
    'user-voice',
    'wreath',
  ],
  arrows: [
    'arrow-bottom-left-sm',
    'arrow-bottom-right-sm',
    'arrow-curved-left',
    'arrow-curved-right',
    'arrow-curved-right-xs',
    'arrow-down-lg',
    'arrow-down-sm',
    'arrow-left-lg',
    'arrow-left-sm',
    'arrow-right-lg',
    'arrow-right-sm',
    'arrow-rotate-ccw',
    'arrow-rotate-cw',
    'arrow-top-left-sm',
    'arrow-top-right-sm',
    'arrow-up-lg',
    'arrow-up-sm',
    'chevron-down-lg',
    'chevron-down-md',
    'chevron-down-up',
    'chevron-left-lg',
    'chevron-left-md',
    'chevron-right-lg',
    'chevron-right-md',
    'chevron-up-down',
    'chevron-up-lg',
    'chevron-up-md',
    'collapse-lg',
    'collapse-sm',
    'expand-lg',
    'expand-md',
    'expand-sm',
    'redo',
    'regenerate',
    'regenerate-off',
    'regenerate-star',
    'reply',
    'shuffle',
    'undo',
  ],
  'chat-tools': [
    'all-gizmos',
    'all-products-explore',
    'app-chatgpt-cursor',
    'app-operator',
    'aspect-ratio-1-1',
    'aspect-ratio-16-9',
    'aspect-ratio-16-9-1',
    'aspect-ratio-3-4',
    'aspect-ratio-4-3',
    'aspect-ratio-9-16',
    'back-10s',
    'back-15s',
    'camera-filled-photo',
    'camera-photo',
    'caption-cc-off',
    'caption-cc-on',
    'caption-off',
    'caption-on',
    'cleanup',
    'clipboard-copy',
    'code-square-slash',
    'complete',
    'compose-canvas-edit-star',
    'compose-dashed-temporary',
    'compose-edit-square',
    'confetti-party',
    'copy',
    'download',
    'download-simple',
    'edit-dalle-image',
    'edit-pencil',
    'emoji-add',
    'emoji-lists',
    'emoji-remove',
    'emoji-sections',
    'emoji-words',
    'error',
    'folder-documents-finder',
    'folder-open',
    'folder-plus-add',
    'folder-shared',
    'folder-shared-open',
    'folder-stuffed',
    'folder-unshare',
    'folders',
    'forward-10s',
    'forward-15s',
    'graduation-cap',
    'headphones',
    'image-square-picture-library',
    'image-wide-filled',
    'image-wide-picture-library',
    'inpaint',
    'inpaint-respond',
    'link-external-website',
    'memory-filled-sm',
    'memory-off-remember',
    'memory-on-remember',
    'mic',
    'mic-filled',
    'mic-filled-off',
    'mic-lg-dictate',
    'mic-off',
    'notification-bell',
    'notification-off-bell',
    'paperclip-attach',
    'pause',
    'pause-circle-filled',
    'pause-sm',
    'play',
    'play-circle-filled',
    'play-sm',
    'plugin-puzzle',
    'pulse',
    'quote-reply-filled-quote-xs',
    'reading-level',
    'remove-forever-permanently',
    'restore-untrash',
    'select-text',
    'share',
    'share-android',
    'share-screen',
    'share-screen-1',
    'share-screen-filled',
    'share-screen-filled-1',
    'share-screen-off',
    'share-screen-off-filled',
    'skip',
    'sound-off-simple-mute',
    'sound-off-speaker',
    'sound-on-read-out-loud-speaker',
    'speak',
    'star',
    'star-filled',
    'stop',
    'stop-circle-filled',
    'stop-sm',
    'tasks',
    'text-longer',
    'text-shorter',
    'thumb-down',
    'thumb-down-filled',
    'thumb-mixed',
    'thumb-up',
    'thumb-up-filled',
    'trash-remove',
    'upload-documents',
    'video',
    'video-filled',
    'video-filled-off',
    'voice-4-bars',
    'voice-5-bars-soundwave',
    'voice-bold',
    'voice-input',
  ],
  interface: [
    'close-bold',
    'dots-horizontal-more-menu',
    'dots-vertical-more-menu',
    'enter-login',
    'equal',
    'exit-logout',
    'link',
    'link-disabled-bold',
    'magnifying-glass-sm-search',
    'menu-sidebar',
    'minus',
    'more-circle-menu-dots',
    'picture-in-picture',
    'plus-add-lg',
    'plus-add-md',
    'plus-add-sm',
    'plus-circle-add',
    'plus-composer',
    'plus-square-add',
    'product-tag',
    'search',
    'sidebar',
    'sidebar-badge',
    'sidebar-menu-mobile',
    'sidebar-menu-mobile-badge-cutout',
    'unlink',
    'x-circle-crossed-close',
    'x-circle-filled-crossed-close',
    'x-crossed',
    'x-square-crossed',
    'x-square-filled-crossed',
    'x-xs-crossed',
  ],
  misc: [
    'agent-mode',
    'analytics',
    'analyze-data',
    'archive',
    'balancing-scale',
    'bar-chart',
    'book',
    'book-bookmark',
    'book-clock',
    'book-wrench',
    'brain',
    'calendar-today',
    'chat',
    'chat-compose',
    'chat-dashed-checked-temp',
    'chat-dashed-temp',
    'chat-triple-dots',
    'chats',
    'clock',
    'clock-off',
    'comment',
    'compass',
    'credit-card',
    'deep-search-telescope',
    'dice-randomize',
    'dining-events',
    'dollar-circle',
    'dumbbell',
    'earth-travel-world',
    'email',
    'file-presentation',
    'flag',
    'flask',
    'flask-filled',
    'followup',
    'function',
    'glasses',
    'globe-alt-real-time-search',
    'globe-filled',
    'globe-off-real-time-search',
    'globe-real-time-search',
    'globe-spin',
    'health',
    'history-off',
    'history-on',
    'image-caption',
    'images',
    'internal-knowledge',
    'internal-knowledge-optimized-for-circle',
    'invoice',
    'kettlebell',
    'local-services',
    'lotus',
    'love',
    'manage-history',
    'maps',
    'maps-address',
    'maps-directions',
    'marker-code',
    'marker-data',
    'marker-multiple',
    'marker-quote',
    'messaging',
    'music',
    'news-paper',
    'notebook-check',
    'notebook-narrow',
    'notepad',
    'operator',
    'order',
    'paid',
    'pasted-text',
    'paw',
    'pens',
    'phone',
    'phone-missed',
    'phone-ring',
    'phone-waves',
    'pin',
    'pin-filled',
    'plane',
    'record',
    'shopping-bag',
    'speedometer-latency-speed',
    'stethoscope',
    'stuff-tools',
    'tools-skills',
    'trending',
    'unarchive',
    'unpin',
    'whisk',
    'work-with-apps',
    'writing',
  ],
  platform: [
    'agent',
    'api-key',
    'api-key-admin',
    'api-key-plus-add',
    'api-key-service-account',
    'api-keys',
    'batches',
    'category',
    'gpt-placeholder',
    'map-pin',
    'notebook',
    'platform-function',
    'playground',
    'robot-head',
    'robot-head-sad',
    'snorkel',
    'speech-to-text',
    'stack',
    'status',
    'storage',
    'terminal',
    'terminal-lg',
    'text-to-speech',
  ],
  settings: [
    'add-sources',
    'app-permission',
    'app-store',
    'app-store-square',
    'auto-pair-apps',
    'auto-suggested-edits',
    'autocomplete',
    'back-to-app',
    'background-conversation',
    'bug',
    'check-circle',
    'check-circle-dashed',
    'check-circle-filled',
    'check-lg',
    'check-md',
    'checkbox-checked',
    'checkbox-checked-filled',
    'checkbox-unchecked',
    'click',
    'color-theme',
    'connect-apps',
    'connectors-connected-apps',
    'data-controls',
    'desktop',
    'disabled-cursor',
    'dock',
    'empty-circle',
    'exclamation-mark-circle',
    'eye',
    'eye-off',
    'filter',
    'frozen',
    'generate-suggested-edits',
    'haptic-feedback',
    'help',
    'info-circle',
    'interactive',
    'keyboard-shortcut',
    'lightbulb-20',
    'lightbulb-22',
    'lightbulb-22-filled',
    'lightbulb-glow',
    'lock-key-hole',
    'macbook-download',
    'menubar',
    'moon',
    'moon-sun-system',
    'no-training',
    'parent-control',
    'pin-window',
    'pop-out-window',
    'question-mark',
    'question-mark-circle',
    'radio-selected',
    'remove-red-eye',
    'reset-chat',
    'screen-position',
    'search-connector',
    'settings-cog',
    'settings-slider',
    'settings-wrench',
    'shield-lock',
    'shortcuts',
    'spelling',
    'stopwatch',
    'suggest-edit',
    'sun',
    'tap',
    'translate',
    'triangle-exclamation-error-warning',
    'triangle-exclamation-filled-error-warning',
    'tuning-fork',
    'upgrade',
    'warning-filled-wrap-centered-for-circle',
    'warning-wrap-centered-for-circle',
    'whisper-auto-submit',
  ],
} as const;
