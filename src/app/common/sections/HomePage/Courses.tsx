"use client"
import React from "react";
import { useState } from "react";
import Typography from "../../atoms/Typography";

import GenericCourseCard from "../../components/GenericCourseCard";
interface Program {
  data: any;
}
const tabs = [
  {
    key: "All Categories",
    value: "all",
  },
  {
    key: "Under Graduate",
    value: "ug",
  },
  {
    key: "Post Graduate",
    value: "pg",
  },
];
const TopProgramOffered = ({ data }: Program) => {
  const [active, setActive] = useState("all");
  const [currentData, setCurrentData] = useState(
    data?.cards?.sk_course_types?.data
  );

  const handleclick = (filter: string) => {
    setActive(filter);
    const currentData = data?.cards?.sk_course_types?.data;
    if (filter === "all") {
      setCurrentData(currentData);
    } else {
      const filteredData = currentData?.filter(
        (item: any) =>
          item?.attributes?.sk_course_program?.data?.attributes?.name == filter
      );
      setCurrentData(filteredData);
    }
  };

  return (
    <>
      {/** title start */}
      <Typography
        className="text-brand-text-title"
        variant={data?.title?.variant}
        component={data?.title?.component}
        fontWeight="bold"
      >
        {data?.title?.text}
      </Typography>
      {/** title end */}
      <div className="flex justify-start items-center space-x-6 my-8">
        {/** tabs start */}
        {tabs?.map((tab: any, index: number) => {
          return (
            <div
              className={`py-2 ${
                active === tab.value
                  ? "underline underline-offset-[10px] text-brand-primary-blue-main"
                  : ""
              }`}
              key={tab.key}
            >
              <div
                onClick={() => handleclick(tab.value)}
                className={`w-full text-sm md:text-lg cursor-pointer font-semibold`}
              >
                {tab.key}
              </div>
            </div>
          );
        })}
        {/** tabs start */}
      </div>
      {/** Card Section Start */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-5 gap-4 md:gap-12 xl:gap-6 w-full`}
      >
        {currentData?.map((item: any, index: number) => (
          <React.Fragment key={item.attributes?.name}>
            <GenericCourseCard
              key={index}
              type={item?.attributes?.sk_course_program?.data?.attributes?.name}
              programName={item.attributes?.name}
              duration={item.attributes?.duration}
              durationUnit={item.attributes?.durationUnit}
              slug={item?.attributes?.slug}
              totalUsers={item.attributes?.learners_enrolled}
            />
          </React.Fragment>
        ))}
      </div>
      {/** Card Section End */}
    </>
  );
};

export default TopProgramOffered;
