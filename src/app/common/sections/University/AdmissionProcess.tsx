import React from "react";
import Typography from "../../atoms/Typography";
import { Admissiondata } from "../../Interfaces";
import Button from "../../atoms/Button";
import Link from "next/link";
interface Admission {
  data: Admissiondata;
  url: string;
  slug: string;
}

const AdmisssionProcess = ({ slug, data, url }: Admission) => {
  return (
    data && (
      <div className=" flex flex-col w-full my-6   md:bg-white lg:bg-white justify-center items-center py-6 ">
        <div className="flex w-full  text-center  flex-col justify-center items-center">
          <Typography
            variant="h3"
            component={"h3"}
            className="font-bold  text-brand-text-title"
          >
            {data?.admissionProcess?.title}
          </Typography>
          <Typography
            variant="body2"
            className="font-normal my-2  md:px-20 text-brand-text-title"
          >
            {data?.admissionProcess?.description}
          </Typography>
        </div>

        <div className=" flex w-full py-3 ">
          <div className="border-l-2  ml-4 my-8 mb-16 md:hidden lg:hidden flex flex-col  justify-between border-gray-300">
            {data?.admissionProcess?.admission_steps?.map((item, index) => (
              <span
                key={index}
                className="flex  text-brand-primary-blue-main  items-center justify-center h-8 w-8  -ml-4 rounded-full bg-white border border-brand-primary-blue-main font-bold p-3"
              >
                {index + 1}
              </span>
            ))}
          </div>
          <ol className=" w-11/12 md:hidden border-gray-300 dark:border-gray-700 dark:text-gray-400">
            <div className=" lg:hidden md:hidden w-full flex flex-col justify-start items-start  ">
              {data?.admissionProcess?.admission_steps?.map((item, index) => (
                <li
                  key={index}
                  className="mb-10  ml-6 flex w-11/12  justify-start items-center"
                >
                  <div className="bg-white border py-2 w-full  px-4 border-brand-primary-blue-main">
                    <Typography
                      variant="body1"
                      className="text-brand-primary-blue-main font-semibold"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      className="text-brand-text-title font-semibold"
                    >
                      {item.description}
                    </Typography>
                  </div>
                </li>
              ))}
            </div>
          </ol>
          <div className="md:flex hidden  w-full mx-auto flex-col">
            {data?.admissionProcess?.admission_steps?.map((item, index) => (
              <div
                key={index}
                className=" md:flex hidden w-full justify-between items-center "
              >
                <div
                  className={`space-y-5 ${
                    index % 2 == 0 ? "block" : "invisible"
                  } w-1/2 ${
                    index == data?.admissionProcess?.admission_steps?.length - 1
                      ? "-mt-4"
                      : ""
                  }`}
                >
                  <div className="flex justify-center items-center">
                    <div className="bg-white border  w-10/12 rounded lg:py-6 px-4 md:py-4   border-brand-primary-blue-main">
                      <Typography
                        variant="h6"
                        component={"h6"}
                        className="text-brand-primary-blue-main font-bold"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="text-brand-text-title font-normal"
                      >
                        {item.description}
                      </Typography>
                    </div>
                    <div className="w-16 -ml-4 bg-white font-bold text-brand-primary-blue-main text-3xl h-16 flex justify-center  items-center border border-brand-primary-blue-main rounded-full">
                      {index + 1}
                    </div>
                    <div className="xl:w-24 lg:w-[70px] md:w-12  h-0.5     bg-brand-background-bluelight"></div>
                  </div>
                </div>
                <div
                  className={`flex flex-col w-1 ${
                    index === 0
                      ? "h-full justify-between mt-[87px]"
                      : "h-full justify-center"
                  } ${
                    index === data.admissionProcess?.admission_steps?.length - 1
                      ? " h-[50%] mb-[56px] "
                      : "justify-center"
                  }  md:space-y-12 lg:space-y-12 bg-brand-background-bluelight  `}
                >
                  <span
                    className={`w-4 h-4 rounded-full ${
                      index ===
                      data.admissionProcess?.admission_steps?.length - 1
                        ? "mt-[41px]"
                        : ""
                    } -ml-1.5 bg-brand-background-bluelight`}
                  ></span>
                </div>

                <div
                  className={`space-y-5 ${
                    index % 2 !== 0 ? "block " : "invisible"
                  } w-1/2 `}
                >
                  <div
                    className={`flex  justify-center items-center`}
                  >
                    <div className="lg:w-16 xl:w-24 md:w-12  h-0.5     bg-brand-background-bluelight"></div>
                    <div className="w-16 z-10 bg-white font-bold text-brand-primary-blue-main text-3xl h-16 flex justify-center  items-center border border-brand-primary-blue-main rounded-full">
                      {index + 1}
                    </div>
                    <div className="bg-white border -ml-3 w-10/12 rounded lg:py-6 px-4 md:py-4   border-brand-primary-blue-main">
                      <Typography
                        variant="h6"
                        component={"h6"}
                        className="text-brand-primary-blue-main font-bold"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="text-brand-text-title font-normal"
                      >
                        {item.description}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link href={`/universities/${url}/admission`}>
          <Button
            element="button"
            type="button"
            variant="contained"
            color="primary"
            size="small"
            className="lg:text-xl md:text-lg text-base my-3"
          >
            Enroll Now
          </Button>
        </Link>
      </div>
    )
  );
};

export default AdmisssionProcess;
