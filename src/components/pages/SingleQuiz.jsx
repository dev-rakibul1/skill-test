import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizBox from "./QuizBox";

const SingleQuiz = () => {
  const single = useLoaderData();
  const singleData = single.data;
  console.log(singleData);
  return (
    <div>
      <QuizBox singleData={singleData} />
    </div>
  );
};

export default SingleQuiz;
