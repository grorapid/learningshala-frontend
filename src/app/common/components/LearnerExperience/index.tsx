"use client";
import React from "react";
import Typography from "../../atoms/Typography";
import { Slide } from "react-slideshow-image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import LearnerExperienceCard from "../LearnerExperienceCard";

const LearnerExperience = ({ data }: any) => {
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
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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
    <div className="my-8 pb-12 container mx-auto">
      <Typography
        component={"h3"}
        variant="h3"
        fontWeight="bold"
        className="mb-8"
      >
        Learners Experience
      </Typography>
      <Slide
        slidesToScroll={3}
        slidesToShow={3}
        prevArrow={
          <div
            className=" absolute bottom-[-60px] shadow md:bottom-auto md:top-[-70px]  right-0 bg-white p-2 mb-4"
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
        {data?.learners?.map((program: any, index: number) => (
          <div className="w-full" key={index}>
            <LearnerExperienceCard
              key={index}
              name={program?.name}
              course={program?.course}
              specialization={program?.specialization}
              content={program?.content}
              image={program?.image}
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default LearnerExperience;
