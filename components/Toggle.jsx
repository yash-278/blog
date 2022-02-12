import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";

const Toggle = ({ mobile }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className={` ${mobile ? "sm:inline-block" : "hidden sm:inline-block"} `}>
      <button
        className="relative inline-flex items-center rounded-full bg-cyan-500 py-1.5 px-2 text-slate-400 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-slate-700"
        id="headlessui-switch-5"
        role="switch"
        type="button"
        tabIndex="0"
        aria-checked="true"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <span className="sr-only"></span>
        <svg
          width="24"
          height="24"
          fill="none"
          aria-hidden="true"
          className="scale-0 transform transition duration-300 dark:scale-100"
        >
          <path
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <svg
          width="24"
          height="24"
          fill="none"
          aria-hidden="true"
          className="ml-3.5 scale-100 transform text-white transition duration-300 dark:scale-0"
        >
          <path
            d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <span className="absolute top-0.5 left-0.5 flex h-8 w-8 translate-x-0 transform items-center justify-center rounded-full bg-white transition duration-500 dark:translate-x-[2.625rem]">
          <svg
            width="24"
            height="24"
            fill="none"
            aria-hidden="true"
            className="flex-none scale-100 transform text-cyan-500 opacity-100 transition duration-500 dark:opacity-0"
          >
            <path
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <svg
            width="24"
            height="24"
            fill="none"
            aria-hidden="true"
            className="-ml-6 flex-none scale-100 transform text-slate-700 opacity-0 transition duration-500 dark:opacity-100"
          >
            <path
              d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Toggle;
