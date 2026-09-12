import { useEffect, useState } from 'react';
import { birthdayData } from '@/data/birthday';
import { StarField } from '@/components/StarField';
import { MatchaLeaves } from '@/components/MatchaLeaves';
import { Confetti } from '@/components/Confetti';

/**
 * Final screen — revealed after all 4 gifts are opened.
 * Bridges fade in sequentially, then the main message, then replay controls.
 */
export function FinalScreen({ onReplay }: { onReplay: () => void }) {
  const { final } = birthdayData;
  const [step, setStep] = useState(0);
  const [burst, setBurst] = useState(false);

  // step 0: bridge1, 1: bridge2, 2: main reveal + message
  useEffect(() => {
    if (step >= 2) return;
    const t = setTimeout(() => setStep((s) => s + 1), step === 0 ? 1600 : 1400);
    return () => clearTimeout(t);
  }, [step]);

  useEffect(() => {
    if (step === 2) {
      const t = setTimeout(() => setBurst(true), 400);
      return () => clearTimeout(t);
    }
  }, [step]);

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6 py-12 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-lavender-100 via-blush-50 to-matcha-50" />
      <StarField count={26} />
      <MatchaLeaves count={5} />
      <Confetti active={burst} count={50} duration={2800} onDone={() => setBurst(false)} />

      {/* bridge lines */}
      {step < 2 && (
        <div className="flex flex-col items-center gap-6 text-center">
          <p
            className={`font-arabic text-xl text-ink-700/70 transition-all duration-700 ${
              step >= 0 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {final.bridge1}
          </p>
          <p
            className={`font-arabic text-xl text-lavender-600 transition-all duration-700 ${
              step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            {final.bridge2}
          </p>
        </div>
      )}

      {/* main reveal */}
      {step >= 2 && (
        <div className="w-full max-w-sm flex flex-col items-center text-center animate-scale-in">
          {/* final visual cluster */}
          <div className="relative mb-8 animate-float-slow">
            <div className="absolute inset-0 -z-10 blur-3xl opacity-70 bg-gradient-to-br from-blush-200 via-lavender-200 to-matcha-200 rounded-full" />
            <div className="flex items-end gap-1">
              <span className="text-3xl animate-float" style={{ animationDelay: '0.2s' }}>🎀</span>
              <span className="text-6xl">🎁</span>
              <span className="text-3xl animate-float" style={{ animationDelay: '0.5s' }}>🍵</span>
            </div>
            <span className="absolute -top-3 -right-2 text-lg animate-sparkle">✨</span>
            <span className="absolute -bottom-2 -left-3 text-lg animate-sparkle" style={{ animationDelay: '1s' }}>🌸</span>
          </div>

          <h1 className="font-arabic text-3xl sm:text-4xl font-bold text-ink-800 leading-snug animate-rise">
            {final.title}
          </h1>

          <div className="mt-7 space-y-4">
            {final.body.map((para, i) => (
              <p
                key={i}
                className="font-arabic text-base leading-loose text-ink-700/90 animate-fade-up"
                style={{ animationDelay: `${0.3 + i * 0.3}s` }}
              >
                {para}
              </p>
            ))}
          </div>

          <p className="mt-8 font-display italic text-ink-700/60 text-sm animate-fade-in" style={{ animationDelay: '1s' }}>
            {final.closing}
          </p>

          <div className="mt-10 flex flex-col gap-3 w-full animate-fade-up" style={{ animationDelay: '1.2s' }}>
            <button
              type="button"
              onClick={onReplay}
              className="w-full px-8 py-4 rounded-full font-arabic text-base font-semibold text-white bg-gradient-to-r from-blush-400 to-lavender-400 shadow-soft active:scale-95 transition"
            >
              {final.replay}
            </button>
            <button
              type="button"
              onClick={onReplay}
              className="w-full px-8 py-3 rounded-full font-arabic text-sm font-semibold text-ink-700 bg-white/70 shadow-soft active:scale-95 transition"
            >
              {final.reopen}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
