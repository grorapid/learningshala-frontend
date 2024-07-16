"use client";
import React, { useEffect, useState } from "react";
import TopArticles from "../TopArticles";
import TopCourses from "../TopCourses";
import TopUniversities from "../TopUniversities";
import PopularArticles from "../../sections/University/PopularArticles";
import { getBlog } from "@/app/utils/get-blog-by-slug";

const BlogWidgets = () => {
  const [articles, setArticles] = useState<any>([]);
  const getArticles = async () => {
    const res = await getBlog();
    setArticles(res?.data ?? []);
  };
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <div className="col-span-3 md:col-span-1 md:ml-12 flex flex-col">
        <TopArticles page={articles} />
        <TopCourses />
        <TopUniversities />
      </div>
      <div className="col-span-3">
        <PopularArticles page={articles} />
      </div>
    </>
  );
};
export default BlogWidgets;
