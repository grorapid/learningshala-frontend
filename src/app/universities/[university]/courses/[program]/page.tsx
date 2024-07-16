import React from "react";
import { getProgramBySlug } from "@/app/utils/get-search-by-tag";
import Typography from "@/app/common/atoms/Typography";
import Banner from "@/app/common/sections/Courses/Banner";
import SelectCard from "@/app/common/components/SelectCard";
import NewsArticles from "@/app/common/sections/University/NewsArticles";
import RichTextEditor from "@/app/common/components/RichTextEditor";
import UniversityNavigation from "@/app/common/sections/University/UniversityNavigation";
import SimilarCouesesByOthers from "@/app/common/components/SimilarCoursesByOthers";
import OtherCoursesBySameUniversity from "@/app/common/components/OtherCoursesBySameUniversity";
const Program = async ({ params }: any) => {
  const { program } = params;
  const { university } = params;
  const coursesByPrograms = await getProgramBySlug(program, university);
  //const page1 = await getOtherCourse(program, university);
  if (coursesByPrograms?.data?.length === 0) return <div>No data</div>;
  return (
    <div>
      <div >
        <Banner
          program={true}
          admission={false}
          course={false}
          data={coursesByPrograms?.data[0].attributes}
        />
      </div>
      <UniversityNavigation data={{}} />
      <Typography
        variant="body2"
        className="container text-brand-text-primary mx-auto mt-5 font-medium"
      >
        {`This page is last updated at ${coursesByPrograms?.data[0]?.attributes?.updatedAt.slice(
          0,
          10
        )}`}
      </Typography>
      <Typography
        variant="body2"
        component={"div"}
        className="container my-8 mx-auto"
        fontWeight="normal"
      >
        <RichTextEditor
          htmlContent={
            coursesByPrograms?.data[0]?.attributes?.university?.data?.attributes
              ?.aboutUniversity
          }
        />
      </Typography>
      {coursesByPrograms?.data?.length > 0 && (
        <Typography variant="h3" className="container mx-auto my-9 font-bold">
          All the streams of{" "}
          {
            coursesByPrograms?.data[0]?.attributes?.sk_course_type?.data
              ?.attributes?.name
          }
        </Typography>
      )}
      {coursesByPrograms?.data?.length > 0 && (
        <SelectCard
          generic={false}
          specialization={false}
          university={false}
          coursecard={true}
          show={false}
          data={coursesByPrograms}
        />
      )}
      <OtherCoursesBySameUniversity />
      <SimilarCouesesByOthers
        name={
          coursesByPrograms?.data[0]?.attributes?.sk_course_type?.data
            ?.attributes?.name
        }
      />
      {coursesByPrograms?.data[0]?.attributes?.sk_course_type?.data?.attributes
        ?.sk_university_articles?.data?.length > 0 && (
        <div className="container my-7 mx-auto">
          <Typography variant="h3" className="my-7 font-bold">
            Latest Articles
          </Typography>
          <NewsArticles
            show={true}
            data={
              coursesByPrograms?.data[0]?.attributes?.sk_course_type?.data
                ?.attributes?.sk_university_articles
            }
          />
        </div>
      )}
    </div>
  );
};

export default Program;
