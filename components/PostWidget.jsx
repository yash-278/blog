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
    <div className=" lg:p-8 p-4 mb-8 bg-gray-800 {border-2 border-gray-700} rounded-md shadow-lg">
      <h3 className="pb-4 mb-8 text-xl font-semibold tracking-wider text-white border-b-2 border-gray-700">
        {slug ? "Related Posts" : "Featured Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <Link href={`/post/${post.slug}`} key={post.title} passHref>
          <div key={post.title} className="group flex items-center w-full mb-4 cursor-pointer">
            <div className="flex-none w-20">
              <img
                src={post.featuredImage.url}
                alt={post.title}
                className="align-middle rounded-md"
                // height="60px"
                // width="60px"
              />
            </div>
            <div className="flex-row ml-4 text-gray-200">
              <p className=" text-xs text-gray-400">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>
              <div className="group-hover:text-indigo-300 transition duration-300">
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
