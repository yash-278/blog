/* eslint-disable @next/next/no-img-element */
import moment from "moment";
import Link from "next/link";
import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="group bg-light-card dark:bg-dark-card  mb-8 gap-4 rounded-lg p-3 shadow-md xl:flex">
      <div className="relative mb-4 overflow-hidden pb-32 shadow-md xl:mb-0 xl:w-2/6">
        <img
          alt={post.title}
          src={post.featuredImage.url}
          className="absolute h-full w-full rounded-lg object-cover object-center shadow-md"
        />
      </div>
      <div className="xl:w-4/6">
        <p className=" dark:text-dark-headline text-light-headline dark:group-hover:text-dark-button group-hover:text-light-button cursor-pointer pb-2 text-left text-base font-semibold tracking-wide transition duration-500 xl:text-2xl">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </p>
        <div className="dark:text-dark-subheadline text-light-subheadline block w-full items-center justify-center text-left xl:flex">
          {post.excerpt}
        </div>
        <div className="mt-2 items-center justify-between space-y-3 md:flex md:space-y-0">
          <div className="mb-0 flex w-full items-center md:w-auto">
            <img
              className="rounded-full align-middle"
              src={post.author.photo.url}
              alt={post.author.name}
              height="40px"
              width="40px"
            />
            <p className="dark:text-dark-subheadline text-light-subheadline ml-2 inline align-middle text-base font-medium">
              {post.author.name}
            </p>
            <div className="mx-3 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="dark:text-dark-button text-light-button mr-2 inline h-6 w-6 align-middle"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="dark:text-dark-subheadline text-light-subheadline align-middle text-base">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>

          <Link href={`/post/${post.slug}`} passHref>
            <div className="flex cursor-pointer items-center justify-end md:justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="dark:group-hover:text-dark-button mr-2 hidden h-5 w-5 transition duration-1000 group-hover:inline"
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
              <div className="peer dark:group-hover:text-dark-button group-hover:text-light-button h-min rounded-md p-2 align-middle text-sm font-semibold tracking-wide transition duration-300 hover:scale-105">
                Continue Reading
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
