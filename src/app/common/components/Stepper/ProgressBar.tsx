import React from "react";
import { MdOutlineDone } from "react-icons/md";
import Typography from "../../atoms/Typography";

const ProgressBar = ({ currentStep, totalSteps }: any) => {
  const getProgressBarWidth = () => {
    return (currentStep / totalSteps) * 100;
  };
  const a = getProgressBarWidth();
  return (
    <>
      {a !== 0 ? (
        <div
          className={` ${
            a !== 0 ? "h-6  " : ""
          } md:h-8 md:mt-4 lg:container lg:mx-auto`}
        >
          <div
            className={`bg-brand-background-blue ${
              a !== 0 ? "block" : "hidden"
            }  h-1 md:rounded-full container mx-auto`}
          >
            <div
              className={`bg-brand-primary-blue-main h-1 z-1 flex justify-between items-center md:rounded-full transition-all duration-300 `}
              style={{ width: `${getProgressBarWidth()}%` }}
            >
              <div className="text-white md:flex hidden justify-center items-center  bg-brand-primary-blue-main rounded-full h-5 w-5">
                <MdOutlineDone className=" text-lg" />
              </div>

              <div
                className={`z-10 text-white hidden  justify-center items-center  bg-brand-primary-blue-main rounded-full h-5 w-5 ${
                  a < 15 ? "md:hidden" : "md:flex"
                }`}
              >
                <MdOutlineDone className=" text-lg" />
              </div>
              <div
                className={`z-10 text-white hidden  justify-center items-center  bg-brand-primary-blue-main rounded-full h-5 w-5 ${
                  a < 30 ? "md:hidden" : "md:flex"
                }`}
              >
                <MdOutlineDone className=" text-lg" />
              </div>
              <div
                className={`z-10 text-white  hidden  justify-center items-center  bg-brand-primary-blue-main rounded-full h-5 w-5 ${
                  a < 45 ? "md:hidden" : "md:flex"
                }`}
              >
                <MdOutlineDone className=" text-lg" />
              </div>
              <div
                className={`z-10 text-white hidden  justify-center items-center  bg-brand-primary-blue-main rounded-full h-5 w-5 ${
                  a < 60 ? "md:hidden" : "md:flex"
                }`}
              >
                <MdOutlineDone className=" text-lg" />
              </div>
              <div
                className={`z-10 text-white  hidden   justify-center items-center  bg-brand-primary-blue-main rounded-full h-5 w-5 ${
                  a < 70 ? "md:hidden" : "md:flex"
                }`}
              >
                <MdOutlineDone className=" text-lg" />
              </div>
              <div
                className={`z-10 text-white  hidden   justify-center items-center  bg-brand-primary-blue-main rounded-full h-5 w-5 ${
                  a < 85 ? "md:hidden" : "md:flex"
                }`}
              >
                <MdOutlineDone className=" text-lg" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full ">
          <div className="flex w-40 justify-around rounded-lg bg-white border  px-4 py-2 items-center">
            <span className="bg-green-500 h-3 w-3 rounded-full "></span>
            <Typography fontWeight="bold" variant="body1"  className="text-brand-text-primary">
              AI Suggest
            </Typography>
             </div>
        </div>
      )}
    </>
  );
};

export default ProgressBar;
