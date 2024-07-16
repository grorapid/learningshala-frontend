import React from "react";
import Rating from "@/app/common/atoms/Rating";
import Typography from "@/app/common/atoms/Typography";
import Button from "@/app/common/atoms/Button";
import Link from "next/link";
import { APP_ROUTES } from "@/app/utils/app-routes";

interface Universtycard {
  data: any;
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
  checkedState: any[];
  spec: boolean;
}
const UniversityCard = ({ data, spec }: Universtycard) => {
  return (
    <>
      {data?.data?.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className={`flex rounded flex-col md:flex-row  w-full  border border-gray-200  justify-between   bg-brand-accent-white p-6 my-6 `}
          >
            <div className="flex  md:flex-row flex-col md:items-center  ">
              <div className="flex flex-col justify-center items-start ">
             <Typography
                  variant="body1"
                  className="font-semibold  text-brand-text-primary"
                >
                  {item?.attributes?.sk_course_program?.data?.attributes?.name}
                </Typography>
                <Link  href={
                    !spec
                      ? APP_ROUTES.course(
                          item?.attributes?.university?.data?.attributes?.slug
                        )
                      : APP_ROUTES.program(
                          item?.attributes?.university?.data?.attributes?.slug,
                          item?.attributes?.sk_course_type?.data?.attributes
                            ?.slug
                        )
                  }> <Typography
                  variant="h6"
                  component={"h6"}
                  className="font-semibold my-2  hover:text-brand-primary-blue text-brand-text-title"
                >
                  {item?.attributes?.name}
                </Typography></Link>
                <div className="flex justify-start items-center">
                  <Rating
                    size={14}
                    value={item?.attributes?.rating}
                    classname="text-brand-primary-blue-main"
                  />
                  <Typography>{item?.attributes?.reviews}</Typography>
                </div>

                <div className="flex justify-start mt-5 item">
                  <Typography
                    variant="body1"
                    className="font-semibold text-brand-text-primary"
                  >
                    
                    Courses :
                    <span className="text-brand-text-title ">
                      {item?.attributes?.admission_data?.No_of_courses}
                    </span>
                  </Typography>
                  <Typography
                    variant="body1"
                    className="font-semibold ml-5 text-brand-text-primary"
                  >
                  
                    Exams Accepted :
                    <span className="text-brand-text-title">
                      {item?.attributes?.exam_accepted}
                    </span>
                  </Typography>
                </div>
              </div>
            </div>
            <div className="flex space-y-2 flex-col mt-2  md:mt-0 md:justify-center justify-start  md:items-center  items-start">
              <Typography
                variant="body1"
                className="font-semibold flex justify-start items-center text-brand-text-primary "
              >
                Fees:
                <span className="font-semibold text-xs md:text-sm lg:text-base ml-2 mt-1 text-brand-primary-blue-main ">
                  ₹{item?.attributes?.sk_university_fee?.data?.attributes?.fees}
                </span>
              </Typography>
              <div className="flex flex-row md:flex-col justify-between ">
                <Link
                  href={
                    !spec
                      ? APP_ROUTES.course(
                          item?.attributes?.university?.data?.attributes?.slug
                        )
                      : APP_ROUTES.program(
                          item?.attributes?.university?.data?.attributes?.slug,
                          item?.attributes?.sk_course_type?.data?.attributes
                            ?.slug
                        )
                  }
                >
                  
                  <Button
                    variant="contained"
                    className="lg:w-64 md:w-52 lg:h-12 w-40 md:text-xl "
                    size="small"
                    color="primary"
                  >
                    View More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UniversityCard;
