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
    <div className="mb-8 rounded-lg bg-gray-800 px-4 py-8 shadow-lg lg:p-8 lg:pb-12">
      <h3 className="mb-8 border-b border-gray-500 pb-4 text-xl font-semibold">Leave a Reply</h3>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <textarea
          // value={formData.comment}
          // onChange={onInputChange}
          ref={commentEl}
          className="h-40 w-full rounded-lg bg-gray-700 p-4 text-gray-300 outline-none transition duration-300 focus:ring-2 focus:ring-indigo-700"
          name="comment"
          placeholder="Comment"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <input
          type="text"
          // value={formData.name}
          // onChange={onInputChange}
          ref={nameEl}
          className="w-full rounded-lg bg-gray-700 px-4 py-2 text-gray-300 outline-none transition duration-300 focus:ring-2 focus:ring-indigo-700"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          // value={formData.email}
          // onChange={onInputChange}
          ref={emailEl}
          className="w-full rounded-lg bg-gray-700 px-4 py-2 text-gray-300 outline-none transition duration-300 focus:ring-2 focus:ring-indigo-700"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4">
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
          <label className="ml-2 cursor-pointer text-gray-300" htmlFor="storeData">
            Save my name, email in this browser for the next time I comment.
          </label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields are mandatory</p>}
      <div className="mt-8">
        <button
          type="button"
          onClick={handlePostSubmission}
          className="ease inline-block cursor-pointer rounded-md bg-indigo-600 px-8 py-3 text-lg font-medium text-white transition duration-500 hover:bg-teal-500"
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
