import React from "react";
import ParticlesBg from 'particles-bg'
import Toggle from "../../Theme";
import { t } from "i18next";
import i18n from "../../i18n";
import en from "../../Assets/Image/Home/gb.png";
import jp from "../../Assets/Image/Home/jp.png";

function Nav() {
  const menu = [
    { name: t("Nav.Home"), href: "#home" },
    { name: t("Nav.Skills"), href: "#skills" },
    { name: t("Nav.Services"), href: "#services" },
    { name: t("Nav.Contact"), href: "#contact" },
    { name: t("Nav.Pricing"), href: "#pricing" },
  ];

  const getCurrentLng = () =>
    i18n.language || window.localStorage.i18nextLng || "";

  const changeLan = () => {
    const newLng = getCurrentLng() === "jp" ? "en" : "jp";
    i18n.changeLanguage(newLng);
    window.location.reload(1);
  };

  return (
    <nav
      id="header"
      className="fixed px-5 w-full z-30 top-0 bg-gray-800 dark:bg-white"
    >
      <ParticlesBg type="circle" bg={true} />
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a
            className="dark:text-black text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          >
            {t("Nav.Name")}
          </a>
        </div>

        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-white-500 border-white-600 hover:text-blue-500 hover:border-blue-500 appearance-none focus:outline-none"
          >
            <svg
              className="text-white hover:animate-ping fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden  mt-2 lg:mt-0  lg:bg-transparent text-black p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            {menu.map((item, index) => (
              <li
                className="mr-3 hover:bg-mainColor hover:rounded-md p-1"
                key={index}
              >
                <a
                  className="inline-block py-2 px-4 dark:text-black text-white  font-bold no-underline"
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <Toggle />

          <button
            className="ml-6 relative top-1 border-gray-400"
            onClick={changeLan}
          >
            <img
              src={getCurrentLng() === "jp" ? jp : en}
              alt="Language Toggle"
              style={{
                width: "40px",
                height: "28px",
                marginBottom: "8px",
                border: "1px solid gray",
              }}
            />
          </button>
        </div>
      </div>

      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
}

export default Nav;
