import { useEffect, useMemo, useRef, useState } from 'react';

type Particle = {
  id: number;
  x: number; // 0..1
  y: number; // 0..1
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotate: number;
  vrotate: number;
  emoji?: string;
};

const COLORS = ['#ffd3dc', '#ffb3c1', '#cdb6ff', '#e3d7ff', '#b5d67e', '#f0d98c', '#fff'];

/**
 * Elegant confetti burst — soft circles, squares and a few sparkle emojis.
 * Uses requestAnimationFrame for smooth, low-overhead motion.
 */
export function Confetti({
  active,
  count = 40,
  duration = 2200,
  onDone,
}: {
  active: boolean;
  count?: number;
  duration?: number;
  onDone?: () => void;
}) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const raf = useRef<number | null>(null);
  const start = useRef<number>(0);

  const initial = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
      const speed = 0.25 + Math.random() * 0.45;
      return {
        id: i,
        x: 0.5,
        y: 0.5,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.3,
        size: 6 + Math.random() * 8,
        color: COLORS[i % COLORS.length],
        rotate: Math.random() * 360,
        vrotate: (Math.random() - 0.5) * 12,
        emoji: Math.random() < 0.15 ? '✨' : undefined,
      };
    });
  }, [count]);

  useEffect(() => {
    if (!active) return;
    setParticles(initial);
    start.current = performance.now();

    const tick = (now: number) => {
      const t = now - start.current;
      const progress = t / duration;
      if (progress >= 1) {
        setParticles([]);
        onDone?.();
        return;
      }
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          x: p.x + p.vx * 0.016,
          y: p.y + p.vy * 0.016 + progress * progress * 0.5,
          vy: p.vy + 0.02,
          rotate: p.rotate + p.vrotate,
        })),
      );
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [active, duration, initial, onDone]);

  if (!active || particles.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x * 100}%`,
            top: `${p.y * 100}%`,
            width: p.size,
            height: p.size,
            transform: `translate(-50%,-50%) rotate(${p.rotate}deg)`,
            opacity: Math.max(0, 1 - (performance.now() - start.current) / duration),
          }}
        >
          {p.emoji ? (
            <span style={{ fontSize: p.size + 6 }}>{p.emoji}</span>
          ) : (
            <span
              className="block rounded-full"
              style={{ width: p.size, height: p.size, background: p.color }}
            />
          )}
        </span>
      ))}
    </div>
  );
}
