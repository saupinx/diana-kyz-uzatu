import type { InvitationContent } from "@/data/invitation";
import { FloralDecor } from "./FloralDecor";

type RsvpSectionProps = {
  content: InvitationContent;
  whatsappUrl: string;
};

export function RsvpSection({ content, whatsappUrl }: RsvpSectionProps) {
  return (
    <section className="reveal-section px-5 py-7 text-center">
      <div className="premium-card overflow-hidden rounded-[28px] p-6">
        <FloralDecor variant="softBouquet" className="floral-card-corner floral-card-corner-bottom floral-rsvp-bouquet" />
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-neutral-600">
            {content.labels.rsvp}
          </p>
          <p className="mx-auto mt-5 max-w-[290px] font-serif text-xl leading-9 text-black">
            {content.closingPhrase}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="premium-button mt-7 inline-flex h-12 w-full items-center justify-center rounded-full px-5 text-sm font-semibold uppercase tracking-[0.16em] text-white"
          >
            {content.labels.sendRsvp}
          </a>
        </div>
      </div>
    </section>
  );
}