import React from "react";
import { Link } from "react-router-dom";

const Quiz = ({ info }) => {
  console.log(info);
  const { id, name, logo, total } = info;
  return (
    <>
      <div className="max-w-full p-6 rounded-md border dark:bg-gray-900 dark:text-gray-50">
        <img src={logo} alt="logo" className="w-full bg-green-100" />
        <div className="mt-6 mb-0">
          <span className="block text-xs tracking-widest uppercase dark:text-violet-400 font-light">
            Topic
          </span>
          <h2 className="text-xl font-semibold tracking-wide p-1 mt-0">
            {name}
          </h2>
        </div>
        <p className="text-md font-thin mb-7">Total question - {total}</p>
        <Link className="w-full" to={`/singleQuiz/${id}`}>
          <button className="w-full bg-lime-700 rounded-full text-white px-1 py-2">
            Start test
          </button>
        </Link>
      </div>
    </>
  );
};

export default Quiz;
