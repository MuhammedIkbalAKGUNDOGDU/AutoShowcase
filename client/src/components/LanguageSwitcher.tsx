import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages = [
  {
    code: "en",
    name: "English",
    flag: "/flags/Flag_of_the_United_Kingdom_(3-5).svg",
  },
  {
    code: "tr",
    name: "Türkçe",
    flag: "/flags/Flag_of_Turkey.svg",
  },
  {
    code: "de",
    name: "Deutsch",
    flag: "/flags/Flag_of_Germany.svg",
  },
  {
    code: "ar",
    name: "العربية",
    flag: "/flags/Flag_of_Saudi_Arabia.svg",
  },
  {
    code: "ru",
    name: "Русский",
    flag: "/flags/Flag_of_Russia.svg",
  },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    document.documentElement.dir = langCode === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = langCode;
  };

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <Select value={i18n.language} onValueChange={handleLanguageChange}>
      <SelectTrigger
        className="w-[140px] bg-background/80 backdrop-blur-sm border-border/40"
        data-testid="select-language"
      >
        <div className="flex items-center gap-2">
          <img
            src={currentLanguage.flag}
            alt={currentLanguage.name}
            className="w-4 h-3 object-cover rounded-sm"
          />
          <span className="text-sm font-medium">{currentLanguage.name}</span>
        </div>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem
            key={lang.code}
            value={lang.code}
            data-testid={`option-language-${lang.code}`}
          >
            <span className="flex items-center gap-2">
              <img
                src={lang.flag}
                alt={lang.name}
                className="w-4 h-3 object-cover rounded-sm"
              />
              <span>{lang.name}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
