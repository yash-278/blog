/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getFeaturedPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => setRelatedPosts(result));
    } else {
      getFeaturedPosts().then((result) => setRelatedPosts(result));
    }
  }, [categories, slug]);

  return (
    <div className=" {border-2 border-gray-700} mb-8 rounded-md bg-gray-800 p-4 shadow-lg lg:p-8">
      <h3 className="mb-8 border-b-2 border-gray-700 pb-4 text-xl font-semibold tracking-wider text-white">
        {slug ? "Related Posts" : "Featured Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <Link href={`/post/${post.slug}`} key={post.title} passHref>
          <div key={post.title} className="group mb-4 flex w-full cursor-pointer items-center">
            <div className="w-20 flex-none">
              <img
                src={post.featuredImage.url}
                alt={post.title}
                className="rounded-md align-middle"
              />
            </div>
            <div className="ml-4 flex-row text-gray-200">
              <p className=" text-xs text-gray-400">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>
              <div className="transition duration-300 group-hover:text-indigo-300">
                {post.title}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostWidget;
