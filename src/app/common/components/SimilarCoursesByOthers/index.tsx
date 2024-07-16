"use client";
import { getprogrambyotheruniversity } from "@/app/utils/get-course-by-slug";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import DemandedFreeCourses from "../DemandingCoursesSlider";
import Typography from "../../atoms/Typography";

const SimilarCouesesByOthers = ({ name }: any) => {
  const params = useParams();
  const { university, program }: any = params;
  const [similarCourses, setSimilarCourses] = useState([]);
  const getData = async () => {
    const data = await getprogrambyotheruniversity(program, university);
    setSimilarCourses(data.data ?? []);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {similarCourses?.length > 0 && (
        <div className="bg-brand-background-blue my-4 py-6">
          <Typography variant="h3" className="container mx-auto mb-8 font-bold">
            {`${name} by Other University`}
          </Typography>
          <DemandedFreeCourses homepage={false} data={similarCourses} />
        </div>
      )}
    </>
  );
};

export default SimilarCouesesByOthers;
