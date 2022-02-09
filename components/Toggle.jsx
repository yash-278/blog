import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";

const Toggle = ({ mobile }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className={` ${mobile ? "m-4 sm:inline-block" : "hidden sm:inline-block"} `}>
      <button
        className=" flex h-7 w-12 items-center rounded-full bg-gray-200  shadow transition duration-300 focus:outline-none"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <div
          id="switch-toggle"
          className="relative h-8 w-8 -translate-x-2 transform rounded-full bg-yellow-500 p-1 text-white transition duration-500 dark:translate-x-full dark:bg-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="dark:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="hidden dark:block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default Toggle;
