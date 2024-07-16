"use client"
import React from "react";
import Typography from "../../atoms/Typography";
import Image from "next/image";
import Searchpage from "../../../../../public/images/Group 297468.svg";
import Arrow from "../../../../../public/images/SearchPage/arrow-right.png";
import Arrowleft from "../../../../../public/images/SearchPage/arrow-left.png";
import { AiOutlineClose } from "react-icons/ai";
import SearchBar from "../SearchBar";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { APP_ROUTES } from "@/app/utils/app-routes";

const SearchPage = ({ globalData }: any) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const pathname = usePathname();
  return (
    <div>
      {search ? (
        <div className="fixed flex justify-center flex-col items-center left-0 top-0 w-full h-full bg-white">
          <div className="w-full flex justify-end items-end mb-8 container px-6">
            <Link href={pathname} className="text-3xl cursor-pointer">
              <AiOutlineClose className="w-5 h-5" />
            </Link>
          </div>
          <Image src={Searchpage} alt="image" className="h-30 w-auto" />
          <SearchBar />
          <div className="mt-4">
            <div className="group p-2 text-brand-text-title mx-8 text-center font-normal flex flex-col gap-2 md:flex-row lg:flex-row justify-center items-center">
              <Typography variant="body1" fontWeight="bold" component="h4">
                {`Let our AI find the right university for you, just in few
                minutes. `}
              </Typography>
              <Link href={APP_ROUTES.aiSuggest}>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  className="text-brand-primary-blue-main flex justify-center items-center cursor-pointer relative after:bg-brand-primary-blue-main after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-300"
                >
                  <span>{`Suggest Now`}</span>
                  <Image
                    src={Arrow}
                    className="h-4 w-4 font-bold"
                    alt="image"
                  />
                </Typography>
              </Link>
            </div>
            <div className=" flex flex-col my-6 md:my-8 justify-center items-center">
              <Typography
                variant="h6"
                className="text-gray-500 lg:text-brand-text-primary font-semibold"
              >
                Top Searched Programs
              </Typography>
              <div className="flex mx-8 justify-center items-center mt-2 flex-wrap">
                {globalData?.footer_explore_section?.links?.map(
                  (item: any, index: number) => {
                    return (
                      <>
                        <Link href={`${item?.link}`}>
                          <Typography
                            variant="body1"
                            className="font-normal text-brand-text-title hover:underline  hover:text-brand-primary-blue-main lg:font-bold"
                          >
                            {item?.title}
                          </Typography>
                        </Link>
                        <Typography
                          variant="h6"
                          className={`${
                            globalData?.footer_explore_section?.links?.length ==
                            index + 1
                              ? "hidden"
                              : "block"
                          } lg:mx-4 mx-2`}
                        >
                          |
                        </Typography>
                      </>
                    );
                  }
                )}
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                href={"/"}
                className="relative after:bg-brand-primary-blue-main after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-40 after:mx-auto after:transition-all after:duration-300 cursor-pointer"
              >
                <Typography className="flex justify-center items-center font-semibold text-brand-text-primary">
                  <Image src={Arrowleft} alt="image" className="h-6 mr-3 w-6" />
                  {`Back to`}
                  <span className="text-brand-primary-blue-main  cursor-pointer mx-1">
                    Home
                  </span>
                </Typography>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchPage;
