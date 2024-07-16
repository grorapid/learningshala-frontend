"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import { APP_ROUTES } from "@/app/utils/app-routes";
import { Slide } from "react-slideshow-image";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
const TalkToExperts = ({ data, title }: any) => {
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
  return (
    <div className="my-8 container mx-auto overflow-hidden">
      <Typography
        variant={data?.title?.variant}
        component={data?.title?.component}
        fontWeight="bold"
      >
        {title ?? data?.title?.text}
      </Typography>
      <div className="md:hidden mt-6 pb-16 block">
        <Slide
          slidesToScroll={3}
          slidesToShow={3}
          infinite={false}
          defaultIndex={0}
          prevArrow={
            <div
              className="absolute bottom-[-53px] shadow md:bottom-auto md:top-[-75px] right-0 bg-white p-2 md:mb-4"
              style={{ right: 60, left: "unset" }}
            >
              <ArrowLeftIcon className="w-6 h-6 text-brand-primary-blue-main"></ArrowLeftIcon>
            </div>
          }
          nextArrow={
            <div className="absolute bottom-[-53px] shadow md:bottom-auto md:top-[-75px] right-0 bg-white p-2 md:mb-4">
              <ArrowRightIcon className="w-6 h-6 text-brand-primary-blue-main"></ArrowRightIcon>
            </div>
          }
          responsive={responsiveSettings}
        >
          {data?.expert?.data?.attributes?.expert
            ?.slice(0, 10)
            ?.map((user: any, index: number) => {
              const img = getStrapiMedia(user?.image?.data?.attributes?.url);
              return (
                <div
                  className="bg-white rounded shadow border mx-2 relative"
                  key={index}
                >
                  <Image
                    alt={
                      user?.image?.data?.attributes?.alternativeText ??
                      "experts"
                    }
                    className="w-full"
                    src={img || ""}
                    width={100}
                    height={100}
                  />
                  <div className="p-4 bg-white text-center flex flex-col justify-center items-center">
                    <Typography
                      variant="h6"
                      className="font-bold text-brand-primary-icon"
                    >
                      {user?.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      className=" text-brand-primary-icon font-semibold"
                    >
                      {user?.description}
                    </Typography>
                    <Link href={APP_ROUTES.aiSuggest}>
                      <Button variant="text" size="small">
                        {`Consult now`}
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
        </Slide>
      </div>
      <div className="md:grid hidden lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 my-8 w-full">
        {/* creating multiple experts cards using map function starts */}
        {data?.expert?.data?.attributes?.expert.map(
          (user: any, index: number) => {
            const expertImage = getStrapiMedia(
              user?.image?.data?.attributes?.url
            );
            return (
              <div
                className="bg-white rounded-md shadow-sm border mx-2 relative"
                key={index}
              >
                <Image
                  alt={user?.title ?? "title"}
                  className="w-full"
                  src={expertImage || ""}
                  width={100}
                  height={100}
                />
                <div className="p-4 bg-white text-center flex flex-col justify-center items-center">
                  <Typography
                    variant="h6"
                    className="font-bold text-brand-primary-icon"
                  >
                    {user?.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className=" text-brand-primary-icon font-semibold"
                  >
                    {user?.description}
                  </Typography>
                  <Link href={`${APP_ROUTES.lead}?source=talktoexpert`}>
                    <Button variant="text" size="small">
                      {`Consult now`}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default TalkToExperts;
