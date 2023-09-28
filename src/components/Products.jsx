import axios from "axios";
import { useState, useEffect } from "react";
import { MdOutlineDeleteOutline, MdModeEdit } from "react-icons/md";

// Components
import ProductCard from "./ProductList";
import { useTheme } from "../store/app/hooks";
import { useTranslation } from "react-i18next";
import ProductList from "./ProductList";

export default function Products({
  products,
  setProducts,
  setData,
  setMessageBox,
}) {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  const { t } = useTranslation();

  async function getProducts() {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=10"
      );
      setProducts(response.data.products.reverse());
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="w-full h-full flex justify-center ">
      <div className="w-[90%] my-5 flex justify-between items-center flex-col px-4 rounded border border-zinc-500 overflow-auto dark:border-zinc-700">
        <h2 className="mt-3 mb-4 text-2xl text-zinc-700 dark:text-white">
          {t("adminPanel")}
        </h2>
        <div className="w-full h-full overflow-auto">
          <table className="w-full">
            <thead className="bg-blue-500 text-white dark:bg-black">
              <tr>
                <th className="w-[5%] text-center">ID</th>
                <th className="w-[15%]">{t("brand")}</th>
                <th className="w-[25%] text-ellipsis">{t("title")}</th>
                <th className="w-[20%] text-center">{t("category")}</th>
                <th className="w-[10%] text-center">{t("stock")}</th>
                <th className="w-[15%] text-center">{t("price")}</th>
                <th className="w-[10%] text-center"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, idx) => (
                <ProductList
                  key={idx}
                  item={item}
                  setData={setData}
                  setMessageBox={setMessageBox}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
