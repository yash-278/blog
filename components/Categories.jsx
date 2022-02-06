import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className=" {border-2 border-gray-700} mb-8 rounded-md bg-gray-800 p-4 shadow-lg lg:p-8">
      <h3 className="mb-8 border-b-2 border-gray-700 pb-4 text-xl font-semibold tracking-wider text-white">
        Categories
      </h3>

      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`} passHref>
          <span className="mb-1 mr-3 cursor-pointer rounded-md bg-indigo-700 px-2 py-1 text-white">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
