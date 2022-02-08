/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown({ categories }) {
  return (
    <Menu as="div" className="relative z-10 inline-block text-left">
      <div>
        <Menu.Button className="dark:hover:bg-dark-button dark:text-dark-headline hover:bg-light-button text-light-button-text inline-flex w-full justify-center rounded-md bg-red-400 px-4 py-2 text-base font-semibold shadow-sm transition duration-200  dark:bg-gray-700 ">
          Posts
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="bg-light-card absolute right-0 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700">
          <div className="py-1">
            {categories.map((category) => (
              <Menu.Item key={category.slug}>
                {({ active }) => (
                  <a
                    href={`/category/${category.slug}`}
                    className={classNames(
                      active
                        ? " dark:text-dark-button text-light-button"
                        : "text-light-button-text dark:text-dark-button-text",
                      "block px-4 py-2 text-base font-semibold "
                    )}
                  >
                    {category.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
