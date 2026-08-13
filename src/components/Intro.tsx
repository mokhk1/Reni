import { useEffect, useState } from 'react';
import { birthdayData } from '@/data/birthday';
import { StarField } from '@/components/StarField';

/**
 * Screen 1 — personalized intro.
 * Lines fade in one after another, then the CTA button + a floating gift box.
 */
export function Intro({ onStart }: { onStart: () => void }) {
  const { intro } = birthdayData;
  const [visible, setVisible] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (visible >= intro.lines.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), visible === 0 ? 500 : 1100);
    return () => clearTimeout(t);
  }, [visible, intro.lines.length]);

  const handleStart = () => {
    setLeaving(true);
    setTimeout(onStart, 600);
  };

  return (
    <section
      className={`relative min-h-[100dvh] flex flex-col items-center justify-center px-6 text-center transition-all duration-600 ${
        leaving ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100'
      }`}
    >
      {/* dreamy gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream-100 via-blush-50 to-lavender-50" />
      <StarField count={22} />

      {/* floating intro gift */}
      <div className="relative mb-10 animate-float-slow">
        <div className="absolute inset-0 -z-10 blur-3xl opacity-60 bg-gradient-to-br from-blush-200 to-lavender-200 rounded-full" />
        <div className="text-7xl select-none" aria-hidden>
          🎁
        </div>
        <span className="absolute -top-2 -right-3 text-xl animate-sparkle">✨</span>
        <span className="absolute -bottom-1 -left-3 text-lg animate-sparkle" style={{ animationDelay: '0.8s' }}>
          🍵
        </span>
      </div>

      {/* lines */}
      <div className="space-y-5 min-h-[15rem] flex flex-col justify-center">
        {intro.lines.map((line, i) => (
          <p
            key={i}
            className={`font-arabic text-2xl sm:text-3xl font-semibold text-ink-800 transition-all duration-700 ${
              i < visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } ${i === 0 ? 'text-3xl sm:text-4xl text-blush-500' : ''} ${
              i === intro.lines.length - 1 ? 'text-lavender-600' : ''
            }`}
          >
            {line}
          </p>
        ))}
      </div>

      {/* CTA */}
      <button
        type="button"
        onClick={handleStart}
        disabled={visible < intro.lines.length}
        className={`mt-12 px-10 py-4 rounded-full font-arabic text-lg font-semibold text-white bg-gradient-to-r from-blush-400 to-lavender-400 shadow-soft transition-all duration-500 ${
          visible >= intro.lines.length
            ? 'opacity-100 scale-100 animate-pulse-soft'
            : 'opacity-0 scale-90 pointer-events-none'
        } active:scale-95`}
      >
        {intro.cta}
      </button>

      <p className="mt-6 font-display italic text-ink-700/60 text-sm tracking-wide">
        made with 🤍 for Loly
      </p>
    </section>
  );
}
