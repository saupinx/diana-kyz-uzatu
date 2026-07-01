import type { InvitationContent } from "@/data/invitation";
import { FloralDecor } from "./FloralDecor";

const importantNoteColors = [
  { name: "Темный шоколад", hex: "#3A2A20" },
  { name: "Коричневый", hex: "#5A4030" },
  { name: "Бежево-тауповый", hex: "#B39E83" },
  { name: "Пудрово-бежевый", hex: "#D8C8BC" },
  { name: "Светлый песочный", hex: "#D4C5A9" },
  { name: "Светлый шалфей", hex: "#B7C0A2" },
  { name: "Темный оливковый", hex: "#4E5D3D" },
  { name: "Темно-синий", hex: "#0B1F3A" },
];

export function ChildrenNote({ content }: { content: InvitationContent }) {
  return (
    <section className="reveal-section px-5 py-7 text-center">
      <div className="premium-card overflow-hidden rounded-[28px] p-6">
        <FloralDecor
          variant="peony"
          className="floral-card-corner floral-card-corner-side floral-children-peony"
        />

        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-neutral-600">
            {content.labels.children}
          </p>

          <div className="important-note-palette" aria-label="Dress code colors">
            {importantNoteColors.map((color) => (
              <span
                key={color.hex}
                className="important-note-color-dot"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>

          <p className="mt-5 text-base leading-8 text-neutral-800">
            {content.childrenNote}
          </p>
        </div>
      </div>
    </section>
  );
}