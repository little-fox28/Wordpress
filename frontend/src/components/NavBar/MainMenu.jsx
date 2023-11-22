import React from "react";

const MainMenu = ({pathname}) => {
  return (
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a
            href="/about"
            className={`block py-2 px-3 hover:text-[#D3F7AD] ${
              pathname === "/about" ? "text-[#D3F7AD]" : ""
            }`}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/"
            className={`block py-2 px-3 hover:text-[#D3F7AD] ${
              pathname === "/" ? "text-[#D3F7AD]" : ""
            }`}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/products"
            className={`block py-2 px-3 hover:text-[#D3F7AD] ${
              pathname === "/products" ? "text-[#D3F7AD]" : ""
            }`}
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="/blog"
            className={`block py-2 px-3 hover:text-[#D3F7AD] ${
              pathname === "/blog" ? "text-[#D3F7AD]" : ""
            }`}
          >
            Blog
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
