import Image from "next/image";
import React from "react";

const Author = ({ author }) => {
  return (
    <div className=" dark:bg-dark-card bg-light-card relative mt-20 mb-8 rounded-lg py-8 px-4 text-center shadow-md lg:p-12">
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
      <h3 className="dark:text-dark-headline text-light-headline mt-4 mb-4 text-xl font-bold">
        {author.name}
      </h3>
      <p className="text-ls dark:text-dark-subheadline text-light-subheadline">{author.bio}</p>
    </div>
  );
};

export default Author;
