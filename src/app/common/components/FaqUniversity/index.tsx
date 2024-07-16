"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import Typography from "../../atoms/Typography";
import ReactMarkdown from "react-markdown";
import Check from "../../../../../public/images/HomePage/Faq/check-circle.svg";
import Question from "../../../../../public/images/HomePage/Faq/question.svg";
import Image from "next/image";

export default function FAQUniversity({ data, icon }: any) {
  console.log(data, "faq");
  return (
    <div className="mx-auto container  bg-white">
      <div className="w-full flex flex-col gap-4">
        <Typography variant="h3" component={"h3"} fontWeight="bold">
          FAQ
        </Typography>
        <div className="w-full rounded-md bg-white py-2 flex flex-col">
          {data?.university_faq?.map((item: any) => {
            return (
              <div className="p-2" key={item.key}>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-sm  shadow-sm bg-brand-background-blue p-4 text-left text-sm md:text-md font-semibold text-brand-text-dark focus:outline-none focus-visible:ring focus-visible:ring-text-brand-text-dark focus-visible:ring-opacity-75">
                        <div className="flex gap-3 item-center items-center">
                        <Typography className="text-brand-primary-blue-main font-bold" >
                            Q.
                          </Typography>
                          <Typography
                            variant="body1"
                            component={"p"}
                            fontWeight="normal"
                          >
                            {item.key}
                          </Typography>
                        </div>
                        <span>
                          <ChevronDownIcon
                            className={`${open ? "rotate-180 transform" : ""
                              } h-7 w-7 text-brand-primary-blue-main`}
                          />
                        </span>
                      </Disclosure.Button>
                      <Disclosure.Panel className=" p-4 text-xs flex gap-3 justify-start items-start md:text-sm font-normal text-brand-text-light bg-brand-background-blue">
                      <Typography className="text-brand-primary-blue-main font-bold" >
                            A.
                          </Typography>
                        <ReactMarkdown className="w-full  lg:text-lg md:text-base text-sm md:w-[550px]">
                          {item.value}
                        </ReactMarkdown>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
