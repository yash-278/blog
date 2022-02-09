import React, { useState, useEffect } from "react";
import { Dropdown, Toggle } from ".";
import { getCategories } from "../services";

const MobileNav = ({ toggle }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div
      className={`sidebar absolute inset-y-0 top-0 left-0 ${
        toggle ? `-translate-x-0` : `-translate-x-full`
      } dark:bg-dark-button bg-light-headline z-30 w-64 transform space-y-6 py-7 px-2 text-blue-100 transition duration-200 ease-in-out`}
    >
      {/* <!-- logo --> */}
      <a href="#" className="flex items-center space-x-2 px-4 text-white">
        <svg
          className="h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
        <span className="text-2xl font-extrabold">Yash Kadam</span>
      </a>

      {/* <!-- nav --> */}
      <nav className="space-y-2">
        <a
          href="#"
          className="hover:bg-light-button dark:hover:bg-dark-headline dark:hover:text-dark-bg block rounded py-2.5 px-4 transition duration-200"
        >
          Home
        </a>
        <a
          href=""
          className="hover:bg-light-button dark:hover:bg-dark-headline dark:hover:text-dark-bg block rounded py-2.5 px-4 transition duration-200"
        >
          GitHub
        </a>
        <a
          href=""
          className="hover:bg-light-button dark:hover:bg-dark-headline dark:hover:text-dark-bg block rounded py-2.5 px-4 transition duration-200"
        >
          Portfolio
        </a>
        <Dropdown categories={categories} mobile={true} />
        <a
          href=""
          className="hover:bg-light-button dark:hover:bg-dark-headline dark:hover:text-dark-bg block rounded py-2.5 px-4 transition duration-200 hover:text-white"
        >
          Pricing
        </a>
      </nav>
      <Toggle mobile={true} />
    </div>
  );
};

export default MobileNav;
