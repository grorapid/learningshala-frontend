"use client"
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { resourcesConfig } from "./constant";
import Link from "next/link";

export default function ResourseMobile({
  title,
  handleNav,
  setActive,
  active,
}: any) {
  return (
    <>
      <div
        className={`text-md group text-brand-text-title font-semibold
         items-center  flex  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        onClick={() => setActive(!active)}
      >
        {title}
        <ChevronDownIcon
          className={`h-5 w-5 text-brand-primary-blue-main  transition duration-150 ease-in-out group-hover:text-opacity-80`}
          aria-hidden="true"
        />
      </div>

      <div>
        <div className={`relative grid gap-4  bg-white`}>
          <div className={`${active ? "flex" : "hidden"} flex-col gap-4`}>
            {resourcesConfig.map((item: any, index: number) => (
              <Link
                key={item.title}
                className={`w-full flex items-center rounded-lg px-2 transition duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-brand-primary-blue-main focus-visible:ring-opacity-50`}
                href={item.url}
                onClick={() => {
                  handleNav(false);
                }}
              >
                <span className="text-md w-full flex justify-between items-center text-gray-900 font-semibold">
                  {item.title}
                </span>
                <span className="text-brand-primary-blue-main">
                  <MdOutlineArrowForwardIos />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
