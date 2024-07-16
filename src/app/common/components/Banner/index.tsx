import React from "react";
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
const Banner = () => {
  return (
    <div className="bg-brand-accent-black-main text-white ">
      <div className="container mx-auto flex flex-col py-5 space-y-5  justify-center items-center md:flex md:flex-row md:justify-around md:py-10  md:items-center ">
        <div>
          <Typography component={"h4"} variant="h4" className="text-white">
            Earn up to 100% scholarship
          </Typography>

          <Typography className="text-white">
            Skollege offers an option to earn up to 100% scholarship to selected
            students based on the test results. Be the first to grab it now
          </Typography>
        </div>
        <Button variant="contained" className="flex justify-cneter">Enroll Now</Button>
      </div>
    </div>
  );
};

export default Banner;
