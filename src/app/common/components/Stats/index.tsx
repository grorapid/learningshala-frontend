import React from "react";
import Image from "next/image";
import Inspire from "../../../../../public/images/HomePage/Stats/your-story.png";
import Forbes from "../../../../../public/images/HomePage/Stats/forbes.png";
import Hi from "../../../../../public/images/HomePage/Stats/hindustan-times.png";
import Typography from "../../atoms/Typography";

const featuredCompanyIcons = [
  {
    url: Forbes,
    alt: "forbes Ad",
  },
  {
    url: Inspire,
    alt: "Inspire Ad",
  },
  {
    url: Hi,
    alt: "HI-Ad",
  },
];
const Stats = ({ data }: any) => {
  return (
    <div className="bg-brand-background-blue py-12 overflow-hidden">
      <div className="w-10/12 md:w-3/5 md:flex md:justify-between gap-16 mx-auto md:items-center">
        <div className="flex gap-4 flex-col">
          <div className="bg-brand-accent-white  py-6 px-10 rounded border">
            <Typography
              variant="h2"
              component={"h2"}
              className="font-extrabold text-brand-primary-blue-main text-center"
            >
              {data.noOfPromotions}
            </Typography>
            <Typography
              variant="h6"
              className="text-slate-900 font-semibold text-center"
            >
              promotions received
            </Typography>
          </div>
          <div className="bg-brand-accent-white py-6 px-10 rounded border">
            <Typography
              variant="h2"
              className="font-extrabold text-brand-primary-blue-main text-center"
            >
              {data.noOfPlacements}
            </Typography>
            <Typography
              variant="h6"
              className="text-slate-900 font-semibold text-center"
            >
              students placed
            </Typography>
          </div>
        </div>
        <div className="px-5 py-6 md:px-0 md:py-0 ">
          <Typography
            variant="h5"
            className="text-slate-900 font-bold mb-5 text-center"
          >
            Featured in
          </Typography>
          <div className="flex justify-start gap-10 md:gap-5">
            {featuredCompanyIcons.map((img: any,index:number) => {
              return (
                <picture key={index} className="md:h-16 h-8 w-auto">
                  <Image
                    className="h-full w-full object-cover"
                    src={img.url}
                    alt={img.alt ?? 'feature-icons'}
                  />
                </picture>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
