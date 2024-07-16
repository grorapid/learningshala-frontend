"use client"
import React, { useState } from "react";
import Typography from "../../atoms/Typography";
import { Slide } from "react-slideshow-image";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/20/solid";
import VideoPlayer from "../../atoms/Video";
import MyModal from "../../molecules/modal";
import Image from "next/image";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import { XMarkIcon } from "@heroicons/react/24/solid";
import image from "../../../../../public/images/Group (4).png";

const VideoTestimonials = ({ data }: any) => {
  const responsiveSettings = [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
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
  const [open, setOpen] = useState(0);

  return (
    <div className="container mx-auto flex flex-col justify-start items-start my-12 md:my-16">
      <Typography
        variant="h3"
        component={"h3"}
        className="text-brand-text-title font-bold mb-8"
      >
        Hear Them Out
      </Typography>
      <div className="w-full pb-12">
        <Slide
          infinite={false}
          slidesToShow={3}
          slidesToScroll={3}
          defaultIndex={0}
          responsive={responsiveSettings}
          prevArrow={
            <div
              className="absolute bottom-[-60px] shadow md:bottom-auto md:top-[-65px]  right-0 bg-white p-2 mb-4"
              style={{ right: 60, left: "unset" }}
            >
              <ArrowLeftIcon className="w-6 h-6 text-sm  text-brand-primary-blue-main"></ArrowLeftIcon>
            </div>
          }
          nextArrow={
            <div className=" absolute  bottom-[-60px]  shadow md:bottom-auto md:top-[-65px]  md:right-0 bg-white p-2 mb-4">
              <ArrowRightIcon className="w-6 h-6  text-sm  text-brand-primary-blue-main"></ArrowRightIcon>
            </div>
          }
        >
          {data?.cards?.slice(0, 10)?.map((item: any, index: number) => {
            const imgUrl = getStrapiMedia(item?.video?.data?.attributes?.url);
            return (
              <div
                style={{
                  backgroundImage: `url(${imgUrl || ""})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
                key={index}
                className="flex h-[490px] w-[276px] mx-4  hover:scale-110 transition duration-500 cursor-pointer justify-end items-center hover:grow flex-col rounded-lg shadow my-2"
              >
                {/** Modal code */}
                {!!open && (
                  <MyModal open={open === index + 1} close={() => void 0}>
                    <div className="fixed inset-0 z-50 flex items-center justify-center content-star px-2">
                      <div className="fixed inset-0 bg-black opacity-50"></div>

                      <div className="flex items-center justify-center gap-2">
                        <div className="absolute md:w-1/2 w-10/12 ">
                          <div className="bg-brand-background-blue flex justify-center items-center relative">
                            <XMarkIcon
                              className="h-8 cursor-pointer text-white w-8 absolute right-0 mr-4"
                              onClick={() => setOpen(0)}
                            />
                          </div>
                          <div className="p-4 flex justify-center align-center">
                            <VideoPlayer playing={true} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </MyModal>
                )}
                {/** Modal code end */}
                {/** Video Icon code */}
                <Image
                  onClick={() => setOpen(index + 1)}
                  alt="image"
                  src={image}
                  className="h-14 w-auto cursor-pointer"
                  width={300}
                  height={475}
                />
                {/** Video Icon code end*/}
                <div className="  bg-blue-900 rounded-b-md opacity-60 mt-32 h-24 w-full flex flex-col justify-center items-center ">
                  <Typography
                    variant="h4"
                    component={"h4"}
                    className="text-white opacity-100  z-4"
                    fontWeight="bold"
                  >
                    {item?.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    component={"h6"}
                    className="text-white opacity-100"
                    fontWeight="semibold"
                  >
                    {item?.description}
                  </Typography>
                </div>
              </div>
            );
          })}
        </Slide>
      </div>
    </div>
  );
};

export default VideoTestimonials;
