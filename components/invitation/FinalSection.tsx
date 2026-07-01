import type { InvitationContent } from "@/data/invitation";
import { FloralDecor } from "./FloralDecor";
import { FloralDivider } from "./FloralDivider";
import { Sparkles } from "./Sparkles";

export function FinalSection({ content }: { content: InvitationContent }) {
  return (
    <section className="reveal-section relative overflow-hidden px-5 pb-16 pt-10 text-center">
      <FloralDecor variant="bouquet" className="floral-final-composition floral-final-bouquet" />
      <FloralDecor variant="corner" className="floral-final-corner" />
      <div className="relative z-10">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-neutral-600">
          {content.labels.final}
        </p>
        <FloralDivider />
        <div className="relative mx-auto w-fit px-8">
          <Sparkles variant="final" />
          <p className="relative font-calligraphy text-[76px] leading-none text-black drop-shadow-[0_10px_18px_rgba(0,0,0,0.07)]">{content.heroNames}</p>
        </div>
        <p className="mx-auto mt-7 max-w-[300px] font-serif text-2xl font-semibold leading-9 text-black">
          {content.closingPhrase}
        </p>
      </div>
    </section>
  );
}