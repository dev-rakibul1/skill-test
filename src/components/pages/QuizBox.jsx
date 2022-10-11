import React from "react";
import QuizItem from "./QuizItem";

const QuizBox = ({ singleData }) => {
  const { name } = singleData;
  const quizQuestion = singleData.questions;
  //   console.log(quizQuestion);
  return (
    <div className="w-[60%] mx-auto px-4 mt-10">
      <h1 className="font-bold text-2xl text-center">{name}</h1>
      {quizQuestion.map((items) => (
        <QuizItem key={items.id} items={items} />
      ))}
    </div>
  );
};

export default QuizBox;
