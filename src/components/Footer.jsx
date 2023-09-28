import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="w-full h-10 flex items-center justify-center border-t dark:border-zinc-700 dark:text-zinc-500">
      <p>&copy; 2023 Mert Can Bakar. {t("copyright")}.</p>
    </footer>
  );
}
