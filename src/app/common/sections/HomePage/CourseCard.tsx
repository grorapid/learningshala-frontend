import React from "react";
import Image from "next/image";

import Analytics from "../../../../public/images/HomePage/Analytics.png";
import { AiFillCheckCircle, AiFillStar } from "react-icons/ai";

// dummy set of courses for making cards

const dummyCourses = [
  {
    id: 1,
    course: "OnlineMBA",
    duration: "4 years",
    rating: "4.5",
    streams: "12 streams",
  },
  {
    id: 2,
    course: "OnlineMBA",
    duration: "3 years",
    rating: "4.2",
    streams: "12 streams",
  },
  {
    id: 3,
    course: "OnlineMBA",
    duration: "5 years",
    rating: "4.7",
    streams: "12 streams",
  },
  {
    id: 4,
    course: "OnlineMBA",
    duration: "4 years",
    rating: "4.0",
    streams: "12 streams",
  },
  {
    id: 5,
    course: "OnlineMBA",
    duration: "3 years",
    rating: "4.8",
    streams: "12 streams",
  },
  {
    id: 5,
    course: "OnlineMBA",
    duration: "3 years",
    rating: "4.8",
    streams: "12 streams",
  },
  {
    id: 1,
    course: "OnlineMBA",
    duration: "4 years",
    rating: "4.5",
    streams: "12 streams",
  },
  {
    id: 2,
    course: "OnlineMBA",
    duration: "3 years",
    rating: "4.2",
    streams: "12 streams",
  },
  {
    id: 3,
    course: "OnlineMBA",
    duration: "5 years",
    rating: "4.7",
    streams: "12 streams",
  },
  {
    id: 4,
    course: "OnlineMBA",
    duration: "4 years",
    rating: "4.0",
    streams: "12 streams",
  },
  // Add more dummy course data as needed
];

const CourseCardGrid = () => {
  return (
    <div className="container mx-auto px-3  grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:px-5 pb-10 md:gap-4">
      {/* mapping through dummy set of arrays starts */}

      {dummyCourses?.map((course) => (
        <div
          key={course.id}
          className=" py-4 px-2 w-[105px] h-[120px] xs:w-[96px] xs:h-[110px] bg-white rounded-[8px] shadow my-3 md:w-[170px] md:h-[150px]  lg:w-[200px] lg:h-[170px]"
        >
          <div className="flex items-center space-x-2">
            {/* code for image */}

            <Image
              src={Analytics}
              alt="Person"
              className="w-[32px] h-[32px] rounded-full md:w-[62px] md:h-[62px] lg:w-[80px] lg:h-[80px]"
            />

            {/* code for card description starts */}

            <div className="flex flex-col space-y-2">
              <div className="text-center text-neutral-800 text-[10px] xs:text-[8px] font-bold tracking-tight md:text-base lg:text-lg">
                {course.course}
              </div>
              <div className="text-neutral-800 text-[4px] font-semibold md:text-[8px]">
                {course.duration} | {course.streams}
              </div>

              {/* code for rating stars */}

              <div className="flex items-center text-brand-primary-blue-main md:text-xl">
                <AiFillStar size={8} />
                <AiFillStar size={8} />
                <AiFillStar size={8} />
                <AiFillStar size={8} />
              </div>
            </div>
          </div>
          <div className="mt-3 w-full mx-auto relative ">
            <button className="bg-brand-primary-blue-main px-4 py-1  text-white text-[6.51px] font-semibold  xs:w-[80px] xs:px-2 md:w-[150px] md:text-xs lg:w-[180px] lg:text-sm">
              View Universities
            </button>

            <div className="absolute top-4  pt-3">
              <button className=" text-[3px] font-semibold  flex items-center justify-center  py-1 md:pt-2 lg:text-[8px] text-brand-primary-blue-main ">
                <AiFillCheckCircle size={5} />{" "}
                <span className="ps-1">
                  Compare 33+ universities for online MBA
                </span>
              </button>
            </div>
          </div>

          {/* code for card description ends */}
        </div>
      ))}

      {/* mapping through dummy set of arrays ends */}
    </div>
  );
};

export default CourseCardGrid;
