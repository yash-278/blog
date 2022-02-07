/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const CategoryPostCard = ({ post }) => {
  return (
    <div className="group  mb-8 max-w-md gap-4 rounded-lg bg-gray-800 p-3 text-white shadow-lg ">
      <div className="relative mb-4 overflow-hidden pb-32 shadow-md ">
        <img
          alt={post.title}
          src={post.featuredImage.url}
          className="absolute h-full w-full rounded-lg object-cover object-center shadow-lg"
        />
      </div>
      <div className="">
        <p className=" cursor-pointer pb-2 text-left text-base font-semibold tracking-wide text-gray-100 transition duration-500 group-hover:text-indigo-500 xl:text-2xl">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </p>
        <div className="block w-full text-left text-gray-300">{post.excerpt}</div>
        <div className="mt-2 items-center justify-between space-y-3 md:space-y-0">
          <Link href={`/post/${post.slug}`} passHref>
            <div className="bottom-0 flex cursor-pointer items-center justify-start ">
              <div className="peer h-min rounded-md py-2 pr-3 align-middle text-base font-semibold tracking-wide transition duration-300 hover:scale-105 group-hover:text-indigo-500">
                Continue Reading
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 hidden h-6 w-6 text-indigo-500 transition duration-1000 group-hover:inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryPostCard;
