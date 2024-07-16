import Banner from "@/app/common/sections/Courses/Banner";
import AboutSection from "@/app/common/sections/Courses/AboutSection";
import React from "react";
import WhatWillYouLearn from "@/app/common/sections/Courses/WhatWillYouLearn";
import Skills from "@/app/common/sections/Courses/Skills";
import Syllabus from "@/app/common/sections/Courses/Syllabus";
import CoursesFAQ from "@/app/common/sections/Courses/CoursesFAQ";
import { getCourseBySlug } from "@/app/utils/get-course-by-slug";
import { headers } from "next/headers";
import TalkToExperts from "@/app/common/components/TalkToExpert";
import Typography from "@/app/common/atoms/Typography";
// import DemandedFreeCourses from "@/app/common/components/DemandingCoursesSlider";
// import { gettopprograms } from "@/app/utils/get-course-by-slug";
import LearnerExperience from "@/app/common/components/LearnerExperience";
const Courses = async ({
  params,
  searchParams,
}: {
  params: any;
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const showModal = searchParams?.modal;
  const { university, program, courses } = params;
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";
  const courseBySlug = await getCourseBySlug(courses);
  // const page1 = await gettopprograms(courses, university);
  if (courseBySlug?.data?.length === 0) return <div>No data</div>;
  return (
    <>
      <div >
        <Banner
          course={true}
          admission={false}
          program={false}
          data={...courseBySlug?.data[0]?.attributes}
        />
      </div>

      <div className="container mt-5 mx-auto">
        {courseBySlug?.data?.[0]?.attributes.about_course?.course_highlights
          ?.length > 0 && (
          <AboutSection
            pathname={pathname}
            showModal={showModal}
            data={...courseBySlug?.data?.[0]?.attributes.about_course}
          />
        )}
        {courseBySlug?.data?.[0]?.attributes?.learnings?.length > 0 && (
          <WhatWillYouLearn
            data={...courseBySlug?.data?.[0]?.attributes?.learnings}
          />
        )}
        {courseBySlug?.data?.[0]?.attributes.skills_section?.length > 0 && (
          <Skills
            data={...courseBySlug?.data?.[0]?.attributes.skills_section}
          />
        )}
        <Syllabus data={...courseBySlug?.data?.[0]?.attributes?.syllabus} />
        {/* <JobRoles /> */}
        {courseBySlug?.data[0]?.attributes?.faq?.length > 0 && (
          <CoursesFAQ data={...courseBySlug?.data[0]?.attributes?.faq} />
        )}
      </div>
      {courseBySlug?.data[0]?.attributes?.expert?.data?.attributes?.expert
        ?.length > 0 && (
        <Typography
          variant="h3"
          component={"h3"}
          className=" font-bold container mx-auto"
        >
          Instructors for the course
        </Typography>
      )}
      {courseBySlug?.data[0]?.attributes?.expert?.data?.attributes?.expert
        ?.length > 0 && (
        <TalkToExperts data={...courseBySlug?.data[0]?.attributes} />
      )}
      {courseBySlug?.data[0]?.attributes?.learners_experience?.learners
        ?.length > 0 && (
        <LearnerExperience
          data={...courseBySlug?.data[0]?.attributes?.learners_experience}
        />
      )}
    </>
  );
};

export default Courses;
