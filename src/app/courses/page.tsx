"use client"
import React from "react";
import { useState,useEffect } from "react";
import {
  getCourse,
  getCoursebytype,
} from "../utils/get-course-by-slug";
import ResultCard from "../common/components/AllCourses";
import { getUniversity } from "../utils/get-university-by-slug";





const Courses=() => {
  const [universityPage, setUniversityPage] = useState<any>({});
  const [courseType, setCourseType] = useState<any>({});

  const getUniversityData = async () => {
    const res = await getUniversity();
    setUniversityPage(res);
  };

  const getCourseTypeData = async () => {
    const res = await getCoursebytype();
    setCourseType(res);
  };
  useEffect(() => {
    getUniversityData();
    getCourseTypeData();
  }, []);

  if (!universityPage || !courseType) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <ResultCard show={false} type={courseType} university={universityPage} />
    </>
  );
};


export default Courses;
