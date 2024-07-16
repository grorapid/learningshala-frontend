"use client"
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Typography from "../../atoms/Typography";
import { BiArrowBack } from "react-icons/bi";
import { APP_ROUTES } from "@/app/utils/app-routes";

export default function ProgramMenuMobile({
  title,
  courses,
  articles,
  setOtherActive,
  nav,
  handleNav,
}: any) {
  const [type, setType] = useState(courses?.[0]?.attributes?.name);
  const map = courses?.reduce?.((acc: any, cum: any) => {
    return { ...acc, [cum.attributes.name]: cum.attributes };
  }, {});
  const handleCourses = (e: any, type: any) => {
    e.preventDefault();
    setType(type.attributes.name);
  };

  const [active, setActive] = useState({
    all: false,
    ug: false,
    head: true,
    article: false,
    course: false,
  });

  const handleclick = (checkCase: number) => {
    let obj = { ...active };
    if (checkCase === 1) {
      obj.all = !obj.all;
      obj.ug = false;
      obj.article = false;
      obj.head = true;
      obj.course = false;
    } else if (checkCase === 2) {
      obj.ug = true;
      obj.all = false;
      obj.head = false;
      obj.article = false;
      obj.course = true;
    } else if (checkCase === 3) {
      obj.article = true;
      obj.course = false;
    } else if (checkCase === 4) {
      obj.article = false;
      obj.course = true;
    }
    setActive(obj);
  };

  return (
    <>
      <div
        onClick={() =>{ handleclick(1)
          setOtherActive(false)}}
        className={`text-md group ${active.head ? "flex" : "hidden"} ${
          active.all
            ? "font-semibold text-brand-primary-blue-main"
            : "text-brand-text-title font-semibold"
        } items-center text-base   focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        {title}
        <ChevronDownIcon
          className={`
                  h-5 w-5 text-brand-primary-blue-main  transition duration-150 ease-in-out group-hover:text-opacity-80`}
          aria-hidden="true"
        />
      </div>

      <div>
        <div className="  ">
          <div
            className={`relative ${
              active.all ? "flex" : "hidden"
            } grid gap-4 bg-white  `}
          >
            <div className="flex flex-col gap-4 py-2">
              {courses?.map((item: any, index: number) => (
                <button
                  key={index}
                  onClick={(e) => {handleCourses(e, item); setOtherActive(false)}}
                  className="w-full flex items-center rounded-lg transition duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-brand-primary-blue-main focus-visible:ring-opacity-50"
                >
                  <div
                    onClick={() => handleclick(2)}
                    className={` text-base px-2 w-full flex justify-between items-center  ${
                      type === item?.attributes?.name
                        ? "text-brand-primary-blue-main font-semibold"
                        : "text-gray-900 font-semibold"
                    } `}
                  >
                    <div>{`${item.attributes.name?.toUpperCase()} Courses`}</div>
                    <span className="text-brand-primary-blue-main">
                      <MdOutlineArrowForwardIos />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/** row two will start */}
      <div
        className={` ${active.ug ? "flex" : "hidden"} ${
          nav ? "fixed" : "absolute"
        } inset-0 mx-auto container bg-white mt-14  flex-col gap-3`}
      >
        <div
          className="text-black font-semibold cursor-pointer flex justify-start items-start text-sm gap-2 py-4"
          onClick={() => handleclick(1)}
        >
          <BiArrowBack className={"text-lg"} />
          <span>{`Back to menu`}</span>
        </div>
        <div className="flex justify-start  space-x-4 items-start">
          <div
            onClick={() => {
              handleclick(4);
            }}
            className={`text-md cursor-pointer font-semibold ${
              active?.course
                ? "text-brand-primary-blue-main"
                : "text-brand-text-primary"
            }`}
          >
            {`${type?.toUpperCase()} Courses`}
          </div>
          <div
            onClick={() => {
              handleclick(3);
            }}
            className={` text-md cursor-pointer font-semibold ${
              active?.article
                ? "text-brand-primary-blue-main"
                : "text-brand-text-primary"
            }`}
          >
            {`Articles`}
          </div>
        </div>
        {map?.[type]?.sk_course_types?.data?.map((item: any) => (
          <Link
            key={item?.attributes?.slug}
            href={`/courses/${item?.attributes?.slug}`}
            onClick={() => handleNav(false)}
            className={`${
              active?.course ? "flex" : "hidden"
            }`}
          >
            <div
              className={`w-full  overflow-y-scroll items-start rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-brand-primary-blue-main focus-visible:ring-opacity-50`}
            >
              <div className="w-full flex justify-between items-center">
                <span className="text-base font-semibold text-gray-900">
                  {item?.attributes?.name}
                </span>
                <span className="bg-brand-background-blue p-2 text-brand-primary-blue-main">
                  <MdOutlineArrowForwardIos />
                </span>
              </div>
            </div>
          </Link>
        ))}
        <div
          className={`${
            active.article ? "flex" : "hidden"
          } flex-col overflow-x-hidden h-[700px] overflow-y-scroll `}
        >
          {articles?.map((item: any,index:number) => (
            <div key={index} className="py-4 first:pt-0 last:pb-0 border-b flex flex-col gap-1">
              <Typography
                variant="body1"
                
                className="font-normal text-brand-title-text"
              >
                {item?.attributes?.title?.slice(0, 60)}..
              </Typography>
              <Typography
                variant="body2"
                
                className="font-normal text-gray-500"
              >
                {item?.attributes?.shortDescription?.slice(0, 90)}..
              </Typography>
              <Link
                onClick={() => handleNav(false)}
                href={APP_ROUTES.blogs(item?.attributes?.slug)}
                className="font-normal text-brand-primary-blue-main text-sm"
              >
                View all
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/** row three will start */}
    </>
  );
}
