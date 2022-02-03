import React, { useEffect, useRef, useState } from "react";
import { submitComment } from "../services";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name");
    emailEl.current.value = window.localStorage.getItem("email");
  }, []);

  const handlePostSubmission = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="p-8 pb-12 mb-8 bg-gray-800 rounded-lg shadow-lg">
      <h3 className="pb-4 mb-8 text-xl font-semibold border-b border-gray-500">Leave a Reply</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          // value={formData.comment}
          // onChange={onInputChange}
          ref={commentEl}
          className="focus:ring-2 focus:ring-teal-700 w-full h-40 p-4 text-gray-300 transition duration-300 bg-gray-700 rounded-lg outline-none"
          name="comment"
          placeholder="Comment"
        />
      </div>
      <div className="lg:grid-cols-2 grid grid-cols-1 gap-4 mb-4">
        <input
          type="text"
          // value={formData.name}
          // onChange={onInputChange}
          ref={nameEl}
          className="focus:ring-2 focus:ring-teal-700 w-full px-4 py-2 text-gray-300 transition duration-300 bg-gray-700 rounded-lg outline-none"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          // value={formData.email}
          // onChange={onInputChange}
          ref={emailEl}
          className="focus:ring-2 focus:ring-teal-700 w-full px-4 py-2 text-gray-300 transition duration-300 bg-gray-700 rounded-lg outline-none"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            // checked={formData.storeData}
            // onChange={onInputChange}
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label className="ml-2 text-gray-300 cursor-pointer" htmlFor="storeData">
            Save my name, email in this browser for the next time I comment.
          </label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields are mandatory</p>}
      <div className="mt-8">
        <button
          type="button"
          onClick={handlePostSubmission}
          className="ease hover:bg-indigo-500 inline-block px-8 py-3 text-lg font-medium text-white transition duration-500 bg-teal-600 rounded-md cursor-pointer"
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="float-right mt-3 text-xl font-semibold text-green-500">
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
