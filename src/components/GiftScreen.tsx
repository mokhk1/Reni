import { useState } from 'react';
import { Gift } from '@/data/birthday';
import { GiftBox } from '@/components/GiftBox';
import { Confetti } from '@/components/Confetti';
import { MatchaLeaves } from '@/components/MatchaLeaves';
import { StarField } from '@/components/StarField';

type Phase = 'question' | 'correct' | 'opening' | 'revealed';

const THEME_BG = {
  blush: 'from-cream-100 via-blush-50 to-blush-100',
  lavender: 'from-cream-100 via-lavender-50 to-lavender-100',
  matcha: 'from-matcha-50 via-cream-100 to-matcha-100',
  mystery: 'from-lavender-200 via-lavender-300 to-lavender-500',
};

const THEME_ACCENT = {
  blush: 'text-blush-500',
  lavender: 'text-lavender-600',
  matcha: 'text-matcha-700',
  mystery: 'text-lavender-100',
};

const THEME_BTN = {
  blush: 'from-blush-400 to-blush-500',
  lavender: 'from-lavender-400 to-lavender-500',
  matcha: 'from-matcha-400 to-matcha-500',
  mystery: 'from-lavender-400 to-gold-400',
};

const THEME_CARD = {
  blush: 'bg-white/70',
  lavender: 'bg-white/70',
  matcha: 'bg-white/70',
  mystery: 'bg-white/15 border-white/30',
};

const THEME_WRONG = {
  blush: 'bg-blush-100 text-blush-600',
  lavender: 'bg-lavender-100 text-lavender-600',
  matcha: 'bg-matcha-100 text-matcha-700',
  mystery: 'bg-white/20 text-white',
};

/**
 * Full-screen question + reveal flow for a single gift.
 *
 * question -> correct praise -> opening animation -> revealed message
 */
