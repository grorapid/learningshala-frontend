import Rating from "@/app/common/atoms/Rating";
import Typography from "@/app/common/atoms/Typography";
import Image from "next/image";
import { BannerData } from "../../Interfaces";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import { HiOutlineChevronRight } from "react-icons/hi";
import NextBreadcrumb from "./UniversityBreadcrumb";
interface Banner {
  data: BannerData;
}
const BannerVarient1 = ({ data }: Banner) => {
  const bannerImage = getStrapiMedia(data?.bannerImage?.data?.attributes?.url);
  const logoImage = getStrapiMedia(data?.logo?.data?.attributes?.url);
  return (
    data && (
      <div
        className=" h-60 md:flex md:h-60 lg:h-80 w-full items-center"
        style={{
          backgroundImage: `url(${bannerImage || ""})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="px-2 py-6">
        <NextBreadcrumb
          homeElement={"Home"}
          separator={
            <span className="text-brand-accent-white">
              <HiOutlineChevronRight />
            </span>
          }
          activeClasses="text-brand-accent-white"
          containerClasses="flex justify-start  text-sm items-center text-brand-accent-white md:hidden"
          listClasses="hover:underline mx-2 font-semibold md:font-semibold"
          capitalizeLinks
        />
        </div>
        <div className="flex container mx-auto items-center">
          <div className="image-container md:h-20 md:p-3 p-2 h-12 lg:h-24 bg-white">
            <Image
              className="h-full w-auto"
              src={logoImage || ""}
              width={100}
              height={40}
              alt={data?.logo?.data?.attributes?.alternativeText ?? 'banner'}
            />
          </div>
          <div className="ml-8 ">
            <NextBreadcrumb
              homeElement={"Home"}
              separator={
                <span className="text-brand-accent-white">
                  <HiOutlineChevronRight />
                </span>
              }
              activeClasses="text-brand-accent-white"
              containerClasses="md:flex justify-start  text-sm items-center text-brand-accent-white hidden"
              listClasses="hover:underline mx-2 font-semibold md:font-semibold"
              capitalizeLinks
            />
            <Typography
              variant="h2"
              component={"h1"}
              className="text-white my-2 md:my-4 font-bold "
            >
              {data?.name}
            </Typography>
            <Typography
              variant="body1"
              
              className="text-white font-semibold"
            >
              {data?.rankTitle}
            </Typography>
            <div className="flex  justify-start my-1 items-center">
              <Rating
                value={data?.rating}
                size={14}
                classname={"text-brand-accent-white"}
              />
              <Typography
                variant="body2"
                
                className=" text-white "
              >
                {`(${data?.reviewsCount} reviews)`}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default BannerVarient1;
