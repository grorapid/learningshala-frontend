// ./frontend/stc/app/[lang]/utils/fetch-api.tsx
import qs from "qs";
import { getStrapiURL } from "./api-helpers";
export const revalidate = 0
export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  try {
    // Merge default and user options
    const mergedOptions: any = {
      cache: 'no-store',
      //next: { revalidate: 3600 },
      // todo add cache later
      //next: { revalidate },
      headers: new Headers({
        "Content-Type": "application/json;charset=UTF-8"   //  HERE!
      }),
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    if(response.ok){
      const data = await response.json();
      return data;
    }

  } catch (error) {
    console.error("jjj",error);
    // throw new Error(
    //   `Please check if your server is running and you set all the required tokens.`
    // );
  }
}
