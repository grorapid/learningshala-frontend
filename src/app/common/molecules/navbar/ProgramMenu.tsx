"use client";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Typography from "../../atoms/Typography";

export default function ProgramMenu({ title, courses, articles }: any) {
  const [type, setType] = useState(courses?.[0]?.attributes?.name);
  const [isShowing, setIsShowing] = useState(false);
  const map = courses?.reduce?.((acc: any, cum: any) => {
    return { ...acc, [cum.attributes.name]: cum.attributes };
  }, {});

  useEffect(() => {
    if (courses?.[0]?.attributes?.name) {
      setType(courses?.[0]?.attributes?.name);
    }
  }, [courses]);

  const handleCourses = (e: any, type: any) => {
    e.preventDefault();
    setType(type.attributes.name);
  };
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          {/** Main Button in navbar */}
          <Popover.Button
            onMouseEnter={() => setIsShowing(true)}
            onMouseLeave={() => setIsShowing(false)}
            className={`
                ${open ? "" : "text-opacity-90"}
                group flex text-brand-text-title items-center text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            {title}
            <ChevronDownIcon
              className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-brand-primary-blue-main transition duration-150 ease-in-out group-hover:text-opacity-80`}
              aria-hidden="true"
            />
          </Popover.Button>
          {/** Main Button in navbar end */}
          {/** Open Box Transition */}
          <Transition
            as={Fragment}
            show={isShowing}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              onMouseEnter={() => setIsShowing(true)}
              onMouseLeave={() => setIsShowing(false)}
              focus={false}
              className={`absolute z-10 mt-3 left-0 lg:left-1/2   w-screen  max-w-xl -translate-x-[100px] lg:-translate-x-1/2 transform px-4 sm:px-0 lg:max-w-4xl`}
            >
              <div className="overflow-y-scroll lg:mr-[50px] rounded shadow ring-1 ring-black ring-opacity-5">
                <div
                  className={`relative grid gap-4 bg-white p-7 md:grid-cols-3`}
                >
                  {/** First Section Start */}
                  <div className="flex overflow-y-scroll h-[400px] flex-col gap-2">
                    <Typography
                      component={"div"}
                      variant={"body1"}
                      fontWeight="semi-bold"
                      className="text-brand-primary-blue-main mb-2"
                    >
                      {`Courses`}
                    </Typography>
                    {courses?.map((item: any) => (
                      <button
                        key={item?.attributes?.name}
                        onClick={(e) => handleCourses(e, item)}
                        className={`w-full flex items-center rounded border hover:border-brand-primary-blue-main p-2  ${
                          type === item?.attributes?.name
                            ? "text-brand-primary-blue-main font-semibold border-brand-primary-blue-main"
                            : "text-gray-900 font-normal"
                        }`}
                      >
                        <div
                          className={`text-base w-full flex justify-between items-center `}
                        >
                          <div>
                            {`${item.attributes.name?.toUpperCase()} Courses`}
                          </div>
                          <span className="text-brand-primary-blue-main p-3">
                            <MdOutlineArrowForwardIos />
                          </span>
                        </div>
                      </button>
                    ))}
                    {!courses?.length && <div>Loading... </div>}
                  </div>
                  {/** First Section End */}
                  {/** Second Section Start */}
                  <div className="flex overflow-y-scroll h-[400px] flex-col gap-2">
                    <Typography
                      component={"div"}
                      variant={"body1"}
                      fontWeight="semi-bold"
                      className="text-brand-primary-blue-main mb-2"
                    >
                      {`${type?.toUpperCase()} Courses`}
                    </Typography>

                    {map?.[type]?.sk_course_types?.data?.map((item: any) => (
                      <Link
                        key={item?.attributes?.name}
                        href={`/courses/${item?.attributes?.slug}`}
                      >
                        <div className="w-full p-2 border flex justify-between items-center rounded  hover:border-brand-primary-blue-main">
                          <div className="text-base w-full hover:text-brand-primary-blue-main">
                            {item?.attributes?.name}
                          </div>
                          <span className="p-3 text-brand-primary-blue-main">
                            <MdOutlineArrowForwardIos />
                          </span>
                        </div>
                      </Link>
                    ))}
                    {!map?.[type]?.sk_course_types?.data?.length && (
                      <div> Loading... </div>
                    )}
                  </div>
                  {/** Second Section End */}
                  {/** Third Section Start */}
                  <div className="flex flex-col overflow-x-hidden">
                    <Typography
                      component={"div"}
                      variant={"body1"}
                      fontWeight="semi-bold"
                      className="text-brand-primary-blue-main pb-2"
                    >
                      {`Articles`}
                    </Typography>
                    <div className="overflow-y-scroll shadow flex flex-col h-[400px]">
                      {articles?.map((item: any) => (
                        <Link
                          key={item?.attributes?.title}
                          href={`/blogs/${item?.attributes?.slug}`}
                          className="group flex flex-col gap-1 border-b py-4 first:pt-0"
                        >
                          <div>
                            <Typography
                              variant="body1"
                              className="font-normal text-brand-title-text w-[24ch] overflow-hiden truncate"
                            >
                              {item?.attributes?.title}
                            </Typography>
                            {item?.attributes?.shortDescription && (
                              <Typography
                                variant="body2"
                                className="font-normal text-brand-text-primary font-sm w-[24ch] overflow-hiden truncate"
                              >
                                {item?.attributes?.shortDescription}
                              </Typography>
                            )}
                          </div>
                          <div>
                            <span className="text-brand-primary-blue-main relative after:bg-brand-primary-blue-main after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-300 cursor-pointer">{`View all`}</span>
                          </div>
                        </Link>
                      ))}
                      {!articles?.length && <div>Loading ...</div>}
                    </div>
                  </div>
                  {/** Third Section End */}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
          {/** Open box transition end */}
        </>
      )}
    </Popover>
  );
}
