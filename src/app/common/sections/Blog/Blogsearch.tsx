"use client"
import { Fragment, useState } from "react";
import { Combobox } from "@headlessui/react";
import React, { useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Typography from "../../atoms/Typography";
import Link from "next/link";
import { getBlog } from "@/app/utils/get-blog-by-slug";
import { APP_ROUTES } from "@/app/utils/app-routes";

const pageText = {
  pageTitle: `Skollege Blog`,
  description: `Get the latest and top insights on Online Education, Universities
  and many more.`,
  noOption: `No Option`,
};
const Blogsearch = () => {
  const [selectedPerson, setSelectedPerson] = useState('');
  const [query, setQuery] = useState("");
  const [data, setData] = useState<[]>([]);
  const getdata = async () => {
    const data = await getBlog();
    setData(data?.data ?? []);
  };

  useEffect(() => {
    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 

  return (
    <div className="bg-brand-primary-blue-main flex justify-center items-center h-60">
      <div className="flex flex-col md:flex-row justify-between container items-center mx-auto ">
        <div className="flex flex-col space-y-5 md:justify-start justify-center items-center md:items-start">
          <Typography
            variant="h3"
            component={"h3"}
            className=" font-bold text-brand-accent-white"
          >
            {pageText.pageTitle}
          </Typography>
          <Typography
            variant="body1"
           
            className="font-normal text-center text-brand-accent-white"
          >
            {pageText.description}
          </Typography>
        </div>
        {/** Blog Search */}
        <div className="flex flex-col my-3 md:my-0">
          <Combobox
            value={selectedPerson}
            onChange={(value: any) => {
              setSelectedPerson(value);
            }}
          >
            <div className="flex border p-2 w-[300px] shadow rounded focus:outline-none bg-white justify-center items-center">
              <Combobox.Input
                type="text"
                id="state_id"
                name="state_id"
                className="w-[300px] rounded focus:outline-none"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
                displayValue={(data: any) => data?.name}
              />
              <MagnifyingGlassIcon
                className="h-6 text-brand-primary-blue-main w-6"
                aria-hidden="true"
              />
            </div>
            <Combobox.Options className="absolute mt-12 border border-gray-200 overflow-hidden w-[300px] rounded-md ">
              <Combobox.Option value={""}>
                <Typography
                  variant="body2"
                  className={`py-2 font-normal ${"bg-white text-black"}`}
                >
                  <span className="px-2 over-hidden w-[20ch] truncate">
                    {pageText.noOption}
                  </span>
                </Typography>
              </Combobox.Option>
              {data && query ? (
                data?.map((item: any, index: number) => {
                  return (
                    <div key={index}>
                      {item?.attributes?.title
                        .toLowerCase()
                        .replace(/\s+/g, "")
                        .includes(query.toLowerCase().replace(/\s+/g, "")) ? (
                        <Combobox.Option
                          key={index}
                          value={item?.attributes?.slug}
                          as={Fragment}
                        >
                          {({ active, selected }) => (
                            <Link
                              href={APP_ROUTES.blogs(item?.attributes?.slug)}
                            >
                              <Typography
                                variant="body2"
                                className={`py-2 font-normal ${
                                  active
                                    ? "bg-brand-primary-blue-main text-brand-accent-white"
                                    : "bg-white  text-black"
                                }`}
                              >
                                <span className="px-2 over-hidden w-[20ch] truncate">
                                  {item?.attributes?.title}
                                </span>
                              </Typography>
                            </Link>
                          )}
                        </Combobox.Option>
                      ) : (
                        <React.Fragment key={index}></React.Fragment>
                      )}
                    </div>
                  );
                })
              ) : (
                <></>
              )}
            </Combobox.Options>
          </Combobox>
        </div>
        {/** Blog Search End */}
      </div>
    </div>
  );
};

export default Blogsearch;
