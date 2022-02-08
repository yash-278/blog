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
    <div className="dark:bg-dark-card bg-light-card mb-8 rounded-md p-4 shadow-md lg:p-8">
      <h3 className="dark:text-dark-headline text-light-headline mb-8 border-b-2 border-gray-700 pb-4 text-xl font-semibold tracking-wider">
        {slug ? "Related Posts" : "Featured Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <Link
          href={{ pathname: "/post/[slug]", query: { slug: post.slug } }}
          key={post.title}
          passHref
        >
          <div key={post.title} className="group mb-4 flex w-full cursor-pointer items-center">
            <div className="w-20 flex-none">
              <img
                src={post.featuredImage.url}
                alt={post.title}
                className="rounded-md align-middle"
              />
            </div>
            <div className="ml-4 flex-row ">
              <p className=" dark:text-dark-subheadline text-light-subheadline text-xs">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>
              <div className="dark:text-dark-headline text-light-headline dark:group-hover:text-dark-button group-hover:text-light-button transition duration-300">
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
