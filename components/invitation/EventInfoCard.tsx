import type { InvitationContent } from "@/data/invitation";
import { FloralDecor } from "./FloralDecor";

function isExternalLink(value: string) {
  return value.startsWith("http://") || value.startsWith("https://");
}

export function EventInfoCard({ content }: { content: InvitationContent }) {
  const rows = [
    {
      key: "date",
      label: content.labels.date,
      value: content.date,
      isAddress: false,
    },
    {
      key: "guestArrival",
      label: content.labels.guestArrival,
      value: content.guestArrival,
      isAddress: false,
    },
    {
      key: "start",
      label: content.labels.start,
      value: content.start,
      isAddress: false,
    },
    {
      key: "venue",
      label: content.labels.venue,
      value: content.venue,
      isAddress: false,
    },
    {
      key: "city",
      label: content.labels.city,
      value: content.city,
      isAddress: false,
    },
    {
      key: "address",
      label: content.labels.address,
      value: content.address,
      isAddress: true,
    },
  ];

  return (
    <section className="reveal-section px-5 py-7">
      <div className="premium-card details-card overflow-hidden rounded-[28px] p-6">
        <FloralDecor variant="bouquet" className="floral-details-border" />

        <div className="relative z-10">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.34em] text-neutral-600">
            {content.labels.eventInfo}
          </p>

          <div className="mt-6 divide-y divide-neutral-200">
            {rows.map((row) => {
              const shouldShowLink =
                row.isAddress && isExternalLink(row.value);

              return (
                <div
                  key={row.key}
                  className="details-row flex items-start justify-between gap-5 py-4"
                >
                  <span className="details-label text-xs uppercase tracking-[0.24em] text-neutral-500">
                    {row.label}
                  </span>

                  {shouldShowLink ? (
                    <a
                      href={row.value}
                      target="_blank"
                      rel="noreferrer"
                      className="details-address-link-final"
                    >
                      {content.labels.address === "Мекенжай"
                        ? "Картаны ашу"
                        : "Открыть адрес"}
                    </a>
                  ) : (
                    <span className="details-value-final">
                      {row.value}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}