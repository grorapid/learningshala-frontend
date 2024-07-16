"use client"
import React, { useEffect, useState } from "react";
import Typography from "../../atoms/Typography";
import { getTopCourse } from "@/app/utils/get-course-by-slug";
import Link from "next/link";
import { APP_ROUTES } from "@/app/utils/app-routes";

const TopCourses = () => {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getData = async () => {
    const course = await getTopCourse();
    console.log(course)
    setCourse(course?.data ?? []);
    setLoading(false)
  };
  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  if (loading && !course?.length) {
    return <div>Loading...</div>;
  }
  if (!loading && !course?.length) {
    return <div></div>;
  }
  return (
    <div>
      <Typography variant="h4" className="font-semibold text-brand-text-title">
        Top Courses people search
      </Typography>
      <div className="flex flex-col space-y-4 my-6">
        {course
          ?.map((item: any, index: number) => (
            <div key={index}>
              <Link href={APP_ROUTES.coursePage(item?.attributes?.slug)}>
                <div
                  className="text-sm md:text-base hover:underline hover:text-brand-primary-blue-main font-medium"
                  key={index}
                >
                  {item?.attributes?.name},
                  {item?.attributes?.university?.data?.attributes?.name}
                </div>
              </Link>
              <div className="h-[1px] my-3 w-full bg-gray-200"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopCourses;
