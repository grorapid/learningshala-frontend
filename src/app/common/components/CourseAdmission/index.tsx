"use client";
import React, { useState } from "react";
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import Link from "next/link";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import RichTextEditor from "../RichTextEditor";
const CourseAdmission = ({ data }: any) => {
  const [active, setActive] = useState(
    new Array(
      data?.university?.data?.attributes?.sk_course_types?.data?.length
    ).fill(false)
  );

  const handleclick = (value: number) => {
    const updatedCheckedState = active?.map((item, index) =>
      index === value ? !item : item
    );

    setActive(updatedCheckedState);
  };

  return (
    <div className="mx-auto container my-16">
      {data && (
        <Typography variant="h3" className="font-bold">
          {`${data?.university?.data?.attributes?.name} Admission Process ${data?.year}`}
        </Typography>
      )}
      {data && (
        <Typography variant="body1" className="font-normal my-6">
          Check below the eligibility and selection criteria of various UG and
          PG courses related to {data?.university?.data?.attributes?.name}{" "}
          course admissions {data?.year}:
        </Typography>
      )}
      <div>
        {data?.university?.data?.attributes?.sk_course_types?.data?.map(
          (item: any, index: number) => {
            const data1 =
              data?.university?.data?.attributes?.sk_courses?.data?.filter(
                (items: any) =>
                  items?.attributes?.sk_course_type?.data?.attributes?.name ==
                  item?.attributes?.name
              );

            return (
              <div key={index} className="my-4  ">
                <div
                  className={`${
                    active[index] === true
                      ? "bg-brand-primary-blue-main"
                      : "border"
                  } flex justify-between items-center py-6 md:px-9 px-4 rounded-sm`}
                >
                  <div>
                    <Typography
                      variant="body2"
                      className={`${
                        active[index] === true
                          ? "text-brand-accent-white"
                          : "text-brand-text-primary"
                      }`}
                    >
                      {data?.university?.data?.attributes?.name}
                    </Typography>
                    <Typography
                      variant="h5"
                      className={`${
                        active[index] === true
                          ? "text-brand-accent-white"
                          : "text-brand-text-title"
                      } my-4 font-bold`}
                    >
                      {item?.attributes?.name} Admission Process {data?.year}
                    </Typography>

                    <Typography
                      variant="body2"
                      className={`${
                        active[index] === true
                          ? "text-brand-accent-white"
                          : "text-brand-text-primary"
                      } font-bold`}
                    >
                      {data1[0]?.attributes?.admission_data?.No_of_courses} |{" "}
                      {item?.attributes?.duration} years
                    </Typography>
                  </div>
                  <Button
                    className="text-brand-accent-white "
                    onClick={() => handleclick(index)}
                  >
                    {active[index] === true ? (
                      <span className="text-brand-accent-white text-xl font-bold">
                        <SlArrowUp />
                      </span>
                    ) : (
                      <span className="text-brand-text-title text-xl font-extrabold">
                        <SlArrowDown />
                      </span>
                    )}
                  </Button>
                </div>
                <div
                  className={`${
                    active[index] === false ? "hidden" : ""
                  } md:p-12 p-6 border  `}
                >
                  <Typography variant="body1" className="text-justify">
                    <RichTextEditor
                      htmlContent={
                        data1[0]?.attributes?.admission_data?.description
                      }
                    />
                  </Typography>
                  <Typography variant="h5" className="font-bold my-6">
                    Eligibility Criteria
                  </Typography>
                  {data1[0]?.attributes?.admission_data?.course_eligibility?.map(
                    (item: any, index: any) => (
                      <div key={index} className="flex items-center">
                        <span className="h-2 w-2 mr-3 rounded-full bg-brand-text-title"></span>
                        <Typography className="text-lg">
                          {item?.eligibility}
                        </Typography>
                      </div>
                    )
                  )}
                  <Typography variant="h5" className="font-bold my-6">
                    Admission Date and Events
                  </Typography>
                  <div className="border">
                    <div className="grid   grid-cols-4 ">
                      <Typography
                        variant="body1"
                        className="font-extrabold pl-3 md:pl-8  p-4  border"
                      >
                        Dates
                      </Typography>

                      <Typography
                        variant="body1"
                        className="font-extrabold pl-3 md:pl-8 p-4 border col-span-3"
                      >
                        Events
                      </Typography>
                    </div>
                    {data1[0]?.attributes?.admission_data?.dates_events?.map(
                      (item: any, index: number) => (
                        <div key={index} className="grid   grid-cols-4 ">
                          <Typography
                            variant="body1"
                            className="font-bold text-brand-primary-blue-main pl-3 md:pl-8 p-3 md:p-6  border"
                          >
                            {item?.key}
                          </Typography>

                          <Typography
                            variant="body1"
                            className="font-normal pl-3 md:pl-8 p-3 md:p-6 border col-span-3"
                          >
                            {item?.value}
                          </Typography>
                        </div>
                      )
                    )}
                  </div>
                  {/* <div className="flex justify-center items-center my-8">
                  <Button variant="outlined" size="small" color="primary">
                    View More
                  </Button>
                </div> */}
                  <div className="bg-brand-background-blue mt-8 py-4 px-4 md:px-16 flex justify-between items-center">
                    <Typography variant="h6" className="font-bold">
                      Total Seats
                    </Typography>
                    <div className="flex justify-start w-24 items-start">
                      <Typography variant="body1" className="font-bold">
                        {data1[0]?.attributes?.admission_data?.seats}
                      </Typography>
                    </div>
                  </div>
                  <div className="bg-brand-background-blue py-4 px-4 md:px-16 my-6 flex justify-between items-center">
                    <div>
                      <Typography variant="h6" className="font-bold">
                        Total Fees
                      </Typography>
                    </div>
                    <div className="flex justify-start w-24 items-start">
                      <Typography variant="body1" className="font-bold">
                        ₹
                        {
                          item?.attributes?.sk_university_fee?.data?.attributes
                            ?.fees
                        }
                      </Typography>
                    </div>
                  </div>
                  <div className="flex justify-center items-center mt-12">
                    <Link
                      href={`/universities/${data?.university?.data?.attributes?.slug}/courses/${item?.attributes?.slug}`}
                    >
                      {" "}
                      <Button
                        element="div"
                        variant="contained"
                        className="md:h-12 md:w-52 text-xl"
                        size="medium"
                        color="primary"
                      >
                        Course Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default CourseAdmission;
