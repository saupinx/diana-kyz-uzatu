"use client";

import { useEffect, useState } from "react";
import type { InvitationContent } from "@/data/invitation";
import { FloralDecor } from "./FloralDecor";

type GuestWish = {
  id: string;
  name: string;
  text: string;
  createdAt: string;
};

const STORAGE_KEY = "diana-kyz-uzatu-wishes";

export function WishesSection({ content }: { content: InvitationContent }) {
  const [name, setName] = useState("");
  const [wishText, setWishText] = useState("");
  const [wishes, setWishes] = useState<GuestWish[]>([]);
  const [isListOpen, setIsListOpen] = useState(false);
  const [openedWishId, setOpenedWishId] = useState<string | null>(null);

  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isWishFocused, setIsWishFocused] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setWishes(JSON.parse(saved));
      }
    } catch {
      setWishes([]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
  }, [wishes]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedWish = wishText.trim();

    if (!trimmedName || !trimmedWish) {
      return;
    }

    const newWish: GuestWish = {
      id: crypto.randomUUID(),
      name: trimmedName,
      text: trimmedWish,
      createdAt: new Date().toISOString(),
    };

    setWishes((current) => [newWish, ...current]);
    setName("");
    setWishText("");
    setIsListOpen(true);
  }

  return (
    <section className="wishes-section reveal-section relative overflow-hidden px-5 py-7">
      <FloralDecor variant="vertical" className="floral-wishes-vertical" />

      <div className="relative z-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.34em] text-neutral-600">
          {content.labels.wishes}
        </p>

        <div className="wishes-form-card premium-card mt-6 rounded-[28px] p-6">
          <form onSubmit={handleSubmit} className="wishes-form">
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              onFocus={() => setIsNameFocused(true)}
              onBlur={() => setIsNameFocused(false)}
              placeholder={isNameFocused ? "" : "Ваше имя"}
              className="wishes-input"
            />

            <textarea
              value={wishText}
              onChange={(event) => setWishText(event.target.value)}
              onFocus={() => setIsWishFocused(true)}
              onBlur={() => setIsWishFocused(false)}
              placeholder={isWishFocused ? "" : "Пожелания"}
              className="wishes-textarea"
              rows={4}
            />

            <button type="submit" className="wishes-submit-button">
              Оставить пожелание
            </button>
          </form>
        </div>

        <button
          type="button"
          className="wishes-toggle-button"
          onClick={() => setIsListOpen((current) => !current)}
        >
          {isListOpen ? "Скрыть пожелания" : "Прочитать пожелания"}
        </button>

        {isListOpen ? (
          <div className="wishes-list">
            {wishes.length > 0 ? (
              wishes.map((wish) => {
                const isOpened = openedWishId === wish.id;

                return (
                  <button
                    key={wish.id}
                    type="button"
                    className={`guest-wish-card ${isOpened ? "guest-wish-card-open" : ""}`}
                    onClick={() =>
                      setOpenedWishId((current) => (current === wish.id ? null : wish.id))
                    }
                  >
                    <span className="guest-wish-name">{wish.name}</span>

                    {isOpened ? (
                      <span className="guest-wish-text">{wish.text}</span>
                    ) : (
                      <span className="guest-wish-hidden">Нажмите, чтобы открыть пожелание</span>
                    )}
                  </button>
                );
              })
            ) : (
              <p className="wishes-empty-text">
                Пока пожеланий нет. Станьте первым гостем, кто оставит тёплые слова.
              </p>
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}