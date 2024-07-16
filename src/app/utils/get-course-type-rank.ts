import { fetchAPI } from "@/app/utils/fetch-api";
export async function getCourseType() {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/sk-university-courses`;
  const urlParamsObject = {
    populate: "deep",
    locale: "en",
    topCourseRan: {
      $lt: 10,
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}
