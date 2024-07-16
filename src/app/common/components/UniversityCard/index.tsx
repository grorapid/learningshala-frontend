import React from "react";
import Typography from "../../atoms/Typography";
import Image from "next/image";
import Rating from "../../atoms/Rating";
import Button from "../../atoms/Button";
import Link from "next/link";
import { APP_ROUTES } from "@/app/utils/app-routes";

interface UniversityData {
  name: string;
  logo: string;
  banner: string;
  rating: number;
  reviews: number;
  rank: string;
  slug: string;
  index: number;
  title: string;
  alt: string;
}
const UniversityCard = ({
  name,
  rank,
  rating,
  reviews,
  slug,
  index,
  banner,
  logo,
  alt,
}: UniversityData) => {
  return (
    <div key={index} className="p-6 border  rounded  w-full ">
        <div className="image-container w-auto h-40 bg-gray-200 border border-gray-200">
          {banner && (
            <Image
              src={banner || ""}
              className="w-full h-full"
              alt={alt ?? "banner"}
              height={100}
              width={420}
            />
          )}
        </div>
        {/** University logo */}
        <div className="image-container h-12 w-36 my-6">
          <Image
            src={logo || ""}
            alt={alt ?? "logo"}
            className="h-full w-auto"
            height={48}
            width={320}
          />
        </div>
        {/** University logo */}
        <Typography
          variant="h5"
          component={"h5"}
          className="font-semibold md:h-16 overflow-hidden text-brand-text-title"
        >
          {name}
        </Typography>
        <div className="flex justify-start items-center">
          <Rating
            value={rating}
            size={14}
            classname="text-brand-primary-blue-main"
          />
          {/** Default Review are 10 */}
          <Typography variant="body2" className="my-3 text-brand-text-primary">
            {`(${reviews ?? 10} reviews)`}
          </Typography>
        </div>
        <Typography
          variant="body2"
          className="font-normal text-brand-text-title"
        >
          {rank}
        </Typography>
        <div className="mt-3">
          <Link className="" href={APP_ROUTES.universityPage(slug)}>
            <Button
              element="div"
              variant="contained"
              className="lg:text-md text-base font-semibold text-center"
              color="primary"
              size="extrasmall"
            >
              {`Know more`}
            </Button>
          </Link>
        </div>
    </div>
  );
};

export default UniversityCard;
