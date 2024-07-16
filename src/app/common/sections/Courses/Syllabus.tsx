"use client"
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Button from "../../atoms/Button";
import Rating from "../../atoms/Rating";
import Typography from "../../atoms/Typography";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { AiOutlineMenu } from "react-icons/ai";

export interface SyllabusList {
  id: number;
  name: string;
}

export interface SyllabusProps {
  data: {
    id: number;
  rating_percent: number;
  rating_num: string;
  rating_star: number;
  }
}

const syllabus: SyllabusList[] = [
  {
    id: 1,
    name: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
  },
  {
    id: 2,
    name: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
  },
  {
    id: 3,
    name: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
  },
  {
    id: 4,
    name: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
  },
];

const Syllabus = ({data}: SyllabusProps) => {
 
  return (
    <div className="my-7 md:my-10">
      <div className="">
        <div className="pb-4 md:pb-7 flex flex-col gap-1">
          <Typography variant="h4" className="font-bold text-brand-text-title">
            Syllabus
          </Typography>

          <div className="md:flex md:items-center md:gap-2">
          <Typography variant="body1" className="font-normal">
            What you will learn from this course
          </Typography>
          <div className="hidden md:block text-brand-primary-divider">|</div>
            <div className="flex content-center items-center"> 
            <Rating size={14} value={data?.rating_star} classname="text-brand-text-golden" />
            <Typography
              variant="body2"
              className="font-normal text-brand-primary-blue-main pt-2 lg:pt-1"
            >
              Content Rating: {data?.rating_percent}% ({data?.rating_num.toString().replace(/(\d)(?=(\d{2})+(\d)(?!\d))/g, '$1,')} ratings)
            </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-brand-background-blue mt-2">
        <div className="flex flex-col p-8 gap-1 px-8 lg:px-16">
          {syllabus?.map((item: SyllabusList) => {
            return (
              <Disclosure key={item.id}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-sm bg-white p-4 text-left text-sm md:text-md font-semibold text-brand-text-dark focus:outline-none focus-visible:ring focus-visible:ring-text-brand-text-dark focus-visible:ring-opacity-75">
                      <div className="flex gap-15 item-center">
                        <Typography>What will you learn</Typography>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex flex-end items-center gap-2">
                          <AiOutlineMenu />
                          <Typography>16 Topics</Typography>
                        </div>
                        <ChevronDownIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-brand-primary-blue-main`}
                        />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="pl-5 md:pl-11 py-6 text-xs md:text-sm font-normal text-brand-text-light bg-white">
                      <ReactMarkdown className="w-full md:w-[550px]">
                        {item.name}
                      </ReactMarkdown>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
