"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Typography from "../../atoms/Typography";
import { Slide } from "react-slideshow-image";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import Link from "next/link";
import { getBlog } from "@/app/utils/get-blog-by-slug";

interface Popular {
  data: [
    {
      attributes: {
        publishedAt: string;
        readtime: string;
        likes: string;
        toparticles: boolean;
        content: string;
        shortDescription: string;
        title: string;
        slug: string;
        image: {
          data: { attributes: { url: string; alternativeText: string } };
        };
      };
    },
  ];
}
const PopularArticles = ({ data, title }: any) => {
 

  return (
    data?.filter((item: any) => item?.attributes?.toparticle == true).length ?  <div className="py-5  md:py-10">
     <Typography variant="h3" component={"h3"} className="font-bold mb-8">
        {title ?? `Popular Articles`}
      </Typography> 
      {/** Mobile Interface Start*/}
      <div className="md:hidden block">
        <Slide
          slidesToScroll={1}
          slidesToShow={1}
          indicators={true}
          prevArrow={<></>}
          nextArrow={<></>}
        >
          {data
            ?.filter((item: any) => item?.attributes?.toparticle == true)
            ?.map((item: any, index: any) => {
              const img = getStrapiMedia(
                item?.attributes?.image?.data?.attributes?.url
              );

              return (
                <div
                  key={index}
                  className="flex md:hidden    lg:hidden xl:hidden bg-brand-background-blue flex-row p-4   justify-center items-center"
                >
                  <div className="flex flex-col  space-y-3 w-full md:w-10/12 justify-start items-start">
                    <Link key={index} href={`/blogs/${item?.attributes?.slug}`}>
                      <Typography
                        variant="body1"
                        className="font-semibold cursor-pointer hover:text-brand-primary-blue-main text-brand-text-title"
                      >
                        {item?.attributes?.title}
                      </Typography>
                    </Link>
                    <Typography
                      variant="body2"
                      data-tooltip-target="tooltip-default"
                      className="font-normal text-brand-text-title"
                    >
                      {item?.attributes?.shortDescription}
                    </Typography>

                    <Typography
                      variant="body2"
                      className="font-light flex justify-center items-center text-brand-primary-blue-main"
                    >
                      {item?.attributes?.publishedAt.slice(0, 10)}{" "}
                      <span className="h-1 w-1 bg-brand-text-title rounded-full mx-1.5"></span>
                      {item?.attributes?.readtime}{" "}
                      <span className="h-1 w-1 bg-brand-text-title rounded-full mx-1.5"></span>
                      {item?.attributes?.likes} likes
                    </Typography>
                  </div>
                </div>
              );
            })}

        </Slide>
      </div>
      {/** Mobile Interface End*/}
      <div className="md:grid hidden grid-cols-2 gap-8">
        {data
          ?.filter((item: any) => item?.attributes?.toparticle == true)
          ?.map((item: any, index: any) => {
            const backgroundImage = getStrapiMedia(
              item?.attributes?.image?.data?.attributes?.url
            );
            return (
              <div
                key={index}
                className="flex bg-brand-background-blue gap-2 flex-row py-8 px-6 justify-between items-center"
              >
                <div className="flex flex-col space-y-3  justify-start items-start w-2/3">
                  <Link key={index} href={`/blogs/${item?.attributes?.slug} `}>
                    <Typography
                      variant="body1"
                      className="font-semibold cursor-pointer hover:text-brand-primary-blue-main text-brand-text-title"
                    >
                      {item?.attributes?.title}
                    </Typography>
                  </Link>
                  <Typography
                    variant="body2"
                    className="font-normal text-brand-text-title"
                  >
                    {item?.attributes?.shortDescription}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="font-light flex justify-center items-center text-brand-primary-blue-main"
                  >
                    {item?.attributes?.publishedAt.slice(0, 10)}
                    <span className="h-1 w-1 bg-brand-text-title rounded-full mx-2 hidden md:block"></span>
                    {item?.attributes?.readtime}
                    <span className="h-1 w-1 bg-brand-text-title rounded-full mx-2 hidden md:block"></span>
                    {item?.attributes?.likes}
                  </Typography>
                </div>
                <div className="hidden md:block image-container w-[200px] h-[150px]">
                  <Image
                    className="h-full w-full object-cover"
                    src={backgroundImage || ""}
                    alt={
                      item?.attributes?.image?.data?.attributes
                        ?.alternativeText ?? "article-img"
                    }
                    height={600}
                    width={700}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>:<></>
  );
};

export default PopularArticles;
