import React, { useContext } from "react";
import { QuizContext } from "./../../root/Root";
import Recharts from "./Recharts";

const Statistices = () => {
  const rechartData = useContext(QuizContext);
  console.log(rechartData);

  console.log(rechartData);
  return (
    <div>
      {rechartData.map((data) => (
        <Recharts key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Statistices;
