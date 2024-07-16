"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import Typography from "../../atoms/Typography";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

const TextTestimonials = ({ data, show, title }: any) => {
  const [flip, setFlip] = useState(0);

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
        slidesToShow: 3,
        slidesToScroll: 1,
        defaultIndex: 0,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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
    <div className="bg-brand-background-blue  py-8">
      <div className="container mx-auto pb-12 md:pt-9 md:py-6 relative">
        {show ? (
          <Typography {...data?.title} className="mb-10 font-bold" />
        ) : (
          <Typography
            variant={"h3"}
            component={"h3"}
            className="mb-10 font-bold"
          >
            {title ?? `What Out Student Tell About Us`}
          </Typography>
        )}
        <Slide
          slidesToScroll={3}
          slidesToShow={3}
          infinite={false}
          defaultIndex={0}
          prevArrow={
            <div
              className="absolute bottom-[-60px] shadow md:bottom-auto md:top-[-75px] right-0 bg-white p-2 md:mb-4"
              style={{ right: 60, left: "unset" }}
            >
              <ArrowLeftIcon className="w-6 h-6 text-brand-primary-blue-main"></ArrowLeftIcon>
            </div>
          }
          nextArrow={
            <div className="absolute bottom-[-60px] shadow md:bottom-auto md:top-[-75px] right-0 bg-white p-2 md:mb-4">
              <ArrowRightIcon className="w-6 h-6 text-brand-primary-blue-main"></ArrowRightIcon>
            </div>
          }
          responsive={responsiveSettings}
        >
          {data &&
            data?.cards?.slice(0, 10)?.map((user: any, index: number) => {
              return (
                <div
                  className="rounded w-full mx-auto px-2"
                  key={user?.background?.data?.attributes?.url}
                >
                  <div
                    onMouseEnter={() => {
                      setFlip(index + 1);
                    }}
                    onMouseLeave={() => {
                      setFlip(0);
                    }}
                    className="w-full"
                  >
                    <div
                      style={{
                        backgroundImage:
                          flip !== index + 1
                            ? `url(${getStrapiMedia(
                                user?.background?.data?.attributes?.url
                              )})`
                            : "",
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: user.backgroundColor,
                      }}
                      className={`z-10 h-64 w-full border rounded-sm flex items-end ${
                        flip !== index + 1 ? "grayscale" : ""
                      }`}
                    >
                      <Typography
                        variant="body1"
                        className={`px-4  md:pb-3 text-justify text-brand-accent-white ${
                          flip === index + 1 ? `` : ""
                        }`}
                      >
                        {flip !== index + 1
                          ? user?.shortDescription
                          : user?.description}
                      </Typography>
                    </div>
                    <div className="flex items-center space-x-2 px-5 py-4 bg-white">
                      <Image
                        width={50}
                        height={50}
                        src={
                          getStrapiMedia(user?.avatar?.data?.attributes?.url) ??
                          ""
                        }
                        alt={
                          user?.avatar?.data?.attributes?.url
                            ?.alternativeText ?? "avatar"
                        }
                        className="w-[26px] h-[26px] md:w-[50px] md:h-[50px] rounded-full object-cover mr-2"
                      />
                      <div>
                        <Typography
                          variant="body1"
                          className="font-bold text-brand-accent-black-main"
                        >
                          {user?.title}
                        </Typography>
                        {/* <Typography variant="body2" className="  text-neutral-900">
                      {user.qualification}
                    </Typography> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </Slide>
      </div>
    </div>
  );
};

export default TextTestimonials;
