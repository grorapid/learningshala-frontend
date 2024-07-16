"use client"
import React, { useState, useEffect  } from "react";
import Typography from "../../atoms/Typography";
import { getSearchByTag } from "@/app/utils/get-search-by-tag";
import Link from "next/link";
import { Fragment } from "react";
import { Combobox } from "@headlessui/react";
import { APP_ROUTES } from "@/app/utils/app-routes";
const SearchBar = () => {
  const [selectedPerson, setSelectedPerson] = useState('');
  const [query, setQuery] = useState("");
  const [name, setName] = useState(false);
  const [data, setData] = useState<any>();
 
  const getdata =  async () => {
    const searchvalue = query.split(" ");
    const searchdata = await getSearchByTag(searchvalue);
    setData(searchdata?.data[0]);
  };

 useEffect(() => {
  getdata();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [query]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Typography
        variant="h3"
        component={"h2"}
        className="text-brand-text-title lg:w-full  text-center font-bold lg:my-8 my-4 "
      >
        {`Find Your `}
        <span className="text-brand-primary-blue-main ease-in-out">
          {name ? "University" : "Courses"}
        </span>
      </Typography>

      <form className="md:w-8/12 w-11/12 ">
        <Combobox
          value={selectedPerson}
          onChange={(value: any) => {
            setSelectedPerson(value);
          }}
        >
          <div className="flex border border-gray-300 w-full  rounded focus:outline-none bg-white justify-center items-center cursor-text">
            <Combobox.Input
              type="text"
              id="state_id"
              name="state_id"
              placeholder="Search for Best University, Courses, Progams & more"
              className=" w-full p-4 rounded focus:outline-none"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
              }}
              displayValue={(data: any) => data?.name}
            />
            <svg
              className="w-4 mr-4 h-4 text-blue-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <Combobox.Options className="absolute z-20 border border-gray-200 overflow-hidden w-11/12 md:w-8/12 rounded-md ">
            {data &&
              data?.attributes?.sk_courses?.data?.map(
                (items: any, index: number) => (
                  <Combobox.Option
                    key={index}
                    value={items?.attributes?.slug}
                    as={Fragment}
                  >
                    {({ active, selected }) => (
                      <Link href={APP_ROUTES?.courses(items?.attributes?.university?.data?.attributes
                        ?.slug,items?.attributes?.sk_course_type?.data?.attributes?.slug,items?.attributes?.slug)} >
                        <Typography
                          variant="body2"
                          className={`md:py-4 py-2 px-2 font-normal ${
                            active
                              ? "bg-blue-400 text-white"
                              : "bg-white  text-black"
                          }`}
                        >
                          {items?.attributes?.name?.slice(0, 40)},{" "}
                          {
                            items?.attributes?.university?.data?.attributes
                              ?.name
                          }
                        </Typography>
                      </Link>
                    )}
                  </Combobox.Option>
                )
              )}
            {data &&
              data?.attributes?.universities?.data?.map(
                (items: any, index: number) => (
                  <Combobox.Option
                    key={index}
                    value={items?.attributes?.slug}
                    as={Fragment}
                  >
                    {({ active, selected }) => (
                      <Link href={`/universities/${items?.attributes?.slug}`}>
                        <Typography
                          variant="body2"
                          className={`py-2 px-2 font-normal ${
                            active
                              ? "bg-blue-400 text-white"
                              : "bg-white  text-black"
                          }`}
                        >
                          {items?.attributes?.name?.slice(0, 40)},
                        </Typography>
                      </Link>
                    )}
                  </Combobox.Option>
                )
              )}
          </Combobox.Options>
        </Combobox>
      </form>
    </div>
  );
};

export default SearchBar;
