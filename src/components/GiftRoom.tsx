import { birthdayData, Gift } from '@/data/birthday';
import { GiftBox, GiftState } from '@/components/GiftBox';
import { StarField } from '@/components/StarField';

/**
 * Screen 2 — the gift room.
 * Shows 4 floating gift boxes, a progress indicator, and the unlock rule.
 */
export function GiftRoom({
  states,
  onPick,
}: {
  states: Record<number, GiftState>;
  onPick: (gift: Gift) => void;
}) {
  const { room, gifts } = birthdayData;
  const openedCount = gifts.filter((g) => states[g.id] === 'opened').length;

  return (
    <section className="relative min-h-[100dvh] flex flex-col px-6 py-10">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-lavender-50 via-cream-100 to-blush-50" />
      <StarField count={16} />

      {/* header */}
      <div className="text-center mt-4 animate-fade-up">
        <h1 className="font-arabic text-2xl sm:text-3xl font-bold text-ink-800">
          {room.title}
        </h1>
        <p className="font-arabic text-base text-ink-700/70 mt-2">{room.subtitle}</p>
      </div>

      {/* progress */}
      <div className="mt-6 flex flex-col items-center animate-fade-up" style={{ animationDelay: '0.15s' }}>
        <div className="flex items-center gap-2">
          {gifts.map((g) => (
            <span
              key={g.id}
              className={`h-2 rounded-full transition-all duration-500 ${
                states[g.id] === 'opened' ? 'w-8 bg-matcha-400' : 'w-2 bg-ink-700/20'
              }`}
            />
          ))}
        </div>
        <p className="font-arabic text-xs text-ink-700/60 mt-2">
          {room.progressLabel}: {openedCount} / {gifts.length}
        </p>
      </div>

      {/* gift grid — 2x2, large touch targets */}
      <div className="mt-10 grid grid-cols-2 gap-y-10 gap-x-4 place-items-center">
        {gifts.map((g, i) => (
          <div
            key={g.id}
            className="animate-rise"
            style={{ animationDelay: `${0.2 + i * 0.1}s` }}
          >
            <GiftBox
              gift={g}
              state={states[g.id]}
              size="md"
              showLabel
              onClick={() => onPick(g)}
            />
          </div>
        ))}
      </div>

      {/* rule */}
      <div className="mt-auto pt-8 text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
        <div className="glass rounded-2xl px-5 py-4 shadow-soft inline-block">
          <p className="font-arabic text-sm text-ink-700/80 leading-relaxed">
            فيه شرط واحد...
            <br />
            {room.rule}
          </p>
        </div>
      </div>
    </section>
  );
}
