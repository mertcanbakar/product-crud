import { useTranslation } from "react-i18next";

export default function MessageBox({
  setMessageBox,
  setData,
  products,
  setProducts,
  data,
}) {
  const { t } = useTranslation();
  const handleCancel = () => {
    setMessageBox(false);
    setData(null);
  };
  const handleDelete = () => {
    if (data) {
      const newList = products.filter((item) => item.id !== data.id);
      setProducts(newList);
      setMessageBox(false);
      setData(null);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/30 flex items-center justify-center transition-all">
      <div className="w-[400px] h-[150px] flex flex-col justify-center items-center rounded-lg border border-zinc-300 p-5 bg-white dark:bg-zinc-900 dark:text-zinc-200 dark:border-zinc-700">
        <h5 className="mt-5">{t("messagev1")}</h5>
        <div className="mt-auto ml-auto flex gap-x-3">
          <button
            onClick={handleDelete}
            className="w-12 h-8 flex items-center rounded-md text-green-600 justify-center border border-green-300 transition-colors hover:bg-green-50 dark:border-zinc-700 hover:dark:bg-zinc-800 "
          >
            {t("yes")}
          </button>
          <button
            onClick={() => handleCancel()}
            className="w-12 h-8 flex items-center rounded-md text-red-600 justify-center border border-red-300 transition-colors hover:bg-red-50 dark:border-zinc-700 hover:dark:bg-zinc-800"
          >
            {t("no")}
          </button>
        </div>
      </div>
    </div>
  );
}
