import Typography from "@/app/common/atoms/Typography";
import RichTextEditor from "@/app/common/components/RichTextEditor";
import Slider from "@/app/common/components/Slider";
import NewsArticles from "@/app/common/sections/University/NewsArticles";
import PopularArticles from "@/app/common/sections/University/PopularArticles";
import { getCoursesType } from "@/app/utils/get-course-type-by-slug";
import React from "react";

const Courses = async ({ params }: any) => {
  const { course } = params;
  const page = await getCoursesType(course);
  const contentSections = page?.data?.[0]?.attributes?.contentSections;
  return contentSections?.map((section: any, index: number) => {
    if (section.__component === "atoms.slider123") {
      return <Slider key={`atoms.slider123 ${index}`} data={section}  home={false} />;
    } else if (section.__component === "atoms.page-content") {
      return (
        <div key={`atoms.page-content ${index}`} className="py-12 md:py-16 container mx-auto">
          <RichTextEditor
            htmlContent={section.content}
            className="custom-content relative"
          />
        </div>
      );
    } else if (section.__component ===  "university.news-updates") {
      return (
        <div key={`university.news-updates ${index}`}>
          {page?.data[0]?.attributes?.sk_university_articles?.data?.length ? (
            <div id="news" className="container my-8 mx-auto ">
              <Typography variant="h3" className="mt-12 mb-9 font-bold">
                Latest Articles on {page?.data[0]?.attributes?.name}
              </Typography>
              <NewsArticles
                show={false}
                data={page?.data[0]?.attributes?.sk_university_articles}
              />
            </div>
          ) : (
            <></>
          )}
          <div className="container my-7 mx-auto">
            {page?.data[0]?.attributes?.sk_university_articles?.data?.length ? (
              <PopularArticles
                data={page?.data[0]?.attributes?.sk_university_articles?.data}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      );
    } else {
      <></>;
    }
  });
};

export default Courses;
