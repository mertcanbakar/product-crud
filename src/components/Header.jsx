import { useTranslation } from "react-i18next";
import { Menu } from "@headlessui/react";
import { setTheme } from "../store/app/actions";
import { useTheme } from "../store/app/hooks";
import { BsSunFill } from "react-icons/bs";
import { HiMiniMoon } from "react-icons/hi2";
import { changeLanguage } from "i18next";

function Header() {
  const theme = useTheme();
  const themes = ["light", "dark"];
  const languages = ["tr", "en"];
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full h-16 flex justify-between items-center px-5 border-b dark:text-white/70 dark:border-zinc-700">
      <h2 className="text-2xl text-zinc-700 ml-16 dark:text-white/70">
        ./mertcanbakar
      </h2>
      <div className="w-[150px] flex relative justify-center items-center gap-3">
        <Menu>
          <Menu.Button
            className={
              "flex w-full justify-center items-center gap-x-1 border border-zinc-200 px-2 py-1 rounded transition-colors hover:bg-zinc-300 dark:border-zinc-500 hover:dark:bg-zinc-800"
            }
          >
            {theme === "light" ? <BsSunFill /> : <HiMiniMoon />} {t(theme)}
          </Menu.Button>
          <Menu.Items
            className={
              "w-[150px] p-2 absolute bg-white border border-zinc-400 rounded top-full dark:bg-zinc-800"
            }
          >
            {themes.map((item, key) => (
              <Menu.Item
                className="w-full flex items-center gap-2 rounded p-2 "
                key={key}
              >
                {({ active }) => (
                  <button
                    className={`${active && "bg-zinc-200 dark:bg-zinc-700"}`}
                    onClick={() => setTheme(item)}
                  >
                    {item === "light" ? <BsSunFill /> : <HiMiniMoon />}
                    {t(item)}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
        <Menu>
          <Menu.Button
            className={
              "w-[60%] flex justify-center items-center gap-x-1 border border-zinc-200 py-1 mx-auto rounded transition-colors hover:bg-zinc-300 dark:border-zinc-500 hover:dark:bg-zinc-800"
            }
          >
            <img
              className="w-4 h-4 object-cover rounded-full"
              src={`https://flagcdn.com/${
                i18n.language === "tr" ? "tr" : "us"
              }.svg`}
            />
            {i18n.language === "tr" ? "TR" : "EN"}
          </Menu.Button>
          <Menu.Items
            className={
              "w-[75px] py-1 text-sm absolute bg-white border border-zinc-400 rounded top-full right-0 dark:bg-zinc-800"
            }
          >
            {languages.map((item, key) => (
              <Menu.Item
                className="w-full flex items-center justify-center gap-2 rounded mb-1 p-2"
                key={key}
              >
                {({ active }) => (
                  <button
                    className={`${active && "bg-zinc-200 dark:bg-zinc-700"}`}
                    onClick={() => changeLanguage(item)}
                  >
                    <img
                      className="w-4 h-4 flex items-center justify-center object-cover rounded-full"
                      src={`https://flagcdn.com/${
                        item === "tr" ? "tr" : "us"
                      }.svg`}
                    />
                    {item === "tr" ? "TR" : "EN"}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
