import type { Language } from "@/data/invitation";

type LanguageSwitcherProps = {
  language: Language;
  onChange: (language: Language) => void;
};

export function LanguageSwitcher({ language, onChange }: LanguageSwitcherProps) {
  return (
    <div className="language-switcher inline-flex rounded-full border border-neutral-300 bg-white p-1">
      {(["ru", "kz"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onChange(item)}
          className={`language-pill h-9 min-w-12 rounded-full px-4 text-xs font-semibold uppercase ${
            language === item ? "bg-black text-white" : "bg-white text-black"
          }`}
          aria-pressed={language === item}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
