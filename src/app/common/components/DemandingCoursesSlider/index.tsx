"use client"
import React from "react";
import Typography from "../../atoms/Typography";
import { Slide } from "react-slideshow-image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import DemandedCoursesCard from "../DemandCoursesCard";
import { getStrapiMedia } from "@/app/utils/api-helpers";

const DemandedFreeCourses = ({ homepage, data }: any) => {
  const responsiveSettings = [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        defaultIndex: 0,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        defaultIndex: 0,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  return (
    <div
      className={`container ${
        homepage ? " pb-12  my-9 md:py-8" : "pb-12 md:pb-4 my-9"
      } mx-auto`}
    >
      {homepage && (
        <Typography
          className="mb-10 md:w-full  "
          component={data?.title?.component}
          fontWeight="bold"
          variant={data?.title?.variant}
        >
          {data?.title?.text}
        </Typography>
      )}

      <Slide
        slidesToScroll={1}
        slidesToShow={3}
        cssClass="grid gap-4"
        infinite={false}
        defaultIndex={1}
        prevArrow={
          <div
            className="absolute bottom-[-60px] md:bottom-auto shadow md:top-[-70px] right-0 bg-white p-2 md:mb-4"
            style={{ right: 60, left: "unset" }}
          >
            <ArrowLeftIcon className="w-6 h-6 text-brand-primary-blue-main"></ArrowLeftIcon>
          </div>
        }
        nextArrow={
          <div className="absolute  bottom-[-60px] md:bottom-auto shadow md:top-[-70px] right-0 bg-white p-2 md:mb-4">
            <ArrowRightIcon className="w-6 h-6 text-brand-primary-blue-main"></ArrowRightIcon>
          </div>
        }
        responsive={responsiveSettings}
      >
        {homepage &&
          data?.sk_courses?.data?.slice(0, 10)?.map((item: any, index: any) => {
            const img = getStrapiMedia(
              item?.attributes?.university?.data?.attributes?.logo?.data
                ?.attributes?.url
            );

            const brochure = getStrapiMedia(
              item?.attributes?.Brochure?.data?.attributes?.url
            );
            const url = `/universities/${item?.attributes?.university?.data?.attributes?.slug}/courses/${item?.attributes?.sk_course_type?.data?.attributes?.slug}/${item?.attributes?.slug}`;
            return (
              <div key={index} className="mx-2">
                <DemandedCoursesCard
                  alt={
                    item?.attributes?.university?.data?.attributes?.logo?.data
                      ?.attributes?.alternativeText
                  }
                  logo={img}
                  slug={url}
                  brochure={brochure}
                  programName={item?.attributes?.name}
                  duration={item?.attributes?.duration}
                  durationUnit={item?.attributes?.durationUnit}
                  totalUsers={item?.attributes?.learners_enrolled}
                />
              </div>
            );
          })}
        {!homepage &&
          data?.slice(0, 10)?.map((item: any, index: any) => {
            const img = getStrapiMedia(
              item?.attributes?.university?.data?.attributes?.logo?.data
                ?.attributes?.url
            );
            const brochure = getStrapiMedia(
              item?.attributes?.Brochure?.data?.attributes?.url
            );
            const url = `/universities/${item?.attributes?.university?.data?.attributes?.slug}/courses/${item?.attributes?.sk_course_type?.data?.attributes?.slug}/${item?.attributes?.slug}`;
            return (
              <div key={index}>
                <DemandedCoursesCard
                  width={99}
                  key={index}
                  logo={img}
                  alt={
                    item?.attributes?.university?.data?.attributes?.logo?.data
                      ?.attributes?.alternativeText
                  }
                  slug={url}
                  brochure={brochure}
                  programName={item?.attributes?.name}
                  durationUnit={item?.attributes?.durationUnit}
                  duration={item?.attributes?.duration}
                  totalUsers={item?.attributes?.learners_enrolled}
                />
              </div>
            );
          })}
      </Slide>
    </div>
  );
};

export default DemandedFreeCourses;
