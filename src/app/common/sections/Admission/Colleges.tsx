"use client"
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import UniversityCard from "../../components/UniversityCard";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/20/solid";
import Typography from "../../atoms/Typography";

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
      slidesToShow: 3,
      slidesToScroll: 1,
      defaultIndex: 0,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      defaultIndex: 0,
    },
  },
  {
    breakpoint: 640,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      defaultIndex: 0,
    },
  },
  {
    breakpoint: 0,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      defaultIndex: 0,
    },
  },
];
const Colleges = (props: any) => {
const { colleges } = props
  return (
    <div className="container mx-auto pb-12 md:py-0 flex flex-col">
      <div>
        {colleges?.length > 0 && (
          <Typography
            variant="h3"
            component={"h3"}
            fontWeight="bold"
            className="my-8"
          >
            {props?.heading}
          </Typography>
        )}
      </div>

      {colleges?.length > 0 && (
        <Slide
          autoplay={false}
          infinite={false}
          slidesToShow={4}
          slidesToScroll={1}
          defaultIndex={1}
          cssClass="grid gap-4"
          prevArrow={
            <div
              className=" absolute bottom-[-60px] shadow md:bottom-auto md:top-[-70px] right-0 bg-white p-2 mb-4"
              style={{ right: 60, left: "unset" }}
            >
              <ArrowLeftIcon className="w-6 h-6 text-sm  text-brand-primary-blue-main"></ArrowLeftIcon>
            </div>
          }
          nextArrow={
            <div className=" absolute  bottom-[-60px]  shadow md:bottom-auto md:top-[-70px]  md:right-0 bg-white p-2 mb-4">
              <ArrowRightIcon className="w-6 h-6  text-sm  text-brand-primary-blue-main"></ArrowRightIcon>
            </div>
          }
          responsive={responsiveSettings}
        >
          {colleges?.map((item: any, index: number) => {
            const image = getStrapiMedia(
              item?.attributes?.card_banner?.data?.attributes?.url
            );
            const image1 = getStrapiMedia(
              item?.attributes?.logo?.data?.attributes?.url
            );
            return (
              <div
                key={image}
                className="mx-2  mb-8 flex"
              >
                <UniversityCard
                  name={item?.attributes?.name}
                  title={item?.attributes?.title}
                  logo={image1 || ""}
                  alt={
                    item?.attributes?.card_banner?.data?.attributes
                      ?.alternativeText
                  }
                  banner={image || ""}
                  reviews={item?.attributes?.reviewsCount}
                  rating={item?.attributes?.rating}
                  slug={item?.attributes?.slug}
                  rank={item?.attributes?.rankTitle}
                  index={index}
                />
              </div>
            );
          })}
        </Slide>
      )}
    </div>
  );
};

export default Colleges;
