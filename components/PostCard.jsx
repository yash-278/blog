/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import moment from "moment";
import Link from "next/link";
import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="group {border-2 border-gray-700} mb-8 gap-4 rounded-lg bg-gray-800 p-3 text-white shadow-lg xl:flex">
      <div className="relative mb-4 overflow-hidden pb-32 shadow-md xl:mb-0 xl:w-2/6">
        <motion.img
          key={post.slug}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          alt={post.title}
          src={post.featuredImage.url}
          className="absolute h-full w-full rounded-lg object-cover object-center shadow-lg"
        />
      </div>
      <div className="xl:w-4/6">
        <p className=" cursor-pointer pb-2 text-left text-base font-semibold tracking-wide text-gray-100 transition duration-500 group-hover:text-indigo-500 xl:text-2xl">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </p>
        <div className="block w-full items-center justify-center text-left text-gray-300 xl:flex">
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
            <p className="ml-2 inline align-middle text-base font-medium text-gray-300">
              {post.author.name}
            </p>
            <div className="mx-3 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 inline h-6 w-6 align-middle text-indigo-500"
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
              <span className="align-middle text-base text-gray-300">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>

          <Link href={`/post/${post.slug}`} passHref>
            <div className="flex cursor-pointer items-center justify-end md:justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 hidden h-5 w-5 text-indigo-500 transition duration-1000 group-hover:inline"
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
              <div className="peer h-min rounded-md p-2 align-middle text-sm font-semibold tracking-wide transition duration-300 hover:scale-105 group-hover:text-indigo-500">
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
