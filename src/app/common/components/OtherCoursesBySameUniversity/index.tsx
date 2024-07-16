"use client";
import { getOtherCourse } from "@/app/utils/get-course-by-slug";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Typography from "../../atoms/Typography";
import DemandedFreeCourses from "../DemandingCoursesSlider";

const OtherCoursesBySameUniversity = () => {
  const params = useParams();
  const [otherCouses, setOtherCourses] = useState([]);
  const { university, program }: any = params;
  const getData = async () => {
    const data = await getOtherCourse(program, university);
    setOtherCourses(data?.data ?? []);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {otherCouses?.length > 0 && (
        <div className="bg-brand-background-blue my-9 py-3">
          <Typography variant="h3" className="container mx-auto mt-3 font-bold">
            Other Popular Courses
          </Typography>
          <DemandedFreeCourses homepage={false} data={otherCouses} />
        </div>
      )}
    </>
  );
};

export default OtherCoursesBySameUniversity;
