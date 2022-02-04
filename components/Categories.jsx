import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className=" lg:p-8 p-4 mb-8 bg-gray-800 {border-2 border-gray-700} rounded-md shadow-lg">
      <h3 className="pb-4 mb-8 text-xl font-semibold tracking-wider text-white border-b-2 border-gray-700">
        Categories
      </h3>

      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`} passHref>
          <span className="px-2 py-1 mb-1 mr-3 text-white bg-indigo-700 rounded-md cursor-pointer">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
