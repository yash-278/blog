import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className=" bg-light-card dark:bg-dark-card mb-8 rounded-md p-4 shadow-md lg:p-8">
      <h3 className="dark:text-dark-headline text-light-headline mb-8 border-b-2 border-gray-700 pb-4 text-xl font-semibold tracking-wider">
        Categories
      </h3>

      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`} passHref>
          <span className="dark:text-dark-button-text text-dark-button-text bg-light-button dark:bg-dark-button mb-1 mr-3 cursor-pointer rounded-md px-2 py-1">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
