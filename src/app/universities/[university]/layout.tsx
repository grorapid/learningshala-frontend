import React from "react";
import Colleges from "../../common/sections/Admission/Colleges";
import NewsArticles from "../../common/sections/University/NewsArticles";
import Typography from "../../common/atoms/Typography";
import { getUniversityBySlug } from "@/app/utils/get-university-by-slug";


const UniversityLayout = async ({ params, children }: any) => {
  const { university } = params;
  const universityData = await getUniversityBySlug(university);
  debugger
  console.log(universityData?.data[0].attributes?.other_universities?.data,universityData?.data[0].attributes?.sk_university_articles, "test------");
  debugger
  return (
    <>
      {children}
      <div className="my-5">
        {universityData?.data[0]?.attributes?.sk_university_articles?.data
          ?.length > 0 && (
          <div className="container my-12 mx-auto">
            <Typography variant="h3" className="my-8 font-bold">
              Latest Articles
            </Typography>
            <NewsArticles
              show={true}
              data={universityData?.data[0]?.attributes?.sk_university_articles}
            />
          </div>
        )}
      </div>
      <div></div>
      <Colleges
        heading={`Other Popular Colleges`}
        colleges={universityData?.data[0]?.attributes?.other_universities?.data ?? []}
      />
    
    </>
  );
};

export default UniversityLayout;
