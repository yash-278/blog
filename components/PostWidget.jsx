/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => setRelatedPosts(result));
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [categories, slug]);

  return (
    <div className=" p-8 mb-8 bg-gray-800 {border-2 border-gray-700} rounded-md shadow-lg">
      <h3 className="pb-4 mb-8 text-xl font-semibold tracking-wider border-b-2 border-gray-700">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="flex-none w-20">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              className="align-middle rounded-md"
              // height="60px"
              // width="60px"
            />
          </div>
          <div className="flex-row ml-4">
            <p className="text-xs text-gray-300">{moment(post.createdAt).format("MMM DD, YYYY")}</p>
            <Link href={`/post/${post.slug}`} key={post.title}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
