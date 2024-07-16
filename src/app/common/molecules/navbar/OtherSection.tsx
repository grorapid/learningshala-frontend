"use client";
import { fetchAPI } from "@/app/utils/fetch-api";
import { getBlogByTop } from "@/app/utils/get-blog-by-slug";
import React, { useEffect, useState } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const NavbarOtherSection = ({ globalData }: any) => {
  const [courses, setCourse] = useState([]);
  const [university, setUniversity] = useState([]);
  const [articles, setArticles] = useState([]);
  const getCourses = async () => {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/sk-course-programs`;
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const urlParamsObject = {
      populate: {
        sk_course_types: {
          populate: "*",
        },
        sk_university_articles: {
          populate: "*",
        },
      },
      pagination: {
        start: 0,
        limit: 10,
      },
      locale: "en",
    };
    const res = await fetchAPI(path, urlParamsObject, options);
    console.log(res);
    if(res){
    setCourse(res?.data);
  }
  };
  const getTopUniversity = async () => {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/universities`;
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const urlParamsObject = {
      filters: {
        topUniversityRank:{
          $lte:[1,10]
        }
      },
      populate: {
        sk_university_articles: {
          populate: "*",
        },
        logo: {
          populate: "*",
        },
      },
      locale: "en",
    };
    const res = await fetchAPI(path, urlParamsObject, options);
    if(res){
      setUniversity(res.data);
    }
    
  };

  const getArticles = async () => {
    const articles = await getBlogByTop();
    if(articles){
      setArticles(articles?.data);
    }
    
  };
  useEffect(() => {
    getArticles();
    getTopUniversity();
    getCourses();
  }, []);
  return (
    <>
      <DesktopNavbar
        courses={courses}
        university={university}
        articles={articles}
        globalData={globalData}
      />
      <MobileNavbar
        courses={courses}
        university={university}
        articles={articles}
        globalData={globalData}
      />
    </>
  );
};

export default NavbarOtherSection;
