import React from "react";

const Recharts = ({ data }) => {
  const singleArr = data.total;
  const array = [singleArr];
  console.log(array);
  const extra = [...array, singleArr];
  console.log(extra);
  return (
    <div>
      <h1>Rechart</h1>
    </div>
  );
};

export default Recharts;
