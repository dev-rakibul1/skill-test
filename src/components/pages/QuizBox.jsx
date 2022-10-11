import React from "react";
import QuizItem from "./QuizItem";
import Sidebar from "./Sidebar";

const QuizBox = ({ singleData }) => {
  const { name } = singleData;
  const quizQuestion = singleData.questions;
  //   console.log(quizQuestion);

  const onCLickHandler = (ans) => {
    console.log("click", ans);
  };

  return (
    <div className="md:w-[90%] mx-auto md:flex gap-4 px-2">
      <div className="md:w-[80%] px-4 mt-10 grow-[9]">
        <h1 className="font-bold text-2xl text-center">Quiz of {name}</h1>

        {quizQuestion.map((items) => (
          <QuizItem
            key={items.id}
            items={items}
            onCLickHandler={onCLickHandler}
          />
        ))}
      </div>

      {/* sidebar */}
      <div className="md:w-[20%] grow-[3]">
        <Sidebar />
      </div>
    </div>
  );
};

export default QuizBox;
