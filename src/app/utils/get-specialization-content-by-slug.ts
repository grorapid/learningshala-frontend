import { fetchAPI } from "@/app/utils/fetch-api";
export async function getCoursesSpecialization(slug: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/sk-course-specifications`;
  const urlParamsObject = {
    filters: {
      slug,
    },
    populate: "deep",
    locale: "en",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}
