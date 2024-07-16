import { fetchAPI } from "@/app/utils/fetch-api";

export async function postLead(data: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/api/sk-lead-forms`;
  const options = {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: data,
  };
  return await fetchAPI(path, options);
}
