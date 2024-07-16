"use client"
import React, { useState } from "react";
import Image from "next/image";
import Button from "../../atoms/Button";
import Link from "next/link";
import Typography from "../../atoms/Typography";
import { APP_ROUTES } from "@/app/utils/app-routes";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import { useParams } from "next/navigation";

const defaultLinks = (slug: string) => [
  {
    label: "Courses",
    section: "courses",
    link: APP_ROUTES.universityCoursesPage(slug),
    image: "/images/courses.svg",
  },
  {
    label: "Admission",
    section: "admission",
    link: APP_ROUTES.universityAdmissionPage(slug),
    image: "/images/admission.svg",
  },
  {
    label:"University",
    section:"university",
    link:APP_ROUTES.universityPage(slug),
    image: "/images/icons8-university-100.png"
  }
];

const UniversityNavigation = ({ data,university }: any) => {
  const params = useParams();
 
  return (
    <div className="flex items-center bg-brand-background-blue  h-16 md:h-24">
      <div className="flex items-center justify-between container mx-auto">
        <div className="flex gap-4 md:gap-6 ">
          {/** Admission Page links course and admission */}
          {defaultLinks(data?.slug ?? params.university)?.map((item: any) => {
            return (
             <Link key={item?.label} href={`${item?.link ?? '#'}`}>
                <div
                  className={`group flex justify-center md:flex-row flex-col text-brand-text-primary font-semibold items-center hover:underline`}
                >
                  {item.image ? (
                    <div className="h-5 w-auto group-hover:text-brand-primary-blue-main group-hover:underline">
                      <Image
                        src={item.image}
                        alt={item?.label ?? 'defaultllink'}
                        height={20}
                        width={20}
                        className="w-auto h-full hover:text-brand-primary-blue-main hover:stroke-brand-primary-blue-main"
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                  <Typography
                    variant="body1"
                    className={`lg:ml-3 md:block  md:ml-1 group-hover:text-brand-primary-blue-main group-hover:underline`}
                  >
                    {item?.label}
                  </Typography>
                </div>
              </Link>
            );
          })}
          {/** This refers to external navigation in any page and will be open in new tab */}
          {data?.extraNavigationItems?.map((item: any) => {
            const iconImage = getStrapiMedia(
              item?.image?.data?.attributes?.url
            );
            return (
              <Link key={item?.label} href={`${item?.link ?? '#'}` } target={"_blank"}>
                <div
                  className={`hidden md:flex justify-center md:flex-row flex-col text-brand-text-primary hover:underline hover:text-brand-primary-blue-main font-semibold items-center`}
                >
                  {iconImage ? (
                    <div className="h-5 w-auto">
                      <Image
                        src={iconImage || ""}
                        alt={item?.image?.data?.attributes?.alternativeText ?? 'extra-nav'}
                        height={24}
                        width={24}
                        className="w-auto h-full"
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                  <Typography
                    variant="body1"
                    className={`lg:ml-3 md:block hidden md:ml-1`}
                  >
                    {item?.label}
                  </Typography>
                </div>
              </Link>
            );
          })}
          {/** End */}
        </div>
        <Link href={`${APP_ROUTES.lead}?source=university`}>
          <Button
            element="div"
            variant="contained"
            size="medium"
            className="lg:text-lg md:text-sm text-xs font-semibold"
            color="primary"
          >
            {`Apply Now`}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default UniversityNavigation;
