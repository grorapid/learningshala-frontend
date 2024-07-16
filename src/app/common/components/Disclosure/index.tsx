"use client"
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import Typography from "../../atoms/Typography";
import ReactMarkdown from "react-markdown";
import Check from "../../../../../public/images/HomePage/Faq/check-circle.svg";
import Image from "next/image";
import RichTextEditor from "../RichTextEditor";

export default function DisclosureFAQ({ data }: any) {
  return (
    <div className="mx-auto container my-12 md:my-16 bg-white">
      <div className="w-full flex flex-col gap-4">
        <Typography {...data?.title} fontWeight="bold" />
        <div className="w-full rounded-md bg-white py-2 flex flex-col">
          {data?.data?.map((item: any) => {
            return (
              <div className="py-2" key={item.question}>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-sm shadow-sm bg-brand-background-blue p-4 text-left text-sm md:text-md font-semibold text-brand-text-dark focus:outline-none focus-visible:ring focus-visible:ring-text-brand-text-dark focus-visible:ring-opacity-75">
                        <div className="flex gap-3 item-center items-center">
                        <Typography className={`font-bold
                             
                             text-brand-primary-blue-main
                            }`}>
                          Q.
                        </Typography>
                          <Typography
                            variant="body2"
                            fontWeight="normal"
                          >
                            {item.question}
                          </Typography>
                        </div>
                        <ChevronDownIcon
                          className={`${open ? "rotate-180 transform" : ""
                            } h-5 w-auto text-brand-primary-blue-main`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className=" px-4 pb-4 flex gap-3 justify-start items-start font-normal text-brand-text-light bg-brand-background-blue">
                        <Typography className="font-bold
                             
                             text-brand-primary-blue-main">
                          A.
                        </Typography>
                        <RichTextEditor className="text-xs md:text-sm" htmlContent={item.answer}/>
                        
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
