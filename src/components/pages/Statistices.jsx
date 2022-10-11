import React, { useContext } from "react";
import { QuizContext } from "./../../root/Root";

const Statistices = () => {
  const rechartData = useContext(QuizContext);
  //   console.log(rechartData);

  console.log(rechartData);
  return (
    <div>
      <h1>chart</h1>
    </div>
  );
};

export default Statistices;
