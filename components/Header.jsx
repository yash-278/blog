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
    <div className="lg:mb-8 container px-10 py-8 mx-auto text-white">
      <div className="py8 inline-block w-full">
        <div className="md:float-left block">
          <Link href="/" passHref>
            <span className="text-4xl font-bold text-indigo-500 cursor-pointer">Yash Kadam</span>
          </Link>
        </div>

        <div className="md:float-left md:contents hidden">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`} passHref>
              <span className="md:float-right mt-2 ml-8 font-semibold align-middle cursor-pointer">
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
