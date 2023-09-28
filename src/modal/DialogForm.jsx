import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { categories } from "../consts/categories";
import { setModal } from "../store/modal/actions";

function DialogForm({
  buttonName = "new",
  data,
  setData,
  products,
  setProducts,
}) {
  const { t } = useTranslation();

  function headerName(buttonType) {
    switch (buttonType) {
      case "new":
        return t("createProduct");
        break;
      case "edit":
        return t("editProduct");
        break;
    }
  }
  // function newProduct(values) {
  //   fetch("https://dummyjson.com/products/add", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       ...values,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then(console.log);
  // }

  const formik = useFormik({
    initialValues: data || {
      id: products[0].id + 1,
      brand: "",
      title: "",
      description: "",
      stock: "",
      price: "",
      category: "",
    },
    onSubmit: (values) => {
      console.log(values);
      setProducts([values, ...products]);
      formik.resetForm();
      setModal(false);
    },
  });
  const handleCancel = () => {
    setModal(false);
    formik.resetForm();
    setData(null);
  };
  return (
    <div className="fixed inset-0 z-[9999] bg-black/30 flex items-center justify-center transition-all">
      <div className="w-[600px] bg-white dark:bg-zinc-900 rounded-md border border-zinc-300 dark:border-zinc-700 p-8">
        <section className="w-full text-left text-xl dark:text-zinc-200 dark:border-zinc-700 border-b border-zinc-300 pb-8">
          {headerName(buttonName)}
        </section>
        <div className="w-full flex items-center justify-between flex-wrap mt-10">
          <input
            className="w-[49%] outline-none border rounded-lg border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200 px-1 py-2"
            name="brand"
            type="text"
            value={formik.values.brand}
            onChange={formik.handleChange}
            placeholder={t("brand")}
          />
          <input
            className="w-[49%] outline-none border rounded-lg border-zinc-300 px-1 py-2 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
            name="title"
            type="text"
            value={formik.values.title}
            onChange={formik.handleChange}
            placeholder={t("title")}
          />
          <input
            className="w-full outline-none border rounded-lg border-zinc-300 px-1 py-2 mt-2 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
            name="description"
            type="text"
            value={formik.values.description}
            onChange={formik.handleChange}
            placeholder={t("description")}
          />
        </div>
        <div className="w-full flex items-center justify-center gap-x-3 mt-2">
          <input
            className="w-full outline-none border rounded-lg border-zinc-300 px-1 py-2 mt-1 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
            name="stock"
            type="text"
            value={formik.values.stock}
            onChange={formik.handleChange}
            placeholder={t("stock")}
          />
          <input
            className="w-full outline-none border rounded-lg border-zinc-300 px-1 py-2 mt-1 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
            name="price"
            type="text"
            value={formik.values.price}
            onChange={formik.handleChange}
            placeholder={t("price")}
          />
        </div>
        <div>
          <select
            className="w-full outline-none border rounded-lg border-zinc-300 px-1 py-2 cursor-pointer mt-2 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
          >
            <option>Seçiniz</option>
            {categories.map((item, key) => (
              <option value={item.value} key={key}>
                {t(item.key)}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full flex justify-end items-center mt-20 gap-x-3">
          {buttonName === "new" && (
            <button
              type="submit"
              onClick={formik.handleSubmit}
              className="p-1 border rounded text-sm border-green-300 bg-green-500 text-white transition-colors hover:bg-green-600 dark:bg-zinc-800 dark:border-zinc-800 dark:text-green-500"
            >
              {t("save")}
            </button>
          )}
          {buttonName === "edit" && (
            <button className="p-1 border rounded text-sm border-blue-300 bg-blue-500 text-white transition-colors hover:bg-blue-600 dark:bg-zinc-800 dark:border-zinc-800 dark:text-blue-500">
              {t("update")}
            </button>
          )}
          <button
            onClick={() => handleCancel()}
            className="p-1 border rounded text-sm border-red-300 bg-red-500 text-white transition-colors hover:bg-red-600 dark:bg-zinc-800 dark:border-zinc-800 dark:text-red-500"
          >
            {t("cancel")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DialogForm;
