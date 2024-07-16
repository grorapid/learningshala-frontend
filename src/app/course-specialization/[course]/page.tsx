import RichTextEditor from "@/app/common/components/RichTextEditor";
import Slider from "@/app/common/components/Slider";
import { getCoursesSpecialization } from "@/app/utils/get-specialization-content-by-slug";
import React from "react";

const Courses = async ({ params }: any) => {
  const { course } = params;
  const page = await getCoursesSpecialization(course);
  const contentSections = page?.data?.[0]?.attributes?.contentSections;
  return contentSections?.map((section: any, index: number) => {
    if (section.__component === "atoms.slider123") {
      return <Slider key={index} data={section} />;
    } else if (section.__component === "atoms.page-content") {
      return (
        <div key={index} className="py-12 md:py-16 container mx-auto">
          <div className="py-12 md:py-16 border rounded">
            <RichTextEditor
              htmlContent={section.content}
              className="custom-content container mx-auto relative"
            />
          </div>
        </div>
      );
    } else {
      <></>;
    }
  });
};

export default Courses;
