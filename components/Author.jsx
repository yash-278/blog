import Image from "next/image";
import React from "react";

const Author = ({ author }) => {
  return (
    <div className="{bg-opacity-20} relative mt-20 mb-8 rounded-lg bg-gray-800 py-8 px-4 text-center lg:p-12">
      <div className="absolute -top-14 left-0 right-0">
        <Image
          unoptimized
          // loader={grpahCMSImageLoader}
          alt={author.name}
          height="100px"
          width="100px"
          className="rounded-full align-middle"
          src={author.photo.url}
        />
      </div>
      <h3 className="mt-4 mb-4 text-xl font-bold text-white">{author.name}</h3>
      <p className="text-ls text-white">{author.bio}</p>
    </div>
  );
};

export default Author;
