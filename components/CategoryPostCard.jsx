/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const CategoryPostCard = ({ post }) => {
  return (
    <div className="group  dark:bg-dark-card bg-light-card mb-8 max-w-md gap-4 rounded-lg p-3 shadow-md">
      <div className="relative mb-4 overflow-hidden rounded-lg pb-32 shadow-md ">
        <img
          alt={post.title}
          src={post.featuredImage.url}
          className="absolute h-full w-full  object-cover object-center"
        />
      </div>

      <p className=" dark:group-hover:text-dark-button group-hover:text-light-button dark:text-dark-headline text-light-headline cursor-pointer pb-2 text-left text-base font-semibold tracking-wide transition duration-500 xl:text-2xl">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </p>
      <div className="dark:text-dark-subheadline text-light-subheadline block w-full text-left">
        {post.excerpt}
      </div>
      <div className="mt-2 items-center justify-between space-y-3 md:space-y-0">
        <Link href={`/post/${post.slug}`} passHref>
          <div className="bottom-0 flex cursor-pointer items-center justify-start ">
            <div className="peer dark:group-hover:text-dark-button group-hover:text-light-button h-min rounded-md py-2 pr-3 align-middle text-base font-semibold tracking-wide transition duration-300 hover:scale-105">
              Continue Reading
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="dark:text-dark-button text-light-button mr-2 hidden h-6 w-6 transition duration-1000 group-hover:inline"
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
  );
};

export default CategoryPostCard;
