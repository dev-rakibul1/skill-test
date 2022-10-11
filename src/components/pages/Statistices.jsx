import React, { useContext } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { QuizContext } from "./../../root/Root";

const Statistices = () => {
  const data = useContext(QuizContext);
  console.log(data);
  return (
    <div className="w-[70%] mx-auto mt-10">
      <LineChart
        width={600}
        height={300}
        data={data}
        className="!w-[50%] mx-auto"
      >
        <Line type="monotone" dataKey="total" stroke="red" />
        <CartesianGrid stroke="green" strokeDasharray="5 5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Statistices;
