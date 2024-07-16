"use client"
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import { APP_ROUTES } from "@/app/utils/app-routes";
import Typography from "../../atoms/Typography";
import { resourcesConfig } from "./constant";



export default function Resourse({ title, globalData }: any) {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsShowing(!isShowing)}
        onMouseLeave={() => setIsShowing(!isShowing)}
        className="md:hidden flex justify-start items-center"
      >
        <Typography
          variant="h5"
          component={"h5"}
          className={` font-semibold ${
            isShowing ? "text-brand-primary-blue-main" : "text-brand-text-title"
          } `}
        >
          {title}
        </Typography>
        <ChevronDownIcon
          className={`
                  ml-2 h-5 w-5 text-brand-primary-blue-main transition duration-150 ease-in-out group-hover:text-opacity-80`}
          aria-hidden="true"
        />
      </div>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              onMouseEnter={() => setIsShowing(true)}
              onMouseLeave={() => setIsShowing(false)}
              className={`
                ${open ? "" : "text-opacity-90"}
                group hidden md:flex text-brand-text-title items-center font-semibold text-lg  md:text-base md:font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              {title}
              <ChevronDownIcon
                className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-brand-primary-blue-main transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>

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
                className={`absolute left-1/2 z-10 mt-3 w-screen max-w-[240px] -translate-x-1/2 transform lg:max-w-[300px]`}
              >
                <div className="overflow-y-auto mr-20 rounded shadow-lg ring-1 ring-black ring-opacity-5 p-4 relative bg-white">
                  <ul className="flex flex-col gap-3">
                    {resourcesConfig?.map((item: any) => {
                      return (
                        <React.Fragment key={item.title}>
                          <Link href={item.url}>
                            <li
                              className={`w-full border border-gray-300 hover:border-brand-primary-blue-main flex items-center rounded p-3 transition duration-150 ease-in-out  focus:outline-none focus-visible:ring focus-visible:ring-brand-primary-blue-main focus-visible:ring-opacity-50 text-base font-normal text-gray-900`}
                            >
                              {item.title}
                            </li>
                          </Link>
                        </React.Fragment>
                      );
                    })}
                  </ul>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
}
