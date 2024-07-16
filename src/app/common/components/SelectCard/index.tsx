"use client"
import React from "react";
import { useState, useEffect } from "react";
import Typography from "../../atoms/Typography";
import Image from "next/image";

import Button from "../../atoms/Button";
import MyModal from "../../molecules/modal";
import Form from "../../sections/SelectforCompare/Form";
import { Course } from "../../Interfaces";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import Link from "next/link";
import CourseCard from "./CourseCard";
import UniversityCard from "./UniversityCard";
import ListCard from "./ListCard";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface Select {
  data: any;
  show: boolean;
  university: boolean;
  coursecard: boolean;
  specialization: boolean;
  generic: boolean;
}
const SelectCard = ({
  data,
  show,
  university,
  coursecard,
  specialization,
  generic,
}: Select) => {
  const [open, setOpen] = useState<boolean>(false);
  const [formopen, setFormopen] = useState<boolean>(false);
  const [checkedState, setCheckedState] = useState(new Array(10).fill(false));

  const [popup, setPopup] = useState<
    Array<{
      fees: string;

      program: string;
      university: string;
      course: string;
      image: any;
      id: number;
      slug: string;
    }>
  >([]);

  const handleremove = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    const array: any = popup.filter((items) => {
      return items.id !== position;
    });
    setPopup(array);
    setCheckedState(updatedCheckedState);
  };

  const handlecompare = (
    e: any,
    course: string,
    fees: string,
    image: any,
    program: string,
    university: string,
    id: number,
    slug: string
  ) => {
    const updatedCheckedState = checkedState.map((item: any, index: number) =>
      index === id ? !item : item
    );
    setCheckedState(updatedCheckedState);
    const array: any = popup.filter((items) => {
      return items.id !== id;
    });
    {
      e.target.checked
        ? setPopup((pop) => [
            ...pop,
            { fees, program, slug, university, course, image, id },
          ])
        : setPopup(array);
    }
  };

  const handleform = () => {
    const arr: string[] = popup?.map((item) => item?.slug);
    const compare = JSON.stringify(arr);
    localStorage.setItem("comparedata", compare);
    setOpen(false);
    setFormopen(true);
  };
  return (
    <div>
      {coursecard && (
        <CourseCard
          generic={generic}
          checkedState={checkedState}
          handlecompare={handlecompare}
          page={data}
        />
      )}
      {university && (
        <div className="h-[480px]">
        <UniversityCard
          spec={specialization}
          checkedState={checkedState}
          handlecompare={handlecompare}
          data={data}
        />
        </div>
      )}
      {show && (
        <ListCard
          checkedState={checkedState}
          handlecompare={handlecompare}
          data={data}
        />
      )}

      {popup?.length > 0 && !open && !formopen? (
        <div className="bg-brand-primary-blue-main fixed w-full md:bottom-0 bottom-16 left-0 z-50 ">
        <div className="flex container mx-auto  justify-between items-center text-white py-4 ">
          <Typography>
            {popup?.length} courses were added to compare
          </Typography>
          <Button
            onClick={(e) => setOpen(true)}
            size="small"
            className="bg-white"
          >
            View
          </Button>
        </div>
        </div>
      ) : (
        ""
      )}
      <MyModal open={open} close={() => setOpen(false)}>
        <div className="fixed inset-5 mt-20 w-11/12 px-6 py-4 rounded max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg h-[500px] mx-auto bg-white overflow-y-auto">
          <div className="flex justify-between w-full items-center">
            <div className="flex justify-center w-full items-center my-4">
              <Typography component={"h5"} className="font-bold" variant="h5">
                {`Compare Courses`}
              </Typography>
            </div>
            <div onClick={(e) => setOpen(false)}>
              <XMarkIcon className="h-5 cursor-pointer w-5" />
            </div>
          </div>
          <div className="grid grid-cols-1 w-full md:grid-cols-3 gap-1 md:gap-3">
            {popup.map((item, index) => {
              const logoImage = getStrapiMedia(item?.image);
              return (
                <div
                  key={index}
                  className="group hover:border-brand-primary-blue-main grid grid-cols-1 rounded gap-2 w-full border border-gray-200 bg-brand-accent-white p-4"
                >
                  <div className="h-12 w-auto">
                    <Image
                      className="h-full w-auto"
                      src={logoImage || ""}
                      width={100}
                      height={48}
                      alt="image"
                    />
                  </div>
                  <div className="flex col-span-3 w-full md:flex-row flex-col md:items-center  ">
                    <div className="flex flex-col space-y-1  justify-center md:ml-3 items-start ">
                      <Typography
                        
                        variant="body2"
                        className="font-normal hidden md:block text-brand-text-title"
                      >
                        {item.university}
                      </Typography>
                      <Typography
                        variant="h6"
                        component={"h6"}
                        className="font-semibold text-brand-text-title"
                      >
                        {item.course}
                      </Typography>

                      <div className="flex flex-row justify-start  items-start">
                        <Typography
                          variant="body2"
                          
                          className="font-semibold flex justify-start items-center text-brand-primary-blue-main"
                        >
                          Program:
                        </Typography>
                        <Typography
                          variant="body2"
                         
                          className="font-semibold   ml-1 md:ml-2 md:mt-0  text-brand-text-title"
                        >
                          {item.program}
                        </Typography>
                      </div>
                      <Typography
                        variant="body2"
                        
                        className="font-semibold flex justify-start items-center text-brand-primary-blue-main"
                      >
                        {`Fee starting from: `}
                        <span className="font-semibold text-xs md:text-sm lg:text-base ml-1 md:ml-2 mt-1 text-brand-text-title">
                          ₹{item.fees}
                        </span>
                      </Typography>
                    </div>
                  </div>
                  <div className="mx-auto mt-4">
                    <Button
                      size="small"
                      onClick={(e) => {
                        handleremove(item.id);
                      }}
                      className="border text-brand-text-title border-brand-text-title font-semibold hover:border-brand-primary-blue-main hover:text-brand-primary-blue-main"
                    >
                      {`Remove`}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="  text-center mx-auto mt-6">
            {popup?.length < 2 ? (
              <div className="grid grid-cols-1 rounded gap-2 w-full text-red-500 border-gray-200 bg-brand-accent-white p-2">
                <div>
                  Select atleast two or more courses to compare
                </div>
              </div>
            ) : (
              ""
            )}
            {popup?.length > 1 ? (
              <Button
                color="primary"
                size="medium"
                onClick={handleform}
                variant="contained"
              >
                Compare Now
              </Button>
            ) : (
              <Button
                size="medium"
                onClick={handleform}
                variant="contained"
                color="secondary"
                disabled
                className="bg-brand-text-primary text-white hover:text-white"
              >
                Compare Now
              </Button>
            )}
          </div>
        </div>
      </MyModal>
      <MyModal open={formopen} close={() => setFormopen(false)}>
        <div className="fixed inset-5 mt-20 w-10/12 md:w-7/12  overflow-y-scroll  max-h-[500px] rounded mx-auto bg-white ">
          <div className="flex justify-end absolute mt-8 px-4 w-full ">
            <XMarkIcon onClick={()=>setFormopen(false)} className="h-6 cursor-pointer w-6" />
          </div>
          <Form popup={true} />
        </div>
      </MyModal>
    </div>
  );
};

export default SelectCard;
