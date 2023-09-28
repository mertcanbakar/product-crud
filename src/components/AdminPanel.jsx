import { useTranslation } from "react-i18next";
import { setModal } from "../store/modal/actions";

export default function AdminPanel() {
  const { t } = useTranslation();

  return (
    <div className="w-full flex justify-center items-center ">
      <div className="w-[90%] mt-5 flex justify-between items-center p-7 rounded border border-zinc-500 dark:border-zinc-700">
        <h2 className="text-2xl text-zinc-700 dark:text-white">
          {t("productList")}
        </h2>
        <button
          onClick={() => setModal(true)}
          className="px-2.5 py-1.5 rounded text-sm text-white bg-blue-500 border border-blue-100 transition-colors hover:bg-blue-600 dark:bg-zinc-600 dark:border-zinc-500 hover:dark:bg-zinc-700 "
        >
          {t("newProduct")}
        </button>
      </div>
    </div>
  );
}
