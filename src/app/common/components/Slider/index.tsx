"use client"
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Slide } from "react-slideshow-image";
import Typography from "@/app/common/atoms/Typography";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import Button from "../../atoms/Button";
import Link from "next/link";

import useMediaQueries from "media-queries-in-react";


/**
 * todo link from strapi for these button
 */

const Slider = (props: any) => { 
  const mediaQueries = useMediaQueries({
    narrow: "screen and (max-width: 500px)",
  });
  return (
    <Slide
      autoplay={true}
      indicators={true}
      prevArrow={<></>}
      nextArrow={<></>}
    >
      {props?.data.banner?.map((item: any, index: number) => {
    const fontSize= mediaQueries?.narrow
          ? " "
          : getStrapiMedia(item?.backgroundImage?.data?.[0]?.attributes?.url);

          const image=getStrapiMedia(item?.backgroundImage?.data?.[0]?.attributes?.url);
        return (
          <div className="each-slide-effect w-full" key={index}>
            <div
              className="w-screen h-full py-16"
              style={{
                backgroundImage: `url(${props.home==true?fontSize:image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            >
              <div className="container flex gap-y-8 flex-col mx-auto">
                <Typography
                  component="h5"
                  variant={"h5"}
                  className={` text-brand-text-title
                    ${
                      !mediaQueries.narrow && item.backgroundTheme === "dark"
                        ? "text-white"
                        : ""
                    } 
                  `}
                >
                  {item.description}
                </Typography>
                <div className="w-72 flex gap-4">
                  {item?.images?.data?.map((item: any) => {
                    const url = getStrapiMedia(item?.attributes?.url);
                    return (
                      <Image
                        key={url}
                        src={url || ""}
                        width={85}
                        height={85}
                        alt={item?.attributes?.alternativeText ?? 'img'}
                        className="w-full h-20"
                      />
                    );
                  })}
                </div>
                <div className="md:w-1/2">
                  <Typography
                    component={"h1"}
                    variant={"h1"}
                    fontWeight="extrabold"
                    className={`text-brand-text-title
                    ${
                      !mediaQueries.narrow && item.backgroundTheme === "dark"
                        ? "text-white"
                        : ""
                    } 
                  `}
                  >
                    {item.title}
                  </Typography>
                </div>
                <div className="flex gap-4 py-4">
                  {item.primaryButtonText && (
                    <Link href={"/ai-suggest"}>
                      <Button
                        variant={item.primaryButtonType}
                        className={"md:hidden"}
                      >
                        {item.primaryButtonText}
                      </Button>
                      <Button
                        variant={item.primaryButtonType}
                        color={
                          item.backgroundTheme === "dark" ? " white" : "primary"
                        }
                        className={"hidden md:block border"}
                      >
                        {item.primaryButtonText}
                      </Button>
                    </Link>
                  )}
                  {item.secondaryButtonText && <Link href={`/lead?source=slider`}>
                    <Button variant={item.secondaryButtonType}>
                      {item.secondaryButtonText}
                    </Button>
                  </Link>}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slide>
  );
};

export default Slider;
