import React from "react";

import Rating from "@/app/common/atoms/Rating";
import Typography from "@/app/common/atoms/Typography";
import Button from "@/app/common/atoms/Button";
import Image from "next/image";

import { getStrapiMedia } from "@/app/utils/api-helpers";
import Link from "next/link";
import { APP_ROUTES } from "@/app/utils/app-routes";

interface Listcard {
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
}

const ListCard = ({ data, handlecompare, checkedState }: Listcard) => {
  return (
    <div>
      {data?.data?.map((item: any, index: number) => {
        const image = getStrapiMedia(
          item?.attributes?.university?.data?.attributes?.logo?.data?.attributes
            ?.url
        );
        return (
          <div
            key={item?.attributes?.university?.data?.attributes?.name ?? `img-list-card ${index}`}
            className={`flex rounded flex-col md:flex-row  w-full border border-gray-200 justify-between bg-brand-accent-white p-6 my-6`}
          >
            <div className="flex  md:flex-row flex-col md:items-center  ">
              <div className="flex lg:w-40 md:w-40 md:items-center mr-4 md:justify-center">
                <Image
                  src={image || ""}
                  width={100}
                  height={48}
                  alt={
                    item?.attributes?.university?.data?.attributes?.logo?.data
                      ?.attributes?.alternativeText ?? 'university-logo'
                  }
                />
              </div>
              <div className="flex flex-col justify-center  items-start">
                <Typography
                  variant="body2"
                  className="font-normal my-1 text-brand-text-primary"
                >
                  {item?.attributes?.university?.data?.attributes?.name}
                </Typography>

                <Typography
                  variant="h6"
                  component={"h6"}
                  className="font-semibold my-2 text-brand-text-title"
                >
                  {item?.attributes?.name}
                </Typography>
                <div className="flex justify-start items-center">
                  <Rating
                    size={14}
                    value={item?.attributes?.rating}
                    classname="text-brand-primary-blue-main"
                  />
                  <Typography>{item?.attributes?.reviews}</Typography>
                </div>
                <div className="flex flex-row md:flex-col lg:flex-row mt-3 space-x-4 lg:space-x-6 md:space-x-0 justify-center md:justify-start md:items-start items-center">
                  <Typography
                    variant="body2"
                    component={"div"}
                    className="font-semibold flex justify-start items-center text-brand-text-primary"
                  >
                    {`Program:`}
                    <Link
                  href={APP_ROUTES.courses(
                    item?.attributes?.university?.data?.attributes?.slug,
                    item?.attributes?.sk_course_type?.data?.attributes?.slug,
                    item?.attributes?.slug
                  )}
                >  <span className="font-semibold text-xs md:text-sm lg:text-base ml-2  text-brand-text-title">
                      {item?.attributes?.sk_course_type?.data?.attributes?.name}
                    </span></Link>
                  </Typography>
                  <Typography
                    variant="body2"
                    
                    className="font-semibold text-brand-text-primary"
                  >
                    {`Approvals: `}
                    <span className="text-brand-text-title ">
                      {item?.attributes?.approvals}
                    </span>
                  </Typography>
                </div>

                <div className="flex lg:flex-row flex-col justify-start mt-2 items-start lg:items-center">
                  <Typography
                    variant="body2"
                    className="font-semibold flex justify-start items-center text-brand-text-primary"
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
            <div className="flex space-y-2 flex-col mt-2 md:mt-0 md:justify-center justify-start md:items-center items-start">
              <div className="flex flex-row md:flex-col ">
                <Typography
                  variant="body2"
                  className={`flex md:ml-0 md:mt-3 justify-center text-brand-text-title font-semibold items-center`}
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
                  {`Add to compare`}
                </Typography>
              </div>

              <div className="flex flex-row gap-3 md:gap-3 md:flex-col w-full justify-between  items-center text-xs md:text-base lg::text-lg font-semibold  ">
                <Button
                  variant="outlined"
                  color="tertiary"
                  className="lg:w-60 md:w-52  h-10 lg:h-12 hover:border-brand-primary-blue-main"
                  size="small"
                >
                  {`Download Brochure`}
                </Button>
                <Link
                  href={APP_ROUTES.courses(
                    item?.attributes?.university?.data?.attributes?.slug,
                    item?.attributes?.sk_course_type?.data?.attributes?.slug,
                    item?.attributes?.slug
                  )}
                >
                  <Button
                    size="small"
                    className="lg:w-60 md:w-52 h-10 lg:h-12"
                    color="primary"
                    variant="contained"
                  >
                    {`Explore Program`}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListCard;
