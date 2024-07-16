"use client"
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Typography from "../../atoms/Typography";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import { APP_ROUTES } from "@/app/utils/app-routes";

export default function TopUniversitiesMenu({
  title,
  university,
  article,
}: any) {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          {/** Button in Navbar */}
          <Popover.Button
            onMouseEnter={() => setIsShowing(true)}
            onMouseLeave={() => setIsShowing(false)}
            className={`
                ${open ? "" : "text-opacity-90"}
                group flex items-center text-base  text-brand-text-title font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            {title}
            <ChevronDownIcon
              className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-brand-primary-blue-main transition duration-150 ease-in-out group-hover:text-opacity-80`}
              aria-hidden="true"
            />
          </Popover.Button>
          {/** Button in Navbar End */}
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
              className="absolute z-10 mt-3 w-screen max-w-sm md:max-w-2xl -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-6xl"
            >
              <div className="overflow-y-scroll md:overflow-hidden md:mr-5 lg:mr-[236px] bg-white rounded shadow ring-1 ring-black ring-opacity-5">
                <div
                  className={`relative grid lg:gap-6 md:gap-3 p-7 grid-cols-3`}
                >
                  <div className="flex flex-col justify-start items-start col-span-2">
                    <Typography
                      component={"h4"}
                      variant={"body1"}
                      fontWeight="semi-bold"
                      className="text-brand-primary-blue-main px-2 pb-2"
                    >
                      {`Universities`}
                    </Typography>
                    <div className="grid grid-cols-2 gap-4 overflow-y-auto p-2 h-[400px]">
                      {university?.map((item: any, index: number) => {
                        const img = getStrapiMedia(
                          item?.attributes?.logo?.data?.attributes?.url
                        );
                        return (
                          <Link
                            key={index}
                            href={`/universities/${item?.attributes?.slug}`}
                          >
                            
                            <div className="border cursor-pointer p-4 rounded shadow hover:border hover:border-brand-primary-blue-main">
                              <div className="h-12 w-36 image-container my-4">
                                <Image
                                  src={img || ""}
                                  height={48}
                                  width={100}
                                  className="w-auto h-full"
                                  alt={item?.attributes?.name ?? "logo"}
                                />
                              </div>
                              <Typography
                                variant="h6"
                                fontWeight="semibold"
                                className="my-2 h-8 overflow-hidden text-ellipsis"
                              >
                                {item?.attributes?.name}
                              </Typography>
                              <div className="flex justify-start gap-2 items-center">
                                <Link
                                  href={APP_ROUTES.universityCoursesPage(
                                    item?.attributes?.slug
                                  )}
                                >
                                  <Typography
                                    variant="body2"
                                    fontWeight="semibold"
                                    component={"span"}
                                    className=" hover:text-brand-text-title text-brand-primary-blue-main hover:underline"
                                  >
                                    {`Courses`}
                                  </Typography>
                                </Link>
                                <Link
                                  href={APP_ROUTES.universityAdmissionPage(
                                    item?.attributes?.slug
                                  )}
                                >
                                  <Typography
                                    variant="body2"
                                    fontWeight="semibold"
                                    component={"span"}
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
                  </div>
                  <div className="flex flex-col overflow-x-hidden">
                    <Typography
                      component={"h4"}
                      variant={"body1"}
                      fontWeight="semi-bold"
                      className="text-brand-primary-blue-main pb-2"
                    >
                      {`Articles`}
                    </Typography>
                    <div className="overflow-y-scroll shadow flex flex-col h-[400px]">
                      {article?.map((item: any, index: number) => (
                        <Link
                          key={index}
                          href={APP_ROUTES.blogs(item?.attributes?.slug)}
                          className="flex flex-col gap-1 border-b py-4 first:pt-0 group"
                        >
                          <div>
                            <Typography
                              variant="body1"
                              className="font-normal text-brand-title-text w-[24ch] overflow-hidden truncate"
                            >
                              {item?.attributes?.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              className="font-normal text-brand-text-primary font-sm w-[24ch] overflow-hidden truncate"
                            >
                              {item?.attributes?.shortDescription}
                            </Typography>
                          </div>
                          <div>
                            <span className="text-brand-primary-blue-main relative after:bg-brand-primary-blue-main after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-300 cursor-pointer">{`View all`}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
