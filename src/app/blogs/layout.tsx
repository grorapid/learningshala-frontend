import { getBlog } from "@/app/utils/get-blog-by-slug";
import TopArticles from "@/app/common/components/TopArticles";
import PopularArticles from "../common/sections/University/PopularArticles";
import { HiOutlineChevronRight } from "react-icons/hi";
import NextBreadcrumb from "../common/sections/University/UniversityBreadcrumb";
import TopCourses from "../common/components/TopCourses";
import TopUniversities from "../common/components/TopUniversities";
import React from "react";
import BlogWidgets from "../common/components/BlogsWidget";

const BlogPageLayout = async ({ params, children }: any) => {
  return (
    <div>
      <NextBreadcrumb
        homeElement={"Home"}
        separator={
          <span className="text-brand-primary-blue-main">
            <HiOutlineChevronRight />
          </span>
        }
        activeClasses="text-brand-primary-blue-main"
        containerClasses="flex justify-start container mx-auto mt-7 items-center text-sm text-brand-primary-blue-main"
        listClasses="hover:underline mx-2 text-sm font-semibold"
        capitalizeLinks
      />
      <div className="grid container mx-auto gap-8 my-4 md:my-8 grid-cols-1 md:grid-cols-3">
        {children}
        <BlogWidgets />
      </div>
    </div>
  );
};
export default BlogPageLayout;
