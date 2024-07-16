import { string } from "yup";

export const APP_ROUTES = {
  aiSuggest: "/ai-suggest",
  allBlogs: "/blogs",
  comparePage: "/compare",
  aboutus:"/about-us",
  date:(data:string)=>`This page was last updated on ${data?.slice(
    8,
    10
  )}-${data?.slice(
    5,
    7
  )}-${data?.slice(
    0,
    4
  )}`,
  blogs: (slug: string) => `/blogs/${slug}`,
  coursePage:(slug:string) => `/courses/${slug}`,
  lead: "/lead",
  universityPage: (slug: string) => `/universities/${slug}`,
  universityCoursesPage: (slug: string) => `/universities/${slug}/courses`,
  universityAdmissionPage: (slug: string) => `/universities/${slug}/admission`,
  courses: (university: string, program: string, course: string) =>
    `/universities/${university}/courses/${program}/${course}`,
  program: (university: string, program: string) =>
    `/universities/${university}/courses/${program}`,
  course: (university: string) => `/universities/${university}/courses`,
};
