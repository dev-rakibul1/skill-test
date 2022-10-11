import React from "react";

const QuizItem = ({ items }) => {
  const { id, question, options } = items;
  console.log(items);
  return (
    <div className="p-2">
      <article className="p-2 border border-gray-300 rounded-md">
        <h1 className="text-gray-600 font-semibold text-xl">{question}</h1>
        <ul className=" p-2">
          <li className="flex items-center gap-3">
            <input type="checkbox" className=" rounded-full w-4 h-4" />
            1. {options[0]}
          </li>
          <li className="flex items-center gap-3">
            <input type="checkbox" className=" rounded-full w-4 h-4" />
            2. {options[1]}
          </li>
          <li className="flex items-center gap-3">
            <input type="checkbox" className=" rounded-full w-4 h-4" />
            3. {options[2]}
          </li>
          <li className="flex items-center gap-3">
            <input type="checkbox" className=" rounded-full w-4 h-4" />
            4. {options[3]}
          </li>
        </ul>
      </article>
    </div>
  );
};

export default QuizItem;
