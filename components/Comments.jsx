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
        <div className="lg:p-8 lg:pb-12 px-4 py-8 mb-8 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="pb-4 mb-8 text-xl font-semibold border-b border-gray-400">
            {comments.length} Comments
          </h3>
          {comments.map((comment, index) => (
            <div key={index} className="pb-4 mb-4 border-b border-gray-400">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{" "}
                {moment(comment.createdAt).format("MMM DD, YYYY")}
              </p>
              <p className="w-full text-gray-300 whitespace-pre-line">{parse(comment.comment)}</p>
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
