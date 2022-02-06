import React, { useState, useEffect } from "react";
import { getCategories } from "../services";

const categories = [
  { name: "React", slug: "react" },
  { name: "Web Development", slug: "web-dev" },
];

import Link from "next/link";
const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container mx-auto px-10 py-8 text-white lg:mb-8">
      <div className="py8 inline-block w-full">
        <div className="block md:float-left">
          <Link href="/" passHref>
            <span className="cursor-pointer text-4xl font-bold text-indigo-500">Yash Kadam</span>
          </Link>
        </div>

        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`} passHref>
              <span className="mt-2 ml-8 cursor-pointer align-middle font-semibold md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
