import React from "react";
import Comparecard from "../../common/sections/Compare/Comparecard";

const Compare = ({ params }: any) => {
  const { compare } = params;
  return (
    <div className="container mx-auto">
      <Comparecard value={compare} />
    </div>
  );
};

export default Compare;
