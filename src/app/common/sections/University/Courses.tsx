'use client'
import Typography from "../../atoms/Typography";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { ArrowRightIcon } from "@heroicons/react/20/solid";


import { Slide } from "react-slideshow-image";
import { getStrapiMedia } from "@/app/utils/api-helpers";


const CoursesFees = ({ data }: any) => {

  const responsiveSettings = [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 220,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ];
  return (
    data && <div className="w-full  mb-16 mt-8"  >
      <Typography
        variant="h3"
        component={"h3"}
        className="font-bold w-60 md:w-full mb-8 text-brand-text-title"
      >
        Explore Courses by category
      </Typography>
      <Slide
        slidesToScroll={1}
        slidesToShow={4}
        prevArrow={
          <div
            className="absolute top-[-60px] right-0 bg-white p-2 mb-4"
            style={{ right: 60, left: "unset" }}
          >
            <ArrowLeftIcon className="w-6 h-6 text-brand-primary-blue-main"></ArrowLeftIcon>
          </div>
        }
        nextArrow={
          <div className="absolute top-[-60px] right-0 bg-white p-2 mb-4">
            <ArrowRightIcon className="w-6 h-6 text-brand-primary-blue-main"></ArrowRightIcon>
          </div>
        }
        responsive={responsiveSettings}
      >
        {data?.Categories?.Card?.map((item: any) => {
          const image = getStrapiMedia(item?.image?.data?.attributes?.url)
          return (
            <div
              key={item.id}
              className="w-full"
            >
              <div className="w-full">
                <Link href={`/${item?.url ?? '#'}`}> <div
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="  h-[140px] lg:h-[270px] cursor-pointer  rounded md:h-[220px] w-[96%] z-10"
                >
                  <div
                    className=" h-[140px] lg:h-[270px]   flex  p-5 rounded md:h-[220px] W-[100%] items-end"
                    style={{ background: "linear-gradient(178.19deg, rgba(27, 27, 27, 0) -31.06%, rgba(0, 0, 0, 0.72) 76.97%)" }}>

                    <Typography
                      variant="body1"
                     
                      className="text-brand-accent-white font-bold">
                      {item.name}
                    </Typography>
                  </div>

                </div>
                </Link>
              </div>
            </div>
          )
        })}
      </Slide>
    </div>
  );
};

export default CoursesFees;