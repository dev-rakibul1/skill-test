import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizBox from "./QuizBox";
import Sidebar from "./Sidebar";

const SingleQuiz = () => {
  const single = useLoaderData();
  const singleData = single.data;
  const newData = singleData.questions;
  const { name } = singleData;
  // console.log(newData);
  return (
    <>
      <div className="md:w-[90%] mx-auto md:flex gap-4 px-2">
        <div className="md:w-[80%] px-4 mt-10 grow-[9]">
          <h1 className=" mt-10 mb-7 font-bold text-2xl text-center">
            Quiz of {name}
          </h1>
          {newData.map((singleData) => (
            <QuizBox
              singleData={singleData}
              key={singleData.id}
              topicName={single.data}
            />
          ))}
        </div>

        {/* sidebar */}
        <div className="md:w-[20%] grow-[3]">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default SingleQuiz;
