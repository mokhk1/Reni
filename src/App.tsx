import { useCallback, useEffect, useState } from 'react';
import { birthdayData, Gift } from '@/data/birthday';
import { Intro } from '@/components/Intro';
import { GiftRoom } from '@/components/GiftRoom';
import { GiftScreen } from '@/components/GiftScreen';
import { FinalScreen } from '@/components/FinalScreen';
import { GiftState } from '@/components/GiftBox';

type Stage = 'intro' | 'room' | 'gift' | 'final';

export default function App() {
  const [stage, setStage] = useState<Stage>('intro');
  const [activeGift, setActiveGift] = useState<Gift | null>(null);
  const [states, setStates] = useState<Record<number, GiftState>>(() => {
    const init: Record<number, GiftState> = {};
    birthdayData.gifts.forEach((g) => (init[g.id] = 'locked'));
    return init;
  });

  // scroll to top whenever stage changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [stage, activeGift]);

  const handlePick = (gift: Gift) => {
    if (states[gift.id] === 'opened') {
      // already opened — let her re-visit the reveal directly
      setActiveGift(gift);
      setStage('gift');
      return;
    }
    setActiveGift(gift);
    setStage('gift');
  };

  const handleRevealed = useCallback(() => {
    if (!activeGift) return;
    setStates((prev) => ({ ...prev, [activeGift.id]: 'opened' }));
  }, [activeGift]);

  const handleBackToRoom = () => {
    setActiveGift(null);
    const allOpened = birthdayData.gifts.every((g) => states[g.id] === 'opened');
    if (allOpened) {
      // small pause so the room doesn't flash before the finale
      setStage('room');
      setTimeout(() => setStage('final'), 900);
    } else {
      setStage('room');
    }
  };

  const handleReplay = () => {
    const reset: Record<number, GiftState> = {};
    birthdayData.gifts.forEach((g) => (reset[g.id] = 'locked'));
    setStates(reset);
    setActiveGift(null);
    setStage('intro');
  };

  return (
    <main className="relative min-h-[100dvh] w-full max-w-[480px] mx-auto overflow-x-hidden touch-pan-y no-scrollbar">
      {stage === 'intro' && <Intro onStart={() => setStage('room')} />}

      {stage === 'room' && <GiftRoom states={states} onPick={handlePick} />}

      {stage === 'gift' && activeGift && (
        <GiftScreen
          gift={activeGift}
          onBack={handleBackToRoom}
          onRevealed={handleRevealed}
        />
      )}

      {stage === 'final' && <FinalScreen onReplay={handleReplay} />}
    </main>
  );
}
