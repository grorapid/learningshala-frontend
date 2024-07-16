"use client"
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import Typography from "../../atoms/Typography";
import { BiArrowBack } from "react-icons/bi";
import { APP_ROUTES } from "@/app/utils/app-routes";

export default function TopUniversitiesMobile({
  title,
  university,
  nav,
  article,
  handleNav,
  setOtherActive,
}: any) {
  1;

  const [active, setActive] = useState({
    all: false,
    ug: false,
    head: true,
    article: false,
    course: false,
  });

  const handleclick = (checkCase: string) => {
    let obj = { ...active };
    if (checkCase === "universities-list") {
      obj.all = !obj.all;
      obj.ug = false;
      obj.article = false;
      obj.head = !obj.head;
      obj.course = true;
    } else if (checkCase === "ug-type") {
      obj.ug = true;
      obj.all = false;
      obj.head = false;
      obj.article = false;
      obj.course = true;
    } else if (checkCase === "articles") {
      obj.article = true;
      obj.course = false;
    } else if (checkCase === "universities") {
      obj.article = false;
      obj.course = true;
    }
    setActive(obj);
  };
  const [articles, setArticles] = useState<any>();

  const handlearticle = (val: any) => {
    const data = university?.filter(
      (item: any) => item?.attributes?.slug === val
    );
    setArticles(data);
  };

  return (
    <>
      <div
        onClick={() => {
          handleclick("universities-list");
          setOtherActive(false);
        }}
        className={`text-md group ${active.head ? "flex" : "hidden"} ${
          active.all
            ? "font-bold text-brand-primary-blue-main"
            : "text-brand-text-title font-semibold"
        } items-center text-base    focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        {title}
        <ChevronDownIcon
          className={`text-brand-primary-blue-main
                  h-5 w-5  transition duration-150 ease-in-out group-hover:text-opacity-80`}
          aria-hidden="true"
        />
      </div>

      {/** row two will start */}

      <div
        className={` ${active.all ? "flex" : "hidden"} ${
          nav ? "fixed" : "absolute"
        } inset-0  md:hidden bg-white mt-14 pt-4 flex-col gap-3`}
      >
        <div className="container mx-auto">
          <div
            className="text-black font-semibold text-sm container flex items-center py-4 gap-2"
            onClick={() => {
              handleclick("universities-list");
            }}
          >
            <BiArrowBack className={"h-4 w-4"} />
            <span>{"Back to menu"}</span>
          </div>
          <div className="flex justify-start space-x-4  items-start">
            <div
              onClick={() => {
                handleclick("universities");
              }}
              className={`text-md font-semibold ${
                active?.course
                  ? "text-brand-primary-blue-main"
                  : "text-brand-text-primary"
              }`}
            >
              {`Top Universities`}
            </div>
            <div
              onClick={() => {
                handleclick("articles");
              }}
              className={` text-md font-semibold ${
                active?.article
                  ? "text-brand-primary-blue-main"
                  : "text-brand-text-primary"
              }`}
            >
              {`Articles`}
            </div>
          </div>
          <div
            className={` ${
              active.course ? "grid" : "hidden"
            } grid-cols-2 bg-white py-4 gap-2 overflow-scroll h-1/2`}
          >
            {university?.map((item: any, index: number) => {
              const img = getStrapiMedia(
                item?.attributes?.logo?.data?.attributes?.url
              );
              return (
                <Link
                  key={index}
                  href={`/universities/${item?.attributes?.slug}`}
                >
                 
                  <div
                    onClick={() => {
                      handleNav(false);
                      handlearticle(item?.attributes?.slug);
                    }}
                    className="border cursor-pointer p-4 rounded-lg hover:border hover:border-brand-primary-blue-main"
                  >
                    <Image
                      src={img || ""}
                      height={32}
                      width={100}
                      className="h-8 w-auto"
                      alt={item?.attributes?.name ?? "logo"}
                    />

                    <Typography
                      variant="h5"
                      component={"h4"}
                      fontWeight="semi-bold"
                      className="my-2 h-12 overflow-hidden hover:text-brand-primary-blue-main"
                    >
                      {item?.attributes?.name}
                    </Typography>

                    <div className="flex justify-start items-center">
                      <Link
                        href={`/universities/${item?.attributes?.slug}/courses`}
                        onClick={() => handleNav(false)}
                      >
                        <Typography
                          variant="body1"
                          fontWeight="semibold"
                          className="hover:text-brand-text-title text-brand-primary-blue-main hover:underline"
                        >
                          {`Courses`}
                        </Typography>
                      </Link>
                      <Link
                        onClick={() => handleNav(false)}
                        href={`/universities/${item?.attributes?.slug}/${item?.attributes?.admission_data?.data?.attributes?.slug}}`}
                      >
                        <Typography
                          variant="body1"
                          fontWeight="semibold"
                          className="ml-5 hover:text-brand-text-title text-brand-primary-blue-main hover:underline"
                        >
                          {`Admission`}
                        </Typography>
                      </Link>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div
            className={`${
              active.article ? "flex" : "hidden"
            } flex-col overflow-x-hidden h-[700px] overflow-y-scroll `}
          >
            {article?.map((item: any, index: number) => (
              <div key={index} className="border-b py-4">
                <div>
                  <Typography
                    variant="body1"
                    className="font-semibold text-brand-title-text w-11/12 overflow-hidden truncate"
                  >
                    {item?.attributes?.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="font-normal text-gray-500  w-11/12 overflow-hidden truncate"
                  >
                    {item?.attributes?.shortDescription}
                  </Typography>
                </div>
                <Link
                  key={item?.attributes?.title}
                  href={APP_ROUTES.blogs(item?.attributes?.slug)}
                  className="text-brand-primary-blue-main text-sm font-normal"
                >
                  {`View all`}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/** row three will start */}
    </>
  );
}
