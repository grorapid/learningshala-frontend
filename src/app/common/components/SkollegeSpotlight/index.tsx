"use client"
import React, { useState } from "react";
import Typography from "../../atoms/Typography";
import Image from "next/image";
import image from "../../../../../public/images/right.png";

const SkollegeSpotlight = (props: any) => {
  const { data } = props;
  const [showMore, setShowMore] = useState<boolean>(false);
  return (
    <div className="bg-brand-background-blue py-12 md:py-16 border-b shadow-sm">
      <div className={`container mx-auto flex justify-start items-start flex-col md:flex-row gap-8 md:gap-12 ${showMore ? 'items-start' : ''}`}>
        <div className={`w-full flex flex-col gap-4 md:gap-8 ${data?.features?.length > 0 ? 'md:w-7/12' : ''}`}>
          <Typography {...data?.title} className="font-bold" />
          <Typography
            {...data?.description}
            text={showMore ? data?.long_description : data?.description?.text}
            className="text-justify"
          />
          <button onClick={() => setShowMore(!showMore)}>
            <span className="lg:py-0 flex hover:underline text-brand-primary-blue-main font-bold">
              {showMore ? "See Less" : "See More"}
            </span>
          </button>
        </div>
        <div className="grid grid-cols-2 w-full md:w-1/3 gap-2 md:pt-20">
          {data.features.map((item: any, index: number) => (
            <div key={index} className="flex mb-4 items-center">
              <Image src={image} className="h-5 mr-5 w-5" alt="img" />
              <Typography>{item.description}</Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkollegeSpotlight;