export function GiftScreen({
  gift,
  onBack,
  onRevealed,
}: {
  gift: Gift;
  onBack: () => void;
  onRevealed: () => void;
}) {
  const [phase, setPhase] = useState<Phase>('question');
  const [selected, setSelected] = useState<number | null>(null);
  const [wrong, setWrong] = useState<number | null>(null);
  const [burst, setBurst] = useState(false);
  const isMystery = gift.theme === 'mystery';
  const isMatcha = gift.theme === 'matcha';

  const handleAnswer = (idx: number) => {
    if (idx === gift.correctAnswer) {
      setSelected(idx);
      setBurst(true);
      setTimeout(() => setPhase('correct'), 500);
    } else {
      setWrong(idx);
      setTimeout(() => setWrong(null), 600);
    }
  };

  const openGift = () => {
    setPhase('opening');
    setBurst(true);
    setTimeout(() => {
      setPhase('revealed');
      onRevealed();
    }, 1300);
  };

  return (
    <section
      className={`relative min-h-[100dvh] flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-b ${THEME_BG[gift.theme]} transition-colors duration-700`}
    >
      {isMatcha && <MatchaLeaves count={6} />}
      {isMystery && <StarField count={20} emojis={['✨', '💫', '⭐']} withLeaves={false} withHearts={false} />}
      {!isMystery && !isMatcha && <StarField count={12} />}

      <Confetti active={burst} count={36} onDone={() => setBurst(false)} />

      {/* back */}
      <button
        type="button"
        onClick={onBack}
        className="absolute top-6 left-6 font-arabic text-sm text-ink-700/60 active:scale-95 transition"
        aria-label="رجوع"
      >
        ‹ رجوع
      </button>

      {/* QUESTION PHASE */}
      {phase === 'question' && (
        <div className="w-full max-w-sm animate-scale-in flex flex-col items-center">
          <GiftBox gift={gift} state={'locked'} size="sm" floating={false} />
          <h2 className={`font-arabic text-xl font-bold mt-6 ${THEME_ACCENT[gift.theme]}`}>
            {gift.questionTitle}
          </h2>

          <div className={`mt-6 w-full rounded-3xl p-6 shadow-soft ${THEME_CARD[gift.theme]} backdrop-blur-md`}>
            <p className={`font-arabic text-lg font-semibold text-center leading-relaxed ${
              isMystery ? 'text-white' : 'text-ink-800'
            }`}>
              {gift.question}
            </p>

            <div className="mt-6 space-y-3">
              {gift.answers.map((a, i) => {
                const isWrong = wrong === i;
                const isRight = selected === i;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleAnswer(i)}
                    className={`w-full px-5 py-4 rounded-2xl font-arabic text-base font-semibold transition-all duration-300 active:scale-[0.98] ${
                      isWrong
                        ? `${THEME_WRONG[gift.theme]} animate-shake-x`
                        : isRight
                        ? 'bg-matcha-300 text-matcha-800'
                        : isMystery
                        ? 'bg-white/20 text-white border border-white/30'
                        : 'bg-white text-ink-800 shadow-soft'
                    }`}
                  >
                    {a}
                  </button>
                );
              })}
            </div>

            {wrong !== null && (
              <p className={`mt-4 text-center font-arabic text-sm animate-fade-in ${
                isMystery ? 'text-white/90' : 'text-blush-500'
              }`}>
                {gift.wrongReply}
              </p>
            )}
          </div>
        </div>
      )}

      {/* CORRECT PHASE */}
      {phase === 'correct' && (
        <div className="w-full max-w-sm flex flex-col items-center text-center animate-scale-in">
          <div className="text-6xl mb-4 animate-rise">😭💗</div>
          <p className={`font-arabic text-2xl font-bold ${THEME_ACCENT[gift.theme]}`}>
            {gift.correctPraise}
          </p>
          <p className="font-arabic text-base text-ink-700/70 mt-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            خلاص... تستاهلين تفتحينها.
          </p>
          <button
            type="button"
            onClick={openGift}
            className={`mt-8 px-10 py-4 rounded-full font-arabic text-lg font-semibold text-white bg-gradient-to-r ${THEME_BTN[gift.theme]} shadow-soft animate-pulse-soft active:scale-95 transition`}
          >
            افتحي الهدية 🎁
          </button>
        </div>
      )}

      {/* OPENING PHASE */}
      {phase === 'opening' && (
        <div className="flex flex-col items-center">
          <GiftBox gift={gift} state={'opened'} size="lg" floating={false} />
          <p className={`mt-8 font-arabic text-sm ${isMystery ? 'text-white/80' : 'text-ink-700/60'} animate-fade-in`}>
            {isMystery ? 'لحظة... أعتقد إنك وصلتي لها.' : 'تتفتح...'}
          </p>
        </div>
      )}

      {/* REVEALED PHASE */}
      {phase === 'revealed' && (
        <div className="w-full max-w-sm flex flex-col items-center text-center animate-scale-in">
          {isMystery && (
            <p className="font-arabic text-lavender-100 text-sm mb-2 animate-fade-in">لحظة...</p>
          )}

          <GiftBox gift={gift} state={'opened'} size="sm" floating={false} />

          <h2 className={`font-arabic text-xl font-bold mt-5 ${THEME_ACCENT[gift.theme]}`}>
            {gift.revealTitle}
          </h2>

          {gift.image && (
            <img
              src={gift.image}
              alt=""
              className="mt-5 w-44 h-44 object-cover rounded-3xl shadow-soft animate-rise"
              loading="lazy"
            />
          )}

          <div className={`mt-5 rounded-3xl p-6 shadow-soft ${THEME_CARD[gift.theme]} backdrop-blur-md`}>
            <p className={`font-arabic text-base leading-loose ${isMystery ? 'text-white' : 'text-ink-800'}`}>
              {gift.revealMessage}
            </p>
            {gift.revealSub && (
              <p className={`mt-4 font-arabic text-sm ${isMystery ? 'text-white/80' : 'text-matcha-600'}`}>
                {gift.revealSub}
              </p>
            )}
          </div>

          {isMatcha && (
            <div className="mt-4 text-3xl animate-float" aria-hidden>🍵💚</div>
          )}

          <button
            type="button"
            onClick={onBack}
            className={`mt-8 px-8 py-3 rounded-full font-arabic text-sm font-semibold bg-white/80 text-ink-800 shadow-soft active:scale-95 transition`}
          >
            رجوع للهدايا ←
          </button>
        </div>
      )}
    </section>
  );
}
