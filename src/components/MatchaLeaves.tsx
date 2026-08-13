type MatchaLeavesProps = {
  count?: number;
  className?: string;
};

/** Floating matcha leaves drifting down — used on the matcha gift + final screen. */
export function MatchaLeaves({ count = 8, className = '' }: MatchaLeavesProps) {
  const leaves = Array.from({ length: count }).map((_, i) => {
    const seed = i * 5039 + 71;
    const rand = (n: number) => ((seed % n) + n) % n;
    return {
      id: i,
      left: rand(100),
      delay: rand(120) / 10,
      duration: 10 + rand(8),
      size: 14 + rand(12),
      emoji: i % 3 === 0 ? '🍵' : '🍃',
    };
  });

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {leaves.map((l) => (
        <span
          key={l.id}
          className="absolute -top-10 animate-drift-leaf"
          style={{
            left: `${l.left}%`,
            fontSize: `${l.size}px`,
            animationDelay: `${l.delay}s`,
            animationDuration: `${l.duration}s`,
          }}
        >
          {l.emoji}
        </span>
      ))}
    </div>
  );
}
