import React, { useEffect, useState } from "react";
import moment from "moment";
import parse from "html-react-parser";

import { getComments } from "../services";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, [slug]);

  return (
    <>
      {comments.length > 0 && (
        <div className="mb-8 rounded-lg bg-gray-800 px-4 py-8 shadow-lg lg:p-8 lg:pb-12">
          <h3 className="mb-8 border-b border-gray-400 pb-4 text-xl font-semibold">
            {comments.length} Comments
          </h3>
          {comments.map((comment, index) => (
            <div key={index} className="mb-4 border-b border-gray-400 pb-4">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{" "}
                {moment(comment.createdAt).format("MMM DD, YYYY")}
              </p>
              <p className="w-full whitespace-pre-line text-gray-300">{parse(comment.comment)}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
// import React from "react";

// const Comments = () => {
//   return (
//     <div>
//       <h1> Comments</h1>
//     </div>
//   );
// };

// export default Comments;
