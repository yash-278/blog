import Image from "next/image";
import React from "react";

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 lg:p-12 py-8 px-4 relative rounded-lg bg-gray-800 {bg-opacity-20}">
      <div className="-top-14 absolute left-0 right-0">
        <Image
          unoptimized
          // loader={grpahCMSImageLoader}
          alt={author.name}
          height="100px"
          width="100px"
          className="align-middle rounded-full"
          src={author.photo.url}
        />
      </div>
      <h3 className="mt-4 mb-4 text-xl font-bold text-white">{author.name}</h3>
      <p className="text-ls text-white">{author.bio}</p>
    </div>
  );
};

export default Author;
