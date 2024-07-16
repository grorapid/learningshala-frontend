"use client"
import Typography from "../../atoms/Typography";
import { Slide } from "react-slideshow-image";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { IoIosArrowForward } from "react-icons/io";
import { Newsdata } from "../../Interfaces";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import Link from "next/link";
import RichTextEditor from "../../components/RichTextEditor";

interface News {
  data: Newsdata;
  show: boolean;
}
const NewsArticles = ({ data, show }: News) => {
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
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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
    <>
      <div className={` ${show ? "md:block" : "md:hidden"} block `}>
        <Slide
          slidesToScroll={3}
          slidesToShow={3}
          //  indicators={true}
          autoplay={false}
          infinite={false}
          prevArrow={
            <div
              className=" absolute bottom-[-65px] shadow md:bottom-auto md:top-[-75px]  right-0 bg-white p-2 mb-4"
              style={{ right: 60, left: "unset" }}
            >
              <ArrowLeftIcon className="w-6 h-6 text-sm  text-brand-primary-blue-main"></ArrowLeftIcon>
            </div>
          }
          nextArrow={
            <div className=" absolute  bottom-[-65px]  shadow md:bottom-auto md:top-[-75px]  md:right-0 bg-white p-2 mb-4">
              <ArrowRightIcon className="w-6 h-6  text-sm  text-brand-primary-blue-main"></ArrowRightIcon>
            </div>
          }
          responsive={responsiveSettings}
        >
          {data?.data?.map((item, index) => {
            const img = getStrapiMedia(
              item?.attributes?.image?.data?.attributes?.url
            );
            return (
              <div
                key={index}
                className="flex rounded-md  w-[97%] border  flex-col  space-y-3   justify-start items-start"
              >
                <Image
                  width={700}
                  height={400}
                  src={img || ""}
                  className="h-48 object-cover rounded-t-md w-full "
                  alt={
                    item?.attributes?.image?.data?.attributes
                      ?.alternativeText ?? "news-articles"
                  }
                />
                <div className="p-7  space-y-3">
                <Link    href={`/blogs/${item?.attributes?.slug}`}>  <Typography
                    variant="body1"
                    className="font-semibold hover:text-brand-primary-blue-main text-brand-text-title"
                  >
                    {item?.attributes?.title}
                  </Typography></Link>
                  <Typography
                    variant="body2"
                    className="font-normal text-brand-text-title"
                  >
                    Author : {item?.attributes?.author}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="font-normal text-brand-text-title"
                  >
                    Last Update : {item?.attributes?.updatedAt.slice(0, 10)}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="font-normal  text-brand-text-title"
                  >
                    {item?.attributes?.shortDescription}
                  </Typography>
                  <Link
                    className="text-base flex justify-start items-center font-medium mt-4 hover:underline  text-brand-primary-blue-main cursor-pointer"
                    href={`/blogs/${item?.attributes?.slug}`}
                  >
                    Read The Article <IoIosArrowForward />
                  </Link>
                </div>
              </div>
            );
          })}
        </Slide>
      </div>

      <div
        className={` ${
          show ? "hidden" : "grid"
        } lg:grid-cols-3 md:grid-cols-2 gap-6  `}
      >
        {data?.data?.map((item, index) => {
          const img = getStrapiMedia(
            item?.attributes?.image?.data?.attributes?.url
          );

          return (
            <div
              key={index}
              className="md:flex shadow-md lg:flex xl:flex hidden    flex-col  space-y-3  justify-start items-start"
            >
              <Image
                width={700}
                height={400}
                src={img || ""}
                className="object-cover h-60 w-full "
                alt="image"
              />
              <div className="p-7  space-y-3">
              <Link    href={`/blogs/${item?.attributes?.slug}`}>   <Typography
                  variant="body1"
                  className="font-semibold text-brand-text-title"
                >
                  {item?.attributes?.title}
                </Typography></Link>
                <Typography
                  variant="body2"
                  className="font-normal text-brand-text-title"
                >
                  Author : {item?.attributes?.author}
                </Typography>
                <Typography
                  variant="body2"
                  component={"p"}
                  className="font-normal text-brand-text-title"
                >
                  Last Update : {item?.attributes?.updatedAt.slice(0, 10)}
                </Typography>
                <Typography
                  variant="body2"
                  component={"p"}
                  className="font-normal  text-brand-text-title"
                >
                  {item?.attributes?.shortDescription}
                </Typography>
                <Link
                  className="text-base flex justify-start items-center font-medium mt-5 hover:underline  text-brand-primary-blue-main cursor-pointer"
                  href={`/blogs/${item?.attributes?.slug}`}
                >
                  Read The Article <IoIosArrowForward />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NewsArticles;
