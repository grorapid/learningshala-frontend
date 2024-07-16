import React from "react";
import Typography from "@/app/common/atoms/Typography";
import Banner from "@/app/common/sections/Courses/Banner";
import Rating from "@/app/common/atoms/Rating";
import Button from "@/app/common/atoms/Button";
import Link from "next/link";
import { Span } from "@sentry/nextjs/types/edge";
import { APP_ROUTES } from "@/app/utils/app-routes";
interface Coursecard {
  page: any;
  handlecompare: (
    e: any,
    course: string,
    fees: string,
    image: any,
    program: string,
    university: string,
    id: number,
    slug: string
  ) => void;
  generic: boolean;
  checkedState: any[];
}
const CourseCard = ({
  page,
  handlecompare,
  checkedState,
  generic,
}: Coursecard) => {
  return (
    <>
      {page?.data?.map((item: any, index: number) => {
        return (
          <div className="container mx-auto" key={index}>
            <div
              className={`flex rounded flex-col md:flex-row w-full border border-gray-200 justify-between bg-brand-accent-white p-6 my-3`}
            >
              <div className="flex md:flex-row flex-col md:items-center">
                <div className="flex flex-col justify-center items-start">
                <Link
                      href={APP_ROUTES.courses(
                        item?.attributes?.university?.data?.attributes?.slug,
                        item?.attributes?.sk_course_type?.data?.attributes
                          ?.slug,
                        item?.attributes?.slug
                      )}
                    >   <Typography
                    variant="h5"
                    component={"h5"}
                    className="font-bold text-brand-text-title"
                  >
                    {item.attributes?.sk_course_type?.data?.attributes?.name} in{" "}
                    {
                      item?.attributes?.sk_course_specification?.data
                        ?.attributes?.name
                    }
                  </Typography></Link>
                  <div className="flex justify-start my-2 items-center">
                    <Rating
                      size={14}
                      value={item?.attributes?.courseRating}
                      classname="text-brand-primary-blue-main"
                    />
                    <Typography variant="body2">
                      {item?.attributes?.reviews}
                    </Typography>
                  </div>
                  <div className="flex flex-row lg:flex-row mt-3 space-x-4 lg:space-x-14 md:space-x-8 justify-center md:justify-between md:items-center items-center">
                    <Typography
                      variant="body2"
                     
                      className="font-semibold flex flex-col text-brand-text-primary"
                    >
                      {`Approvals: `}
                      <span className="text-brand-text-title">
                        {item?.attributes?.approvals}
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                     
                      className="font-semibold flex flex-col   text-brand-text-primary"
                    >
                      Total Seats :
                      <span className="text-brand-text-title">
                        {item?.attributes?.admission_data?.seats}
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                     
                      className="font-semibold flex flex-col   text-brand-text-primary"
                    >
                      Exams Accepted :
                      <span className="text-brand-text-title">
                        {item?.attributes?.exam_accepted}
                      </span>
                    </Typography>
                  </div>

                  <div className="flex flex-row  lg:flex-row mt-3  space-x-4 lg:space-x-14 md:space-x-8 justify-center md:justify-between md:items-center items-center">
                    <Typography
                      variant="body2"
                      
                      className="font-semibold flex flex-col mr-8 text-brand-text-primary"
                    >
                      Duration :
                      <span className="text-brand-text-title ">
                        {item?.attributes?.duration}
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                     
                      className="font-semibold flex  flex-col  justify-start items-center text-brand-text-primary"
                    >
                      Fees:
                      <span className="font-semibold text-xs md:text-sm lg:text-base ml-2 md:mt-1 text-brand-text-title">
                        ₹
                        {
                          item?.attributes?.sk_university_fee?.data?.attributes
                            ?.fees
                        }
                      </span>
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="flex space-y-2 flex-col mt-2  md:mt-0 md:justify-center justify-start  md:items-center  items-start">
                <div className="flex  gap-3 md:gap-3 flex-col w-full justify-start  items-start md:items-center md:justify-center text-sm md:text-base lg::text-lg font-semibold  ">
                  <Typography
                    variant="body2"
                    
                    className={`flex md:ml-0 md:mt-3 justify-start text-brand-text-title font-semibold items-center`}
                  >
                    <input
                      onClick={(e) => {
                        handlecompare(
                          e,
                          item?.attributes?.name,
                          item?.attributes?.sk_university_fee?.data?.attributes
                            ?.fees,
                          item?.attributes?.university?.data?.attributes?.logo
                            ?.data?.attributes?.url,
                          item?.attributes?.sk_course_type?.data?.attributes
                            ?.name,
                          item?.attributes?.university?.data?.attributes?.name,
                          index,
                          item?.attributes?.slug
                        );
                      }}
                      className="mr-3 cursor-pointer w-5 h-5"
                      type="checkbox"
                      checked={checkedState[index]}
                      readOnly
                    />
                    Add to compare
                  </Typography>
                  <div className="flex text-xs md:text-sm w-full lg:text-base justify-between items-center flex-row md:flex-col gap-2 ">
                    <Button
                      variant="outlined"
                      color="tertiary"
                      className="lg:w-60 md:w-52 w-36 h-10 lg:h-12"
                      size="small"
                    >
                      Download Brochure
                    </Button>
                    <Link
                      href={APP_ROUTES.courses(
                        item?.attributes?.university?.data?.attributes?.slug,
                        item?.attributes?.sk_course_type?.data?.attributes
                          ?.slug,
                        item?.attributes?.slug
                      )}
                    >
                      <Button
                        size="small"
                        className="lg:w-60  md:w-52  w-36 h-10 lg:h-12"
                        color="primary"
                        variant="contained"
                      >
                        Course Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CourseCard;
