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
    <div className="bg-light-card dark:bg-dark-card mb-8 rounded-lg px-4 py-8 shadow-md lg:p-8 lg:pb-12">
      <h3 className="dark:text-dark-headline text-light-headline mb-8 border-b border-gray-500 pb-4 text-xl font-semibold">
        Leave a Reply
      </h3>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <textarea
          ref={commentEl}
          className="bg-light-bg text-light-subheadline focus:ring-light-button h-40 w-full  rounded-lg p-4 outline-none transition duration-300 focus:ring-2 dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-indigo-700"
          name="comment"
          placeholder="Comment"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <input
          type="text"
          ref={nameEl}
          className="bg-light-bg text-light-subheadline focus:ring-light-button w-full rounded-lg px-4 py-2 outline-none transition duration-300 focus:ring-2 dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-indigo-700"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          ref={emailEl}
          className="bg-light-bg text-light-subheadline  focus:ring-light-button w-full rounded-lg px-4 py-2 outline-none transition duration-300 focus:ring-2 dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-indigo-700"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <div>
          <input ref={storeDataEl} type="checkbox" id="storeData" name="storeData" value="true" />
          <label
            className="text-light-subheadline ml-2 cursor-pointer dark:text-gray-300"
            htmlFor="storeData"
          >
            Save my name, email in this browser for the next time I comment.
          </label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields are mandatory</p>}
      <div className="mt-8">
        <button
          type="button"
          onClick={handlePostSubmission}
          className="ease bg-light-button inline-block cursor-pointer rounded-md px-8 py-3 text-lg font-semibold tracking-wider text-white transition duration-500 hover:bg-red-700 dark:bg-indigo-600 dark:text-white dark:hover:bg-teal-500"
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
