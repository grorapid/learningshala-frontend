import { fetchAPI } from "@/app/utils/fetch-api";

export async function getBlogBySlug(slug: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/sk-university-articles`;
  const urlParamsObject = {
    filters: { slug :{
      $eq:slug
    }
       },
    populate: "deep",
    locale: "en",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function getBlog() {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/sk-university-articles`;
    const urlParamsObject = {
     
      populate: "deep",
      locale: "en",
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    return await fetchAPI(path, urlParamsObject, options);
  }

  export async function getBlogByTop() {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/sk-university-articles`;
    const urlParamsObject = {
      filters:{
        toparticle:true
      },
      populate: "deep",
      locale: "en",
      pagination:{
        start:0,
        limit:10
      }
    };
    const options = { headers: { Authorization: `Bearer ${token}` }};
    return await fetchAPI(path, urlParamsObject, options);
  }

  export async function getBlogByUniversity(slug:string) {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/sk-university-articles`;
    const urlParamsObject = {
      filters:{
        universities:{
        name:{
          $eq:slug
        }
        }
      },
      populate: "deep",
      locale: "en",
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    return await fetchAPI(path, urlParamsObject, options);
  }
  
