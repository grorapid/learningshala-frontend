"use client";
import React, {  useEffect, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import Typography from "../../atoms/Typography";
import { AiOutlineClose } from "react-icons/ai";
import image from "../../../../../public/images/sliders.svg";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import SelectCard from "../SelectCard";
import Button from "../../atoms/Button";
import { Result } from "../../Interfaces";
import { getCourseByFilter } from "@/app/utils/get-course-by-slug";
import { HiOutlineChevronRight } from "react-icons/hi";
import NextBreadcrumb from "../../sections/University/UniversityBreadcrumb";
import { getCourseType } from "@/app/utils/get-course-type-rank";
import RootLoading from "@/app/loading";

const Pagination = ({ count, total, handlepage }: any) => {
  return (
    <div className="flex md:justify-end justify-center my-12 space-x-3 items-center">
      <Typography variant="body2" className="text-brand-text-primary text-sm">
        Page {count} of {Math.ceil(total / 10)}
      </Typography>
      <Button
        disabled={count == 1 ? true : false}
        onClick={(e) => handlepage(3)}
        className={`bg-brand-background-blue flex justify-center items-center h-6 w-6 text-sm cursor-pointer`}
      >
        <span
          className={` ${
            count == 1
              ? "text-brand-text-title"
              : "text-blue-500 cursor-pointer"
          }  text-sm`}
        >
          <IoIosArrowBack />
        </span>
      </Button>
      <Button
        disabled={count >= total / 10 ? true : false}
        onClick={(e) => handlepage(1)}
        className={`bg-brand-background-blue flex justify-center items-center h-6 w-6 text-sm `}
      >
        <span
          className={` text-sm ${
            count == total / 10
              ? "text-brand-text-title"
              : "text-blue-500 cursor-pointer"
          }  `}
        >
          <IoIosArrowForward />
        </span>
      </Button>
    </div>
  );
};
interface Resultdata {
  university: Result;
  show: boolean;
  type: { data: [{ attributes: { name: string } }] };
}

const ResultCard = ({ university, type, show }: Resultdata) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [spec, setSpec] = useState<boolean>(false);
  const [filter, setFilter] = useState<boolean>(false);
  const [data, setData] = useState<any>({});
  const [count, setCount] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [p, setP] = useState<number>(0);

  const handlepage = (val: number) => {
    if (val == 1) {
      setCount(count + 1);
      setP(p + 10);
    } else {
      setCount(count - 1);
      setP(p - 10);
    }
  };
  const getData =  async () => {
    setData(null)
    if (data===null ) return <div><RootLoading/></div>;
    const page = await getCourseByFilter(selected, count);
    
    setTotal(page?.meta?.pagination?.total);
    
    setData(page);
    
  };

  const handlesubmit = async (e: any, id: number, value: string) => {
    const array: string[] = selected.filter((item) => {
      return item !== value;
    });
    setSpec(!spec);

    {
      e.target.checked && !selected.find((elem) => elem == value)
        ? setSelected((select) => [...select, value])
        : setSelected(array);
    }
  };

  const handleopen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    !show && getData();
  }, [selected, p, count]);

  if (data===null ) return <div><RootLoading/></div>;

  return (
    <>
      <NextBreadcrumb
        homeElement={"Home"}
        separator={
          <span className="text-brand-primary-blue-main">
            <HiOutlineChevronRight />
          </span>
        }
        activeClasses="text-brand-primary-blue-main"
        containerClasses="flex justify-start items-center my-4 container mx-auto flex gap-2 text-brand-primary-blue-main"
        listClasses="hover:underline text-sm text-medium"
        capitalizeLinks
      />
      <div
        className={`bg-white flex flex-col justify-center items-center w-full ${
          show ? "mt-0" : "mt-4"
        }  `}
      >
        {!show ? (
          <div className="container mx-auto justify-start items-start ">
            <Typography variant="h3" className="font-bold mt-2">
              Top programs offered by Skollege
            </Typography>
          </div>
        ) : (
          ""
        )}
        <div className="lg:border-t mt-6 w-full">
          <div
            className={`  grid container mx-auto   ${
              filter ? "lg:grid-cols-4 " : "lg:grid-cols3"
            } gap-2 lg:gap-5`}
          >
            <div
              className={`lg:shadow-[rgba(0,0,0.1,0.1)_1px_0px_2px_0px] md:pt-5 w-full ${
                filter ? "block" : "hidden"
              } `}
            >
              <Typography className="font-bold flex " variant="h5">
                Filter
              </Typography>

              {!show ? (
                <div className={`${filter ? "block" : "hidden"}`}>
                  <Typography variant={"body1"} className="font-bold mt-4">
                    By University
                  </Typography>
                  <form>
                    {university?.data?.map((item: any, index: number) => (
                      <div
                        className="my-4 flex justify-start  items-center"
                        key={item?.attributes?.name}
                      >
                        <input
                          onClick={(e) =>
                            handlesubmit(e, index, item?.attributes?.name)
                          }
                          className="h-5 w-5"
                          type="checkbox"
                          id={item?.attributes?.name}
                          name={item?.attributes?.name}
                          value={item?.attributes?.name}
                        />
                        <label
                          className="text-lg font-normal text-brand-text-primary ml-3 "
                          htmlFor={item?.attributes?.name}
                        >
                          {item?.attributes?.name}
                        </label>
                      </div>
                    ))}
                  </form>
                  <Typography variant={"body1"} className="font-bold mt-4">
                    By Courses
                  </Typography>
                  <form>
                    {type?.data?.map((item: any, index: number) => (
                      <div
                        className="my-4 flex justify-start  items-center"
                        key={item?.attributes?.name}
                      >
                        <input
                          onClick={(e) =>
                            handlesubmit(e, index, item?.attributes?.name)
                          }
                          className="h-5 w-5"
                          type="checkbox"
                          id={item?.attributes?.name}
                          name={item?.attributes?.name}
                          value={item?.attributes?.name}
                        />
                        <label
                          className="text-lg font-normal text-brand-text-primary ml-3 "
                          htmlFor={item?.attributes?.name}
                        >
                          {item?.attributes?.name}
                        </label>
                      </div>
                    ))}
                  </form>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="col-span-3  md:pt-5 space-y-5 mb-8  w-full">
              <div className="flex  justify-between items-center">
                <div className="flex justify-start items-center">
                  <Typography className="font-bold  " variant="h6">
                    Showing {data?.data?.length} results
                  </Typography>
                  {/* {selected &&
                    selected?.map((value, index) => {
                      return (
                        <Typography
                          key={index}
                          variant="body2"
                          className="px-4 py-1 font-semibold flex rounded items-center justify-center mx-2 text-brand-text-title bg-brand-background-blue"
                        >
                          {value}
                        </Typography>
                      );
                    })} */}
                </div>
                <Button
                  size="extrasmall"
                  onClick={() => setFilter(!filter)}
                  className="flex justify-center md:text-base text-sm font-semibold items-center"
                  variant="contained"
                  color="primary"
                >
                  {!filter ? (
                    <div className="flex justify-center items-center">
                      <Image
                        src={image}
                        className="w-5 h-5 mr-2 self-center"
                        alt="image"
                      />
                      {`Open Filter`}
                    </div>
                  ) : (
                    <div className="flex justify-center items-center">
                      <span className="mr-2 text-md">
                        <AiOutlineClose />
                      </span>
                      {`Close Filter`}
                    </div>
                  )}
                </Button>
              </div>

              <SelectCard
                generic={false}
                specialization={false}
                coursecard={false}
                university={false}
                show={true}
                data={data}
              />
              <Pagination count={count} handlepage={handlepage} total={total} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultCard;
