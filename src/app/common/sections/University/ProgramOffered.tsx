"use client"
import React from "react";
import { useState } from "react";
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import DemandedCoursesCard from "../../components/DemandCoursesCard";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import { APP_ROUTES } from "@/app/utils/app-routes";

const ProgramOffered = ({ data }: any) => {
  const initial = {
    all: true,
    ug: false,
    pg: false

  }
  const [active, setActive] = useState(initial);

  const handleclick = (checkCase: number) => {
    let obj = { ...initial };
    if (checkCase === 1) {
      obj.all = true;
    } else if (checkCase === 2) {
      obj.ug = true;
      obj.all = false;
    } else if (checkCase === 3) {
      obj.pg = true;
      obj.all = false;
    }
    setActive(obj);
  };
  // const image = (data: any) => getStrapiMedia(data) ?? "";
  return (
    <div>
      <div className="flex justify-start items-center my-5 space-x-6 ">
        <div
          onClick={() => handleclick(1)}
          className={` text-sm md:text-xl cursor-pointer font-semibold ${active?.all
              ? "underline underline-offset-[9px] text-brand-primary-blue-main"
              : ""
            }`}
        >
          All Categories
        </div>
        <div
          onClick={() => handleclick(2)}
          className={`text-sm md:text-xl cursor-pointer font-semibold ${active?.ug
              ? "underline underline-offset-[9px] text-brand-primary-blue-main"
              : ""
            }`}
        >
          Undergraduate
        </div>
        <div
          onClick={() => handleclick(3)}
          className={`text-sm md:text-xl font-semibold cursor-pointer ${active?.pg
              ? "underline underline-offset-[9px] text-brand-primary-blue-main"
              : ""
            }`}
        >
          Postgraduate
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div
          className={`${active.all ? "grid" : "hidden"
            } grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full my-5 gap-6`}
        >
          {data?.sk_courses?.data?.map((item: any, index: number) => {
            const image = getStrapiMedia(data?.logo?.data?.attributes?.url)
           
            return (
              <div key={index}>
                <DemandedCoursesCard
                  slug={APP_ROUTES.courses(data?.slug,item?.attributes?.sk_course_type?.data?.attributes?.slug,item?.attributes.slug)}

                  logo={image}
                  programName={item.attributes.name}
                  duration={item.attributes.duration}
                  totalUsers={item.attributes.learners_enrolled}
                />
              </div>
            )
          }
          )
          }
        </div>

        <div
          className={`${active?.pg ? "grid" : "hidden"
            } grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full my-5 gap-3`}
        >
          {data?.sk_courses?.data
            ?.filter((item: any) => item?.attributes?.sk_course_program?.data?.attributes?.name == "pg")
            ?.map((item: any, index: number) => {
              const image = getStrapiMedia(data?.logo?.data?.attributes?.url)
            
              return (
                <div key={index}>
                  <DemandedCoursesCard
                   slug={APP_ROUTES.courses(data?.slug,item?.attributes?.sk_course_type?.data?.attributes?.slug,item?.attributes.slug)}

                    logo={image}
                    programName={item.attributes.name}
                    duration={item.attributes.duration}
                    totalUsers={item.attributes.learners_enrolled}
                  />
                </div>
              )
            }
            )
          }
        </div>
        <div
          className={`${active?.ug ? "grid" : "hidden"
            } grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-3 w-full`}
        >
          {data?.sk_courses?.data
            ?.filter((item: any) => item?.attributes?.sk_course_program?.data?.attributes?.name == "ug")
            ?.map((item: any, index: number) => {
              const image = getStrapiMedia(data?.logo?.data?.attributes?.url)
            
              return (
                <div key={index}>
                  <DemandedCoursesCard
                   slug={APP_ROUTES.courses(data?.slug,item?.attributes?.sk_course_type?.data?.attributes?.slug,item?.attributes.slug)}

                    key={index}
                    logo={image}
                    alt={data?.logo?.data?.attributes?.alternativeText ?? 'demanding-course'}
                    programName={item.attributes.name}
                    duration={item.attributes.duration}
                    totalUsers={item.attributes.learners_enrolled}
                  />
                </div>
              )
            }
            )
          }
        </div>

      </div>
    </div>
  );
};

export default ProgramOffered;
