import React from "react";
import Typography from "../../atoms/Typography";

const University = () => {
  return (
    <div className="container mx-auto  my-4 ">
      <Typography variant="h4" className="font-bold my-2">
        Top programs for Online MBA
      </Typography>
      <Typography
        variant="body2"
        className="font-normal text-brand-text-primary "
      >
        Showing 4 results
      </Typography>
      <div className="grid grid-cols-1 my-4 "></div>
    </div>
  );
};

export default University;
