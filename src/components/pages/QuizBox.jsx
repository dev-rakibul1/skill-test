import React from "react";
import { toast } from "react-toastify";
import QuizItem from "./QuizItem";

const QuizBox = ({ singleData }) => {
  const { correctAnswer } = singleData;
  // const includeData = singleData.questions;
  // const [quiz, setQuiz] = useState([singleData]);

  // console.log(singleData);

  // const [quiz, setQuiz] = useState([]);
  // const [selected, setSelected] = useState([]);
  let truthy = [];
  let falsy = [];

  const onCLickHandler = (ans, user) => {
    console.log(truthy);
    console.log(falsy);
    const userAnswer = user;

    if (correctAnswer === userAnswer) {
      toast.success("Wow correct answer", { autoClose: 1500 });
    } else {
      toast.error("Incorrect answer", { autoClose: 1500 });
    }
  };

  return (
    // <>

    // {console.log("hi")}
    // </>
    <div className="w-full px-2">
      <div className="w-full px-4">
        {/* <h1 className="font-bold text-2xl text-center">Quiz of {name}</h1> */}

        <QuizItem items={singleData} onCLickHandler={onCLickHandler} />
      </div>
    </div>
  );
};

export default QuizBox;
