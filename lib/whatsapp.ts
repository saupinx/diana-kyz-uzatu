type WhatsAppOptions = {
  phone?: string;
  name: string;
  date: string;
  venue: string;
  language: "ru" | "kz";
};

export function buildWhatsAppUrl({ phone, name, date, venue, language }: WhatsAppOptions) {
  const text =
    language === "kz"
      ? `Сәлеметсіз бе! ${name} қыз ұзатуына ${date} күні, ${venue} мекенжайына қатысатынымды растаймын.`
      : `Здравствуйте! Подтверждаю участие на Қыз Ұзату ${name} ${date} в ${venue}.`;

  const cleanPhone = phone?.replace(/[^\d]/g, "") ?? "";
  const base = cleanPhone ? `https://wa.me/${cleanPhone}` : "https://wa.me/";

  return `${base}?text=${encodeURIComponent(text)}`;
}
