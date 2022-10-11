import React from "react";
import { Link } from "react-router-dom";

const Quiz = ({ info }) => {
  const { id, name, logo } = info;
  return (
    <Link to={`/singleQuiz/${id}`}>
      <div className="max-w-xs p-6 rounded-md border dark:bg-gray-900 dark:text-gray-50">
        <img
          src={logo}
          alt="logo"
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs tracking-widest uppercase dark:text-violet-400 font-light">
            Topic
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Quiz;
