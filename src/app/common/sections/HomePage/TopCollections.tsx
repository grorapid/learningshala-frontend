
import React from "react";
import TopProgramOffered from "./Courses";
const TopCollections =  ({ data }: any) => {
  return (
    <div className="container my-12 md:my-16 mx-auto bg-white">
      <TopProgramOffered data={data} />
    </div>
  );
};

export default TopCollections;
