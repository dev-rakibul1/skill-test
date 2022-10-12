import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast } from "react-toastify";

const QuizItem = ({ items, onCLickHandler }) => {
  const { correctAnswer, id, question, options } = items;
  //   console.log(items);

  // console.log(selected);
  // const onCLickHandler = (event) => {
  //   const correct = correctAnswer;
  //   const userAnswer = event.target.value;
  //   correct === userAnswer ? truthy.push(correct) : falsy.push(userAnswer);

  //   console.log("true", truthy);
  //   console.log("false", falsy);

  //   if (correct === userAnswer) {
  //     toast.success("Wow correct answer", { autoClose: 1500 });
  //     // setSelected(userAnswer);
  //   } else {
  //     toast.error("Incorrect answer", { autoClose: 1500 });
  //   }
  // };

  const onclickCorrectAnswerHandler = () => {
    toast.info(`Correct ans: ${correctAnswer}`, { autoClose: 3500 });
  };

  return (
    <div className="p-2">
      <article className="p-2 border border-gray-300 rounded-md bg-white">
        <div className="flex items-center justify-between">
          <h1 className="text-gray-600 font-semibold text-xl w-[95%]">
            {question}
          </h1>
          <span
            className="w-[5%] cursor-pointer"
            onClick={onclickCorrectAnswerHandler}
          >
            <FontAwesomeIcon icon={faEye} />
          </span>
        </div>
        <ul className=" p-2">
          <li className="flex items-center gap-3">
            <input
              type="radio"
              id=""
              name={options[0]}
              value={options[0]}
              onChange={() => onCLickHandler(items, options[0])}
            />
            1. {options[0]}
          </li>
          <li>
            <input
              type="radio"
              id=""
              name={options[0]}
              value={options[1]}
              onChange={() => onCLickHandler(items, options[1])}
            />
            2. {options[1]}
          </li>
          <li>
            <input
              type="radio"
              id=""
              name={options[0]}
              value={options[2]}
              onChange={() => onCLickHandler(items, options[2])}
            />
            3. {options[2]}
          </li>
          <li>
            <input
              type="radio"
              id=""
              name={options[0]}
              value={options[3]}
              onChange={() => onCLickHandler(items, options[3])}
            />
            4. {options[3]}
          </li>
        </ul>
      </article>
    </div>
  );
};

export default QuizItem;
