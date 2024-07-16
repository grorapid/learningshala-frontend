"use client"
import React, { useState } from "react";
import Image from "next/image";
import Typography from "../../atoms/Typography";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import Button from "../../atoms/Button";

const ImageCardSilder = ({ data }: any) => {
  const [showAll, setShowAll] = useState(false);
  const handleClick = (e: any) => {
    e.preventDefault();
    setShowAll(true);
  };
  const images = showAll
    ? data?.images?.data
    : [...data?.images?.data]?.slice(0, 12);
  return (
    <div className="bg-white container mx-auto my-12 md:my-16">
      <div className="flex flex-col justify-center items-center gap-4 md:gap-8">
        {data.title && (
          <Typography
            {...data.title}
            className="text-brand-primary-icon"
            fontWeight="bold "
          />
        )}
        <div className="grid w-full grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-8">
          {images?.map((img: any) => {
            const imgUrl = getStrapiMedia(img.attributes.url);
            return (
              <div
                className="lg:p-6 md:p-4 p-2 shadow rounded-md flex justify-center border"
                key={img.attributes.url}
              >
                <div className="h-5 md:h-8 w-auto">
                  <Image
                    unoptimized
                    src={imgUrl || ""}
                    alt={img.attributes.alternativeText ?? 'imgs'}
                    width={600}
                    height={img.attributes.height}
                    className="w-auto h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
        {data.images?.data?.length > 12 && (
          <Button
            color="primary"
            size="extrasmall"
            variant={"outlined"}
            className="px-6"
            onClick={handleClick}
          >
            {"View More"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ImageCardSilder;
