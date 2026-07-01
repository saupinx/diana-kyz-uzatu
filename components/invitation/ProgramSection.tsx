import type { InvitationContent } from "@/data/invitation";

export function ProgramSection({ content }: { content: InvitationContent }) {
  return (
    <section className="reveal-section px-5 py-7">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.34em] text-neutral-600">
        {content.labels.program}
      </p>
      <div className="premium-card mt-6 rounded-[28px] p-6">
        <div className="space-y-3">
          {content.program.map((item) => (
            <div key={`${item.time}-${item.title}`} className="program-row grid grid-cols-[72px_1fr] gap-4 px-2 py-2.5">
              <span className="font-serif text-xl text-black">{item.time}</span>
              <span className="border-l border-neutral-300 pl-4 text-sm uppercase leading-6 tracking-[0.16em] text-neutral-800 shadow-[-1px_0_0_rgba(255,255,255,0.9)]">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
