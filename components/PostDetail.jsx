/* eslint-disable @next/next/no-img-element */
import moment from "moment";
import React, { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

const PostDetail = ({ post }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

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
          <code key={index} className="hljs">
            {text}
          </code>
        );
      }
    }

    switch (type) {
      case "code-block":
        return (
          <pre className="py-2 text-sm md:text-xl" key={index}>
            <code>
              {modifiedText.map((item, i) => (
                <React.Fragment key={i}>{item}</React.Fragment>
              ))}
            </code>
          </pre>
        );
      case "heading-two":
        return (
          <h2 key={index} className="lg:text-3xl text-2xl text-gray-100 mb-4 font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        );
      case "heading-three":
        return (
          <h3 key={index} className="mb-4 text-xl lg:text-2xl font-semibold">
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
          <h4 key={index} className="text-lg lg:text-xl mb-4 font-semibold">
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
      <div className="lg:p-8 pb-12 mb-8 text-gray-300 bg-gray-800 rounded-lg shadow-lg">
        <div className="relative mb-6 overflow-hidden shadow-md">
          <img
            src={post.featuredImage.url}
            alt=""
            className="lg:rounded-lg object-cover object-top w-full h-full rounded-t-lg shadow-lg"
          />
        </div>
        <div className="lg:px-0 px-4">
          <div className="flex items-center w-full mb-8">
            <div className="md:flex lg:mb-0 lg:w-auto items-center justify-center hidden mr-8">
              <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author.photo.url}
              />
              <p className="inline ml-2 text-lg font-medium text-gray-300 align-middle">
                {post.author.name}
              </p>
            </div>
            <div className="font-medium text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-6 h-6 mr-2 text-teal-500"
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
          <h1 className="mb-8 text-3xl font-semibold text-white">{post.title}</h1>
          {console.log(post.content.raw.children)}
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