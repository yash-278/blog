/* eslint-disable @next/next/no-img-element */
import moment from "moment";
import React, { useEffect } from "react";
const prism = require("prismjs");
require("prismjs/components/prism-jsx.min");
import "prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js";

const PostDetail = ({ post }) => {
  useEffect(() => {
    prism.highlightAll();
    console.log("I Run");
  });

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }

      if (obj.code) {
        return (
          <code key={index} className="bg-light-bg rounded px-1 dark:bg-gray-700">
            {text}
          </code>
        );
      }
    }

    switch (type) {
      case "code-block":
        return (
          <div className="relative ">
            <label className="bg-light-button absolute right-0 m-2 rounded p-2 uppercase dark:bg-teal-700">
              JSX
            </label>
            <pre className="rounded border-2 border-gray-500 py-2 text-sm md:text-xl" key={index}>
              <code className={`language-jsx`}>
                {modifiedText.map((item, i) => (
                  <React.Fragment key={i}>{item}</React.Fragment>
                ))}
              </code>
            </pre>
          </div>
        );

      // Dynamic Highlighting of Code Block if a classname is mentioned in GraphCMS post
      case "class":
        const modifiedCode = obj.children.map(({ children }) => {
          return [children[0].text];
        });

        return (
          <div className="relative">
            <label className="bg-light-button absolute right-0 m-2 rounded p-2 uppercase dark:bg-teal-700">
              {obj.className.slice(9)}
            </label>
            <pre className="rounded border-2 border-gray-500  py-2 text-sm md:text-xl" key={index}>
              <code className={`${obj.className} bg-gray-900`}>
                {modifiedCode.map((item, i) => (
                  <React.Fragment key={i}>{item}</React.Fragment>
                ))}
              </code>
            </pre>
          </div>
        );
      case "heading-two":
        return (
          <h2 key={index} className="mb-4 text-2xl font-semibold lg:text-3xl">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        );
      case "heading-three":
        return (
          <h3 key={index} className="mb-4 text-xl font-semibold lg:text-2xl">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8 text-lg font-medium">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="mb-4 text-lg font-semibold lg:text-xl">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img key={index} alt={obj.title} height={obj.height} width={obj.width} src={obj.src} />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div className="dark:bg-dark-card bg-light-card relative z-20 mb-8 rounded-lg pb-12  shadow-md lg:p-8">
        <div className="dark:text-dark-subheadline text-light-subheadline relative mb-6 overflow-hidden shadow-md">
          <img
            src={post.featuredImage.url}
            alt=""
            className="h-full w-full rounded-t-lg object-cover object-top shadow-lg lg:rounded-lg"
          />
        </div>
        <div className="px-4 lg:px-0">
          <div className="mb-8 flex w-full items-center">
            <div className="mr-8 hidden items-center justify-center md:flex lg:mb-0 lg:w-auto">
              <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="rounded-full align-middle"
                src={post.author.photo.url}
              />
              <p className="dark:text-dark-subheadline text-light-subheadline ml-2 inline align-middle text-lg font-medium">
                {post.author.name}
              </p>
            </div>
            <div className="dark:text-dark-subheadline text-light-subheadline font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="dark:text-dark-button text-light-button mr-2 inline h-6 w-6"
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
              <span className="align-middle">{moment(post.createdAt).format("MMM DD, YYYY")}</span>
            </div>
          </div>
          <h1 className="dark:text-dark-headline text-light-headline mb-8 text-3xl font-semibold">
            {post.title}
          </h1>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );
            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
    </>
  );
};

export default PostDetail;
