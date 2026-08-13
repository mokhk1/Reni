import { Gift } from '@/data/birthday';

export type GiftState = 'locked' | 'question' | 'opened';

const THEME_BOX = {
  blush: {
    box: 'from-blush-100 to-blush-200',
    lid: 'from-blush-200 to-blush-300',
    ribbon: 'bg-blush-400',
    glow: 'shadow-glow',
    ring: 'ring-blush-200/60',
    text: 'text-blush-600',
  },
  lavender: {
    box: 'from-lavender-100 to-lavender-200',
    lid: 'from-lavender-200 to-lavender-300',
    ribbon: 'bg-lavender-400',
    glow: 'shadow-lavender',
    ring: 'ring-lavender-200/60',
    text: 'text-lavender-600',
  },
  matcha: {
    box: 'from-matcha-100 to-matcha-200',
    lid: 'from-matcha-200 to-matcha-300',
    ribbon: 'bg-matcha-500',
    glow: 'shadow-matcha',
    ring: 'ring-matcha-200/60',
    text: 'text-matcha-700',
  },
  mystery: {
    box: 'from-lavender-200 to-lavender-400',
    lid: 'from-lavender-300 to-lavender-500',
    ribbon: 'bg-gold-400',
    glow: 'shadow-lavender',
    ring: 'ring-lavender-300/70',
    text: 'text-lavender-600',
  },
} as const;

/**
 * The visual gift box used in the room grid and inside question screens.
 *
 * `opened` triggers the lid-open animation and reveals the emoji inside.
 */
export function GiftBox({
  gift,
  state,
  size = 'md',
  floating = true,
  onClick,
  showLabel = false,
}: {
  gift: Gift;
  state: GiftState;
  size?: 'sm' | 'md' | 'lg';
  floating?: boolean;
  onClick?: () => void;
  showLabel?: boolean;
}) {
  const t = THEME_BOX[gift.theme];
  const opened = state === 'opened';

  const boxSize = size === 'lg' ? 'w-40 h-40' : size === 'sm' ? 'w-20 h-20' : 'w-28 h-28';
  const lidSize = size === 'lg' ? 'h-12' : size === 'sm' ? 'h-6' : 'h-9';
  const emojiSize = size === 'lg' ? 'text-5xl' : size === 'sm' ? 'text-2xl' : 'text-3xl';

  const interactive = onClick !== undefined && state !== 'opened';

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={onClick}
        disabled={!interactive}
        aria-label={`هدية ${gift.id}`}
        className={`relative ${boxSize} ${floating && !opened ? 'animate-float' : ''} ${
          interactive ? 'cursor-pointer' : 'cursor-default'
        } transition-transform duration-300 ${interactive ? 'active:scale-95' : ''}`}
      >
        {/* glow */}
        <div
          className={`absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-700 ${
            opened ? 'opacity-80' : 'opacity-40'
          } bg-gradient-to-br ${t.box} ${t.glow}`}
          aria-hidden
        />

        {/* box body */}
        <div
          className={`absolute inset-x-0 bottom-0 ${boxSize} rounded-b-3xl rounded-t-md bg-gradient-to-br ${t.box} shadow-soft ring-1 ${t.ring} flex items-center justify-center overflow-hidden`}
        >
          {/* vertical ribbon */}
          <div className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1/4 ${t.ribbon}`} />
          {/* revealed emoji */}
          <span
            className={`relative z-10 ${emojiSize} transition-all duration-500 ${
              opened ? 'opacity-100 scale-100 animate-rise' : 'opacity-0 scale-50'
            }`}
          >
            {opened ? gift.emoji : '🔒'}
          </span>
          {!opened && (
            <span className={`relative z-10 ${emojiSize} opacity-90`}>{gift.emoji}</span>
          )}
        </div>

        {/* lid */}
        <div
          className={`absolute inset-x-0 top-0 ${lidSize} rounded-t-2xl rounded-b-sm bg-gradient-to-br ${t.lid} shadow-soft ${
            opened ? 'animate-lid-open' : ''
          }`}
        >
          {/* ribbon knot */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-0.5">
            <div className={`w-3 h-3 ${t.ribbon} rounded-full`} />
            <div className={`w-3 h-3 ${t.ribbon} rounded-full`} />
          </div>
          {/* horizontal ribbon */}
          <div className={`absolute top-1/2 left-0 right-0 h-1/3 ${t.ribbon} -translate-y-1/2`} />
        </div>

        {/* sparkle when locked */}
        {!opened && (
          <span
            className="absolute -top-1 -right-1 text-base animate-sparkle"
            aria-hidden
          >
            ✨
          </span>
        )}
      </button>

      {showLabel && (
        <div className="text-center">
          <p className={`font-arabic text-xs font-semibold ${t.text}`}>{gift.roomTitle}</p>
          {state === 'opened' && (
            <p className="font-arabic text-[10px] text-matcha-600 mt-0.5">✓ فُتحت</p>
          )}
        </div>
      )}
    </div>
  );
}
