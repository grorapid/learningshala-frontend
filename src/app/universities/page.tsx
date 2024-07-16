import React from "react";
import { getUniversityByTop } from "../utils/get-university-by-slug";
import NextBreadcrumb from "../common/sections/University/UniversityBreadcrumb";
import { HiOutlineChevronRight } from "react-icons/hi";
import Typography from "../common/atoms/Typography";
import UniversityList from "../common/sections/University/UniversityList";
const University = async () => {
  const page = await getUniversityByTop();
  return (
    <div className="my-5">
      <div className="container mx-auto my-8">
        <NextBreadcrumb
          homeElement={"Home"}
          separator={
            <span className="text-brand-primary-blue-main mb-5">
              <HiOutlineChevronRight />
            </span>
          }
          activeClasses="text-brand-primary-blue-main"
          containerClasses="flex justify-start items-center gap-2 text-sm text-brand-primary-blue-main"
          listClasses="hover:underline mb-5 text-sm font-medium"
          capitalizeLinks
        />
        <Typography variant="h4" className="font-bold">
          {`University Courses and Certification`}
        </Typography>
      </div>
      <div className="border-t border-gray-200 w-full"></div>
      <UniversityList show={true} data={page} />
    </div>
  );
};

export default University;
