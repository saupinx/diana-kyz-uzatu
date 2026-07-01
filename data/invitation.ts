export type Language = "ru" | "kz";

export type InvitationContent = {
  eventTitle: string;
  name: string;
  heroNames: string;
  organizers: string;
  invitationText: string;
  guestArrival: string;
  start: string;
  date: string;
  venue: string;
  city: string;
  address: string;
  childrenNote: string;
  closingPhrase: string;
  labels: {
    languageRu: string;
    languageKz: string;
    invitation: string;
    eventInfo: string;
    countdown: string;
    calendar: string;
    program: string;
    rsvp: string;
    children: string;
    wishes: string;
    gallery: string;
    final: string;
    guestArrival: string;
    start: string;
    date: string;
    venue: string;
    city: string;
    address: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    addToCalendar: string;
    sendRsvp: string;
    copyWish: string;
    copied: string;
    music: string;
    musicUnavailable: string;
  };
  program: Array<{ time: string; title: string }>;
  wishes: string[];
};

export const eventDateIso = "2026-08-05T18:00:00+05:00";

export const assetPaths = {
  hero: "/assets/photos/hero.jpg",
  gallery: ["/assets/photos/gallery-1.jpg", "/assets/photos/gallery-2.jpg"],
  music: "/assets/music/music.mp3",
};

export const whatsappPhone = "77002702425";

export const invitation: Record<Language, InvitationContent> = {
  ru: {
    eventTitle: "Qyz uzatu",
    name: "Диана",
    heroNames: "Diana",
    organizers: "Хозяин торжества",
    invitationText:
      "Приглашаем Вас быть почетным гостем на торжественном проводе нашей дочери Дианы.",
    guestArrival: "17:00",
    start: "18:00",
    date: "05.08.2026",
    venue: "Ресторан Фазенда",
    city: "Косшы",
    address: "https://twi.kz/eA8p",
    childrenNote:
      "Нам будет очень приятно, если Вы поддержите дресс-код торжества. Просим Вас избегать розовых и белых оттенков.",
    closingPhrase: "Подтвердите Ваше присутствие на нашем торжестве.",
    labels: {
      languageRu: "RU",
      languageKz: "KZ",
      invitation: "Приглашение",
      eventInfo: "Детали",
      countdown: "До торжества",
      calendar: "Календарь",
      program: "Программа",
      rsvp: "RSVP",
      children: "DRESS-CODE",
      wishes: "Пожелания",
      gallery: "Галерея",
      final: "До встречи",
      guestArrival: "Сбор гостей",
      start: "Начало",
      date: "Дата",
      venue: "Место",
      city: "Город",
      address: "Адрес",
      days: "дней",
      hours: "часов",
      minutes: "минут",
      seconds: "секунд",
      addToCalendar: "Добавить в календарь",
      sendRsvp: "Ответить в WhatsApp",
      copyWish: "Скопировать",
      copied: "Скопировано",
      music: "Музыка",
      musicUnavailable: "Музыка недоступна",
    },
    program: [
      { time: "17:00", title: "Сбор гостей" },
      { time: "18:00", title: "Начало торжества" },
      { time: "19:00", title: "Праздничная программа" },
      { time: "23:00", title: "Финальные слова" },
    ],
    wishes: [
      "Пусть этот день будет светлым, теплым и незабываемым.",
      "Желаем Диане счастливой дороги и большой любви.",
      "Пусть дом всегда будет наполнен уважением, радостью и гармонией.",
    ],
  },

  kz: {
    eventTitle: "Qyz uzatu",
    name: "Диана",
    heroNames: "Diana",
    organizers: "Той иесі",
    invitationText:
      "Сіздерді қызымыз Диананың ұзату тойының қадірлі қонағы болуға шақырамыз.",
    guestArrival: "17:00",
    start: "18:00",
    date: "05.08.2026",
    venue: "Фазенда рестораны",
    city: "Қосшы",
    address: "https://twi.kz/eA8p",
    childrenNote:
      "Тойымыздың дресс-кодын қолдасаңыздар, біз үшін өте қуанышты болар еді. Қызғылт және ақ реңктердегі киімдерден аулақ болуларыңызды сұраймыз.",
    closingPhrase: "Келіңіздер, қуанышымыздың қадірлі қонағы болыңыздар!",
    labels: {
      languageRu: "RU",
      languageKz: "KZ",
      invitation: "Шақыру",
      eventInfo: "Мәлімет",
      countdown: "Тойға дейін",
      calendar: "Күнтізбе",
      program: "Бағдарлама",
      rsvp: "RSVP",
      children: "DRESS-CODE",
      wishes: "Тілектер",
      gallery: "Галерея",
      final: "Кездескенше",
      guestArrival: "Қонақтарды қарсы алу",
      start: "Басталуы",
      date: "Күні",
      venue: "Өтетін орны",
      city: "Қала",
      address: "Мекенжай",
      days: "күн",
      hours: "сағат",
      minutes: "минут",
      seconds: "секунд",
      addToCalendar: "Күнтізбеге қосу",
      sendRsvp: "WhatsApp арқылы жауап беру",
      copyWish: "Көшіру",
      copied: "Көшірілді",
      music: "Әуен",
      musicUnavailable: "Әуен қолжетімсіз",
    },
    program: [
      { time: "17:00", title: "Қонақтарды қарсы алу" },
      { time: "18:00", title: "Тойдың басталуы" },
      { time: "19:00", title: "Мерекелік бағдарлама" },
      { time: "22:00", title: "Қорытынды сөз" },
    ],
    wishes: [
      "Бұл күн жарық, жылы әрі ұмытылмас болсын.",
      "Дианаға бақытты жол және үлкен махаббат тілейміз.",
      "Шаңырақ әрдайым сыйластыққа, қуанышқа және берекеге толы болсын.",
    ],
  },
};