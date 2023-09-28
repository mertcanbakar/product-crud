import { MdOutlineDeleteOutline, MdModeEdit } from "react-icons/md";
import { categories } from "../consts/categories";
import { useTranslation } from "react-i18next";
import { setModal } from "../store/modal/actions";

export default function ProductList({ item, setData, setMessageBox }) {
  const { t } = useTranslation();

  const handleEdit = (data) => {
    setData(data);
    setModal(true);
  };
  const handleDelete = (data) => {
    setData(data);
    setMessageBox(true);
  };

  return (
    <tr className=" pb-1 border-b border-zinc-300 text-zinc-700 dark:text-zinc-200 dark:border-zinc-700">
      <td className="w-[5%] text-center text-sm">{item.id}</td>
      <td className="w-[10%] text-sm font-semibold">{item.brand}</td>
      <td className="text-sm">{item.title}</td>
      <td className=" text-center truncate text-sm">
        {t(categories.find((i) => i.value === item.category)?.key)}
      </td>
      <td className="w-[10%] text-center text-sm">{item.stock}</td>
      <td className="w-[10%] text-right text-sm ">{item.price}$</td>
      <td className="w-[10%] text-right text-lg pr-2">
        <button
          onClick={() => handleEdit(item)}
          className="text-blue-600 hover:bg-blue-200 dark:text-blue-300 hover:dark:bg-zinc-600 p-1.5 rounded-full"
        >
          <MdModeEdit />
        </button>
        <button
          onClick={() => handleDelete(item)}
          className="text-red-600 hover:bg-red-200 dark:text-red-300 hover:dark:bg-zinc-600 p-1.5 rounded-full"
        >
          <MdOutlineDeleteOutline />
        </button>
      </td>
    </tr>
  );
}
