"use client"
import Typography from "../../atoms/Typography";
import Link from "next/link";
import Image from "next/image";
import Rating from "../../atoms/Rating";
import Button from "../../atoms/Button";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import { APP_ROUTES } from "@/app/utils/app-routes";
import { HiOutlineChevronRight } from "react-icons/hi";
import NextBreadcrumb from "../University/UniversityBreadcrumb";
export interface Navlink {
  id: number;
  name: string;
  url: string;
}
const Banner = ({ data, admission, program, course }: any) => {
  const logo = getStrapiMedia(
    data?.university?.data?.attributes?.logo?.data?.attributes?.url
  );
  const bgImg = getStrapiMedia( data?.university?.data?.attributes?.bannerImage?.data?.attributes?.url);
  const collegeLogo = getStrapiMedia(data?.college_logo?.data?.attributes?.url);
  const admissionbanner = getStrapiMedia(data?.banner?.data?.attributes?.url);
  const brochure = getStrapiMedia(
    data?.Brochure?.data?.attributes?.url
  );
  return (
    <div
    className=" h-72 md:flex md:h-60 lg:h-80 w-full items-center"
    style={{
      backgroundImage: `url(${bgImg || ""})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
  >
      <div className="px-2 py-3">
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
      <div className="flex justify-start container  mx-auto  items-center">
      {admission && 
           <div className="image-container md:h-20 md:p-3 p-2   lg:h-24 bg-white">
           <Image
             className="h-full w-auto"
             src={logo || ""}
             width={100}
             height={40}
             alt={data?.university?.data?.attributes?.logo?.data?.attributes?.alternativeText ?? 'banner'}
           />
         </div>
            
          }
          {(course || program) && 
            <div className="image-container md:h-20 md:p-3 p-2 lg:h-24 bg-white">
            <Image
              className="h-full w-auto"
              src={collegeLogo || ""}
              width={100}
              height={40}
              alt={data?.college_logo?.data?.attributes?.alternativeText ?? 'banner'}
            />
          </div>
           }
        <div className=" ml-8  ">
          <div className="mb-1 ">
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
          </div>
        

          {(admission || course) && 
            <Typography
              variant="h2"
              className="font-bold leading-normal md:leading-snug lg:leading-snug tracking-wide text-brand-accent-white uppercase pb-3 w-full md:w-4/5 xl:w-[720px]"
            >
              {data?.name}
            </Typography>
          }
          {program && 
            <Typography
              variant="h2"
              className="font-bold leading-normal md:leading-snug lg:leading-snug tracking-wide text-brand-accent-white uppercase pb-3 w-full lg:w-4/5 xl:w-[720px] "
            >
              {data?.university?.data?.attributes.name} {data?.shortform}
              {" courses and Fees"}
            </Typography>
          }
          <div className="md:flex md:items-center mb-5">
            <div>
              <span className="text-sm md:text-lg font-normal md:font-semibold text-brand-accent-white">
                {data?.learners_enrolled} learners enrolled
              </span>
              <span className="text-[#909090] hidden md:inline-flex md:mx-2">
                |
              </span>
            </div>
            {admission &&
              <div className="flex justify-start items-center">
                <Rating
                  value={data?.university?.data?.attributes?.rating}
                  size={14}
                  classname="text-brand-accent-white my-1 md:my-0"
                />
                <Typography
                  variant="body2"
                  className="text-brand-accent-white font-semibold"
                >
                  ({data?.university?.data?.attributes?.reviewsCount} reviews)
                </Typography>
              </div>
           }
            {(course || program) &&
              <Rating
                value={data?.rating}
                size={14}
                classname="text-brand-accent-white my-1 md:my-0"
              />
            }
            <span>
              <Typography
                variant="body2"
                className="font-normal mt-2 md:mt-0 md:font-semibold text-brand-text-dark"
              >
                {data?.reviews}
              </Typography>
            </span>
          </div>

          {course &&
            <div className="flex flex-row ">
              <Link href={`${APP_ROUTES.lead}?source=couseBanner`}>
                <Button
                  element="div"
                  variant="contained"
                  size="small"
                  className="mr-3 text-xs md:text-base  mb-2 lg:mb-0"
                >
                  Apply Now
                </Button>
              </Link>
              <a href={`${globalThis.window?.location?.href ?? '#'}?brochure=true&downloadFile=${brochure ?? '#'}&fileName=${data?.name ?? '#'}-brochure`} > <Button variant="outlined"  className="text-xs md:text-base" size="small">
                Download Brochure
              </Button></a>
            </div>
         }
        </div>
      
      </div>
    </div>
  );
};

export default Banner;
