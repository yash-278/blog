/* eslint-disable @next/next/no-img-element */
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="group xl:flex gap-4 p-3 mb-8 text-white bg-gray-800 {border-2 border-gray-700} rounded-lg shadow-lg">
      <div className="xl:w-2/6 xl:mb-0 relative pb-32 mb-4 overflow-hidden shadow-md">
        <img
          alt={post.title}
          src={post.featuredImage.url}
          className="absolute object-cover object-center w-full h-full rounded-lg shadow-lg"
        />
      </div>
      <div className="xl:w-4/6">
        <p className=" xl:text-2xl group-hover:text-indigo-500 pb-2 text-base font-semibold tracking-wide text-left text-gray-100 transition duration-500 cursor-pointer">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </p>
        <div className="xl:flex items-center justify-center block w-full text-left text-gray-300">
          {post.excerpt}
        </div>
        <div className="md:flex md:space-y-0 items-center justify-between mt-2 space-y-3">
          <div className="md:w-auto flex items-center w-full mb-0">
            <img
              className="align-middle rounded-full"
              src={post.author.photo.url}
              alt={post.author.name}
              height="40px"
              width="40px"
            />
            <p className="inline ml-2 text-base font-medium text-gray-300 align-middle">
              {post.author.name}
            </p>
            <div className="mx-3 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-6 h-6 mr-2 text-indigo-500 align-middle"
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
              <span className="text-base text-gray-300 align-middle">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>

          <Link href={`/post/${post.slug}`} passHref>
            <div className="md:justify-center flex items-center justify-end cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:inline hidden w-6 h-6 mr-2 text-indigo-500 transition duration-1000"
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
              <div className="group-hover:text-indigo-500 peer h-min hover:scale-105 p-2 text-base font-semibold tracking-wide align-middle transition duration-300 rounded-md">
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
