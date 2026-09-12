import { useMemo } from 'react';

type StarFieldProps = {
  count?: number;
  className?: string;
  /** restrict emojis to a custom set */
  emojis?: string[];
  withLeaves?: boolean;
  withHearts?: boolean;
};

const DEFAULT_EMOJIS = ['✨', '⭐', '🎀', '💫', '🤍'];

/**
 * Soft floating background of sparkles, stars, tiny hearts and matcha leaves.
 * Positions are deterministic per-index so they don't jump on re-render.
 */
export function StarField({
  count = 18,
  className = '',
  emojis = DEFAULT_EMOJIS,
  withLeaves = true,
  withHearts = true,
}: StarFieldProps) {
  const items = useMemo(() => {
    const pool = [...emojis];
    if (withHearts) pool.push('🤍', '💗');
    if (withLeaves) pool.push('🍃', '🍵');
    return Array.from({ length: count }).map((_, i) => {
      const seed = i * 9301 + 49297;
      const rand = (n: number) => ((seed % n) + n) % n;
      return {
        id: i,
        left: rand(100),
        top: rand(100),
        size: 10 + rand(14),
        emoji: pool[rand(pool.length)],
        delay: (rand(40) / 10),
        duration: 3 + rand(4),
        opacity: 0.35 + (rand(50) / 100),
      };
    });
  }, [count, emojis, withLeaves, withHearts]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {items.map((s) => (
        <span
          key={s.id}
          className="absolute select-none animate-twinkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            fontSize: `${s.size}px`,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        >
          {s.emoji}
        </span>
      ))}
    </div>
  );
}
